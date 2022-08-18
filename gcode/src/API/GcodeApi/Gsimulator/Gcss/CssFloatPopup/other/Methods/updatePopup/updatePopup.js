import { computePosition, shift, offset, arrow, autoPlacement } from "@floating-ui/dom";

export default function updatePopup(_this) {
  computePosition(_this.button, _this.popup, {
    placement: "bottom",
    middleware: [
      autoPlacement(),
      shift({ padding: 8 }),
      offset(8),
      arrow({ element: _this.arrow }),
    ],
  }).then(({ x, y, placement, middlewareData }) => {
    Object.assign(_this.popup.style, {
      left: `${x}px`,
      top: `${y}px`,
    });

    const { x: arrowX, y: arrowY } = middlewareData.arrow;

    const staticSide = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right",
    }[placement.split("-")[0]];

    Object.assign(_this.arrow.style, {
      left: arrowX != null ? `${arrowX}px` : "",
      top: arrowY != null ? `${arrowY}px` : "",
      right: "",
      bottom: "",
      [staticSide]: "-4px",
    });
  });
}


