import { describe } from "vitest";
import GcodeAPI from "../../API/GcodeApi/GcodeAPI.js";

describe("GcodeAPI main", () => {
  describe("imported correctly", () => {
    test("isn't null", () => {
      expect(new GcodeAPI()).not.toBeNull();
    });

    test("isn't undefined", () => {
      expect(new GcodeAPI()).not.toBeUndefined();
    });

    test("is defined", () => {
      expect(new GcodeAPI()).toBeDefined();
    });
  });

  // describe("static array", () => {
  //   test("not Gcommands", () => {
  //     expect(GcodeAPI.array).not.toBe("Gcommands")
  //   })
  // })
});
