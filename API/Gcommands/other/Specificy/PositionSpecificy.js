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
    });
  }

  getChoosedDirection() {
    return {
      x: this.choosedXDirection(),
      y: this.choosedYDirection(),
    };
  }
}
