import { isBoolean, isString } from "../guards";

describe("guards", () => {
  const types = [
    -Infinity,
    -69,
    0,
    69,
    Infinity,
    NaN,
    "",
    "yeet",
    {},
    [],
    () => {},
    Symbol("Geoff"),
    true,
    false,
    undefined,
    null,
  ];

  describe(isString, () => {
    it("returns correctly asserts string types", () => {
      expect(types.filter(isString)).toHaveLength(2);
      expect(
        types.filter(isString).every((thing) => typeof thing === "string")
      ).toBe(true);
    });
  });

  describe(isBoolean, () => {
    it("returns correctly asserts boolean types", () => {
      expect(types.filter(isBoolean)).toHaveLength(2);
      expect(
        types.filter(isBoolean).every((thing) => typeof thing === "boolean")
      ).toBe(true);
    });
  });
});
