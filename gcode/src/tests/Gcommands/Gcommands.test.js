import Gcommands from "../../API/GcodeApi/Gcommands/Gcommands.js";

describe("Gcommands", () => {
  describe("imported correctly", () => {
    test("isn't null", () => {
      expect(new Gcommands({})).not.toBeNull();
    });

    test("isn't undefined", () => {
      expect(new Gcommands({})).not.toBeUndefined();
    });

    test("is defined", () => {
      expect(new Gcommands({})).toBeDefined();
    });
  });
});
