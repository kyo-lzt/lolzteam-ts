/**
 * CLI entry point: generate TypeScript clients from OpenAPI schemas.
 */

import { execSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { emitCombinedIndexFile, emitTypesFile } from "./emitter.js";
import { parseSpec } from "./parser.js";

interface ApiConfig {
	schemaPath: string;
	outputDir: string;
	clientName: string;
	defaultBaseUrl: string;
	defaultRateLimit: number;
	defaultSearchRateLimit?: number;
}

const ROOT = join(import.meta.dir, "../..");

const apis: ApiConfig[] = [
	{
		schemaPath: join(ROOT, "schemas/forum.json"),
		outputDir: join(ROOT, "src/generated/forum"),
		clientName: "ForumClient",
		defaultBaseUrl: "https://prod-api.lolz.live",
		defaultRateLimit: 300,
	},
	{
		schemaPath: join(ROOT, "schemas/market.json"),
		outputDir: join(ROOT, "src/generated/market"),
		clientName: "MarketClient",
		defaultBaseUrl: "https://prod-api.lzt.market",
		defaultRateLimit: 120,
		defaultSearchRateLimit: 20,
	},
];

const GENERATED_FILES = new Set(["types.ts", "index.ts"]);

function cleanOutputDir(outputDir: string): void {
	let entries: string[];
	try {
		entries = readdirSync(outputDir);
	} catch {
		return;
	}
	for (const entry of entries) {
		if (!GENERATED_FILES.has(entry)) {
			rmSync(join(outputDir, entry), { force: true });
		}
	}
}

function generateApi(config: ApiConfig): void {
	console.log(`Generating ${config.clientName}...`);

	let rawSpec: Record<string, unknown>;
	try {
		rawSpec = JSON.parse(readFileSync(config.schemaPath, "utf-8")) as Record<string, unknown>;
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		throw new Error(`Failed to parse schema ${config.schemaPath}: ${message}`);
	}
	const result = parseSpec(rawSpec);

	mkdirSync(config.outputDir, { recursive: true });
	cleanOutputDir(config.outputDir);

	// Write types.ts
	const typesContent = emitTypesFile(result.groups, result.componentSchemas);
	writeFileSync(join(config.outputDir, "types.ts"), typesContent);
	console.log("  types.ts");

	// Write index.ts (all group classes + client class)
	const componentSchemaNames = new Set(Object.keys(result.componentSchemas));
	const indexContent = emitCombinedIndexFile(
		result.groups,
		config.clientName,
		config.defaultBaseUrl,
		config.defaultRateLimit,
		config.defaultSearchRateLimit,
		componentSchemaNames,
	);
	writeFileSync(join(config.outputDir, "index.ts"), indexContent);
	console.log("  index.ts");

	console.log(
		`  Done: ${result.groups.length} groups, ${result.groups.reduce((sum, g) => sum + g.methods.length, 0)} operations\n`,
	);
}

for (const api of apis) {
	generateApi(api);
}

// Format generated code with biome to fix long imports and sort them
const generatedDir = join(ROOT, "src/generated");
console.log("Formatting generated code with biome...");
execSync(`bunx biome check --write ${generatedDir}`, { stdio: "inherit" });
