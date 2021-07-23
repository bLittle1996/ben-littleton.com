import { isString } from "./guards";

export const classNames = (classes: unknown[]): string =>
  classes
    .filter((c) => isString(c))
    .filter(Boolean)
    .join(" ")
    .trim();
