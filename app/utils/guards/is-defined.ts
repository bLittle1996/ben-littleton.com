export function isDefined<T>(thing: T | undefined): thing is T {
  return typeof thing !== "undefined";
}
