export const isString = (thing: unknown): thing is string =>
  typeof thing === "string";
