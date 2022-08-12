import GcodeAPI from "../Gmain/GcodeAPI.js";

export default class Gcommands extends GcodeAPI {
  constructor(_xyzObj) {
    super(_xyzObj);
    this.lineOfCode = "⚠️ No line of code - please use getCode() method first";

    this.x = parseInt(_xyzObj.x ?? GcodeAPI.previusX ?? 0);
    this.y = parseInt(_xyzObj.y ?? GcodeAPI.previusY ?? 0);
    this.z = parseInt(_xyzObj.z ?? GcodeAPI.previusZ ?? 0);
  }

  getCode() {
    this.setLastPosition();
    this.lineOfCode = `${this.prefix} X${this.x} Y${this.y} Z${this.z}`;
    return this.lineOfCode;
  }

  setLastPosition() {
    GcodeAPI.previusX = this.x;
    GcodeAPI.previusY = this.y;
    GcodeAPI.previusZ = this.z;
  }

  moveTo(_transformObj) {
    class DirectionValues {
      constructor() {
        this.left = _transformObj.left ?? 0;
        this.right = _transformObj.right ?? 0;

        this.top = _transformObj.top ?? 0;
        this.bottom = _transformObj.bottom ?? 0;
      }
    }

    class GetLastAddedObj {
      constructor() {
        this.objArray = Object.keys(_transformObj).reverse();
        this.XpossibleDirection = ["left", "right"];
        this.YpossibleDirection = ["top", "bottom"];

        this.choosedXDirection = this.objArray.find(
          (element) => element === "left" || element === "right",
        );

        this.choosedYDirection = this.objArray.find(
          (element) => element === "top" || element === "bottom",
        );
      }
    }

    console.log("//////////////////////////");
    console.log(_transformObj);

    console.log(new GetLastAddedObj().choosedXDirection, new GetLastAddedObj().choosedYDirection);

    // console.log(new GetLastAddedObj());
    // console.log(new DirectionValues());

    this.toX = this.x + new DirectionValues().left;
    this.toY = this.y - new DirectionValues().top;

    console.log("/////////////////////");

    return { thisX: this.toX, thisY: this.toY };
  }
}
