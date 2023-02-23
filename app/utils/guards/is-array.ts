export function isArray<T extends any[]>(
  things: T | unknown
): things is T extends any[] ? T : any[] {
  return Array.isArray(things);
}
