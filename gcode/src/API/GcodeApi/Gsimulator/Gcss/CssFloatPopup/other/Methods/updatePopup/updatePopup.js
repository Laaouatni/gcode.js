import {
  computePosition,
  shift,
  offset,
  arrow,
  autoPlacement,
} from "@floating-ui/dom";

export default class UpdatePopup {
  constructor(_this) {
    this.button = _this.button;
    this.popup = _this.popup;
    this.arrow = _this.arrow;

    this.parentElement = _this.parentElement;

    this.parentPosition = {
      x: this.parentElement.getBoundingClientRect().x,
      y: this.parentElement.getBoundingClientRect().y,
    };

    this.padding = 8;
  }

  update() {
    computePosition(this.button, this.popup, {
      middleware: [
        autoPlacement(),
        shift({ padding: this.padding }),
        offset(this.padding),
        arrow({ element: this.arrow }),
      ],
    }).then(({ x, y, placement, middlewareData }) => {
      ({ x: this.arrowX, y: this.arrowY } = middlewareData.arrow);

      this.choosedPos = this.calcolatePosition(x, y);

      Object.assign(this.popup.style, {
        left: `${this.choosedPos.popup.x}px`,
        top: `${this.choosedPos.popup.y}px`,
      });

      this.staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
      }[placement.split("-")[0]];

      Object.assign(this.arrow.style, {
        left: this.arrowX != null ? `${this.choosedPos.arrow.x}px` : "",
        top: this.arrowY != null ? `${this.choosedPos.arrow.y}px` : "",
        right: "",
        bottom: "",
        [this.staticSide]: `${this.padding * -1}px`,
      });
    });
  }

  calcolatePosition(_x, _y) {
    return {
      popup: {
        x: this.calcolateXposition(_x).popup,
        y: this.calcolateYposition(_y).popup,
      },
      arrow: {
        x: this.calcolateXposition(_x).arrow,
        y: this.calcolateYposition(_y).arrow,
      },
    };
  }

  calcolateXposition(_x) {
    if (_x > this.parentPosition.x) {
      if (
        this.parentPosition.x + this.parentElement.offsetWidth <
        _x + this.popup.offsetWidth
      ) {
        return {
          popup:
            this.parentPosition.x +
            this.parentElement.offsetWidth -
            this.popup.offsetWidth -
            this.padding,
          arrow: this.arrowX,
        };
      }
      return {
        popup: _x,
        arrow: this.arrowX,
      };
    } else if (_x <= this.parentPosition.x) {
      return {
        popup: this.parentPosition.x + this.padding,
        arrow: this.arrowX - (this.parentPosition.x - _x),
      };
    }
  }

  calcolateYposition(_y) {
    if (_y > this.parentPosition.y) {
      console.log({parenty: this.parentPosition.y, parentheight: this.parentElement.offsetHeight, popupheight: this.popup.offsetHeight, y: _y});
      return {
        popup: _y,
        arrow: this.arrowY,
      };
    } else if (_y < this.parentPosition.y) {
      return {
        popup: this.parentPosition.y + this.padding,
        arrow: this.arrowY - (this.parentPosition.y - _y) + this.padding,
      };
    }
  }
}
