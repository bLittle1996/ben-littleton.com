import { isSymbolObject } from "util/types";
import { cancellable, classNames } from "..";

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

  describe(cancellable, () => {
    it("returns a tuple [passedInFunction, canceller]", () => {
      const doSomething = jest.fn();
      const [actuallyDoSomething, stopIt] = cancellable(doSomething);

      expect(actuallyDoSomething).toBeInstanceOf(Function);
      expect(stopIt).toBeInstanceOf(Function);
    });

    it("will allow passed in callback to be called until cancel callback is called", () => {
      const doSomething = jest.fn();
      const [actuallyDoSomething, stopIt] = cancellable(doSomething);

      actuallyDoSomething();
      expect(doSomething).toHaveBeenCalledTimes(1);
      stopIt();
      actuallyDoSomething();
      expect(doSomething).toHaveBeenCalledTimes(1);
    });

    it("returns the Symbol `cancellable.cancelled` if actuallyDoSomething is called after cancelling", () => {
      const doSomething = jest.fn();
      const [actuallyDoSomething, stopIt] = cancellable(doSomething);
      stopIt();
      const symbol = actuallyDoSomething();

      expect(typeof symbol).toBe("symbol");
      expect(symbol).toBe(cancellable.cancelled);
    });

    it("optionally throws if called when cancelled when second parameter is true", () => {
      const doSomething = jest.fn();
      const [actuallyDoSomething, stopIt] = cancellable(doSomething, true);
      stopIt();

      expect(() => actuallyDoSomething()).toThrow();
    });
  });
});
