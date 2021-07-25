import { isString } from "./guards";

export const classNames = (classes: unknown[]): string =>
  classes
    .filter((c) => isString(c))
    .filter(Boolean)
    .join(" ")
    .trim();

export const cancellable = <T extends (...args: any) => any>(
  doSomething: T,
  shouldThrow = false
): [(...params: Parameters<T>) => ReturnType<T> | Symbol, () => void] => {
  let shouldDoSomething = true;

  const cancellableCallback = (
    ...params: Parameters<T>
  ): ReturnType<T> | Symbol => {
    if (shouldDoSomething) {
      return doSomething(...params);
    } else if (shouldThrow) {
      throw new Error("callback cancelled");
    }

    return cancellable.cancelled;
  };

  const unregister = () => {
    shouldDoSomething = false;
  };

  return [cancellableCallback, unregister];
};
cancellable.cancelled = Symbol("cancelled");
