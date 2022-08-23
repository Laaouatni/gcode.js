export default function calcolatePopupArrowXposition(_x, _this) {
  if (_x > _this.parentPosition.x) {
    console.log("1");
    if (
      _this.parentPosition.x + _this.parentElement.offsetWidth <
      _x + _this.popup.offsetWidth
    ) {
      return {
        popup:
          _this.parentPosition.x +
          _this.parentElement.offsetWidth -
          _this.popup.offsetWidth -
          _this.padding,
        arrow: _this.arrowX,
      };
    }

    return {
      popup: _x,
      arrow: _this.arrowX,
    };
  } else if (_x <= _this.parentPosition.x) {
    console.log("2", _this.arrowX, _this.parentPosition.x - _x, _this.padding);

    return {
      popup: _this.parentPosition.x + _this.padding,
      arrow: 0 + _this.padding,
    };
  }
}
