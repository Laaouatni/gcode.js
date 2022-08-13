import G0 from "../../../API/GcodeApi/Gcommands/G/G0.js";

describe("G0", () => {
  describe("imported correcly", () => {
    test("isn't null", () => {
      expect(new G0({})).not.toBeNull();
    });

    test("isn't undefined", () => {
      expect(new G0({})).not.toBeUndefined();
    });

    test("is defined", () => {
      expect(new G0({})).toBeDefined();
    });
  });

  describe("prefix", () => {
    test("is G0", () => {
      expect(new G0({}).prefix).toBe("G0");
    });
  });

  describe("coordinates", () => {
    describe("after adding adding a object", () => {
      describe("only one object", () => {
        describe("x object", () => {
          let obj = {
            x: 10,
          };

          test("defined x", () => {
            expect(new G0(obj).x).not.toBe("0");
            expect(new G0(obj).x).toBe(obj.x);
          });
        });
      });

      describe("y object", () => {
        let obj = {
          y: 10,
        };

        test("defined y", () => {
          expect(new G0(obj).y).not.toBe("0");
          expect(new G0(obj).y).toBe(obj.y);
        });
      });

      describe("z object", () => {
        let obj = {
          z: 10,
        };

        test("defined z", () => {
          expect(new G0(obj).z).not.toBe("0");
          expect(new G0(obj).z).toBe(obj.z);
        });
      });
    });

    describe("every object is added", () => {
      let obj = {
        x: 10,
        y: 20,
        z: 30,
      };

      test("obj", () => {
        expect(new G0(obj).x).toBe(obj.x);
        expect(new G0(obj).y).toBe(obj.y);
        expect(new G0(obj).z).toBe(obj.z);
      });
    });
  });
});
