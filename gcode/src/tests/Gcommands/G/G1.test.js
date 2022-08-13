import G1 from "../../../API/GcodeApi/Gcommands/G/G1.js";

describe("G1", () => {
  describe("imported correcly", () => {
    test("isn't null", () => {
      expect(new G1({})).not.toBeNull();
    });

    test("isn't undefined", () => {
      expect(new G1({})).not.toBeUndefined();
    });

    test("is defined", () => {
      expect(new G1({})).toBeDefined();
    });
  });

  describe("prefix", () => {
    test("is G1", () => {
      expect(new G1({}).prefix).toBe("G1");
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
            expect(new G1(obj).x).not.toBe("0");
            expect(new G1(obj).x).toBe(obj.x);
          });
        });
      });

      describe("y object", () => {
        let obj = {
          y: 10,
        };

        test("defined y", () => {
          expect(new G1(obj).y).not.toBe("0");
          expect(new G1(obj).y).toBe(obj.y);
        });
      });

      describe("z object", () => {
        let obj = {
          z: 10,
        };

        test("defined z", () => {
          expect(new G1(obj).z).not.toBe("0");
          expect(new G1(obj).z).toBe(obj.z);
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
        expect(new G1(obj).x).toBe(obj.x);
        expect(new G1(obj).y).toBe(obj.y);
        expect(new G1(obj).z).toBe(obj.z);
      });
    });
  });
});
