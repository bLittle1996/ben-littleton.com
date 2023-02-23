export function isString(thing: unknown): thing is string {
  return typeof thing === "string";
}
