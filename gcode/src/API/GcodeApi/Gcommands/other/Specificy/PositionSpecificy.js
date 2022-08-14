export default class PositionSpecificy {
  constructor(_transformObj) {
    this.obj = _transformObj;
    this.objKeysArrayReversed = Object.keys(this.obj).reverse();

    this.XpossibleDirection = ["left", "right"];
    this.YpossibleDirection = ["top", "bottom"];

    this.choosedXDirection = () => {
      return this.objKeysArrayReversed.find((element) => {
        return (
          element === this.XpossibleDirection[0] ||
          element === this.XpossibleDirection[1]
        );
      });
    };

    this.choosedYDirection = () => {
      return this.objKeysArrayReversed.find((element) => {
        return (
          element === this.YpossibleDirection[0] ||
          element === this.YpossibleDirection[1]
        );
      });
    };
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
