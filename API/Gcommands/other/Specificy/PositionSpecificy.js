export default class PositionSpecificy {
  constructor(_transformObj) {
    this.obj = _transformObj;
    this.objKeysArrayReversed = Object.keys(this.obj).reverse();

    this.XpossibleDirection = ["left", "right"];
    this.YpossibleDirection = ["top", "bottom"];

    this.choosedXDirection = () => {
      return this.objKeysArrayReversed.find((element) => {
        return element === "left" || element === "right";
      });
    };

    this.choosedYDirection = () => {
      return this.objKeysArrayReversed.find((element) => {
        return element === "top" || element === "bottom";
      });
    };

    console.log({
      x: this.choosedXDirection(),
      y: this.choosedYDirection(),
      z:
        this.choosedXDirection() === undefined &&
        this.choosedYDirection() === undefined
          ? "zIndex"
          : undefined,
    });
  }

  getChoosedDirection() {
    return {
      x: this.choosedXDirection(),
      y: this.choosedYDirection(),
      z:
        this.choosedXDirection() === undefined &&
        this.choosedYDirection() === undefined
          ? "zIndex"
          : undefined,
    };
  }
}
