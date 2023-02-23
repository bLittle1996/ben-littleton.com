export function isFunction<T extends AnyFunction>(
  thing: T | unknown
): thing is T extends AnyFunction ? T : AnyFunction {
  return typeof thing === "function";
}
