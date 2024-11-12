import { describe, expect, it } from "@jest/globals";
import { sum } from ".";

describe("lib", () => {
  describe("sum", () => {
    it("it adds a to b", () => {
      const a = 3;
      const b = 5;
      const actual = sum(a, b);
      expect(actual).toBe(3 + 5);
    });
  });
});
