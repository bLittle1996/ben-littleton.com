import { isString } from "../guards";

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
    });
  });
});
