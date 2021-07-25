export const isString = (thing: unknown): thing is string =>
  typeof thing === "string";

export const isBoolean = (thing: unknown): thing is boolean =>
  typeof thing === "boolean";
