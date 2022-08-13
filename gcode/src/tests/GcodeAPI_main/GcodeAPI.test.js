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
});
