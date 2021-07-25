import { classNames } from "..";

describe("Utility Functions", () => {
  describe(classNames, () => {
    it("returns a string from string elements that are passed in", () => {
      const elements = [
        "bg-red-500",
        "some-fancy-shmancy-class",
        4 + 4 === 3 && "math-doesnt-check-out",
        false,
        true,
        () => "you better not call me",
        {},
        ["ahawehawhea"],
        1 + 1 === 2 && "math does check out",
        Infinity && "Beyond!",
        -Infinity,
      ];

      const expectedClassName =
        "bg-red-500 some-fancy-shmancy-class math does check out Beyond!";

      expect(classNames(elements)).toBe(expectedClassName);
    });
  });
});
