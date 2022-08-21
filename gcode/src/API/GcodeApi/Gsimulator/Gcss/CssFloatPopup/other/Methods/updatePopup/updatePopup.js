import {
  computePosition,
  shift,
  offset,
  arrow,
  autoPlacement,
} from "@floating-ui/dom";

import calcolatePopupArrowXposition from "./other/Methods/calcolatePopupArrowPos/x/calcolatePopupArrowXposition.js";
import calcolatePopupArrowYposition from "./other/Methods/calcolatePopupArrowPos/y/calcolatePopupArrowYposition.js";
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
        x: calcolatePopupArrowXposition(_x, this).popup,
        y: calcolatePopupArrowYposition(_y, this).popup,
      },
      arrow: {
        x: calcolatePopupArrowXposition(_x, this).arrow,
        y: calcolatePopupArrowYposition(_y, this).arrow,
      },
    };
  }
}
