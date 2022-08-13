import DirectionValues from "../../API/GcodeApi/Gcommands/other/DirectionValues/DirectionValues.js";

describe("DirectionValues", () => {
  describe("all values passed", () => {
    let obj = {
      left: 10,
      bottom: 15,
      right: 20,
      top: 25,
    };

    test("this.obj", () => {
      expect(new DirectionValues(obj).obj).toBe(obj);
    });

    describe("testing every position", () => {
      test("top", () => {
        expect(new DirectionValues(obj).top).toBe(obj.top);
      });

      test("bottom", () => {
        expect(new DirectionValues(obj).bottom).toBe(obj.bottom);
      });

      test("right", () => {
        expect(new DirectionValues(obj).right).toBe(obj.right);
      });

      test("left", () => {
        expect(new DirectionValues(obj).left).toBe(obj.left);
      });
    });
  });
});
