export default function calcolatePopupArrowYposition(_y, _this) {
  if (_y > _this.parentPosition.y) {
    if (
      _this.parentPosition.y + _this.parentElement.offsetHeight <
      _y + _this.popup.offsetHeight
    ) {
      return {
        popup:
          _this.parentPosition.y +
          _this.parentElement.offsetHeight -
          _this.popup.offsetHeight -
          _this.padding,
        arrow: _this.arrowY,
      };
    }

    return {
      popup: _y,
      arrow: _this.arrowY,
    };
  } else if (_y < _this.parentPosition.y) {
    return {
      popup: _this.parentPosition.y + _this.padding,
      arrow: 0
    };
  }
}
