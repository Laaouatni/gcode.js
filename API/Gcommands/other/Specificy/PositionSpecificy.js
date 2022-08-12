export default class PositionSpecificy {
  constructor() {
    this.objArray = Object.keys(_transformObj).reverse();

    this.XpossibleDirection = ["left", "right"];
    this.YpossibleDirection = ["top", "bottom"];

    this.choosedXDirection = () => {
      this.objArray.find(
        (element) =>
          element === this.XpossibleDirection[0] ||
          element === this.XpossibleDirection[1],
      );
    };

    this.choosedYDirection = () => {
      this.objArray.find(
        (element) =>
          element === this.YpossibleDirection[0] ||
          element === this.YpossibleDirection[1],
      );
    };
  }

  getChoosedDirection() {
    return {
      x: this.choosedXDirection(),
      y: this.choosedYDirection(),
    };
  }
}