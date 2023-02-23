import type { ZodError } from "zod";

type OmitFunctions<T extends object> = Pick<
  T,
  Exclude<
    {
      [Key in keyof T]: T[Key] extends (...args: any[]) => any ? never : Key;
    }[keyof T],
    undefined
  >
>;
export type FlattenedZodErrorData<T> = OmitFunctions<
  ReturnType<ZodError<T>["flatten"]>
>;

export function isFlattenedZodError<T>(
  thing: T | unknown
): thing is FlattenedZodErrorData<T> {
  if (!thing || typeof thing !== "object") return false;

  return (
    "formErrors" in thing &&
    Array.isArray(thing.formErrors) &&
    "fieldErrors" in thing &&
    typeof thing.fieldErrors === "object"
  );
}
