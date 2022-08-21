export default function calcolatePopupArrowXposition(_x, _this) {
  if (_x > _this.parentPosition.x) {
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
    return {
      popup: _this.parentPosition.x + _this.padding,
      arrow:
        _this.arrowX -
        (_this.parentPosition.x - _x) +
        _this.padding +
        _this.radiusPopup,
    };
  }
}
