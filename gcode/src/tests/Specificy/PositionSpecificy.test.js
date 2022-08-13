import PositionSpecificy from "../../API/GcodeApi/Gcommands/other/Specificy/PositionSpecificy.js";

let obj = {
  left: 10,
  bottom: 15,
  right: 20,
  top: 25,
};

describe("PositionSpecificy", () => {
  test("this.obj is defined", () => {
    expect(new PositionSpecificy(obj).obj).toBe(obj);
  });
});