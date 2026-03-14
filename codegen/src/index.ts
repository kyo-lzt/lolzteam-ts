/**
 * CLI entry point: generate TypeScript clients from OpenAPI schemas.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { emitGroupFile, emitIndexFile, emitTypesFile } from "./emitter.js";
import { parseSpec } from "./parser.js";
import { groupToFileName } from "./utils/naming.js";

interface ApiConfig {
	schemaPath: string;
	outputDir: string;
	clientName: string;
	defaultBaseUrl: string;
	defaultRateLimit: number;
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
	},
];

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

	// Write types.ts
	const typesContent = emitTypesFile(result.groups, result.componentSchemas);
	writeFileSync(join(config.outputDir, "types.ts"), typesContent);
	console.log("  types.ts");

	// Write group files
	for (const group of result.groups) {
		const fileName = groupToFileName(group.groupName);
		const content = emitGroupFile(group);
		writeFileSync(join(config.outputDir, `${fileName}.ts`), content);
		console.log(`  ${fileName}.ts`);
	}

	// Write index.ts
	const indexContent = emitIndexFile(
		result.groups,
		config.clientName,
		config.defaultBaseUrl,
		config.defaultRateLimit,
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
