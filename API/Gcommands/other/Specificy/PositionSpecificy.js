export default class PositionSpecificy {
  constructor(_transformObj) {
    this.obj = _transformObj;
    this.objKeysArrayReversed = Object.keys(this.obj).reverse();

    this.XpossibleDirection = ["left", "right"];
    this.YpossibleDirection = ["top", "bottom"];

    this.choosedXDirection = () => {
      this.objKeysArrayReversed.find((element, index) => {
        return element === `${this.XpossibleDirection[index]}`;
      });
    };

    this.choosedYDirection = () => {
      this.objKeysArrayReversed.find((element, index) => {
        return element === `${this.YpossibleDirection[index]}`;
      });
    };
  }

  getChoosedDirection() {
    return {
      x: this.choosedXDirection(),
      y: this.choosedYDirection(),
    };
  }
}
