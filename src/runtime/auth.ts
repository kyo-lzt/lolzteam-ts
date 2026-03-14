export function applyAuth(headers: Record<string, string>, token: string): Record<string, string> {
	return { ...headers, Authorization: `Bearer ${token}` };
}
