import updatePopup from "./other/Methods/updatePopup/updatePopup.js";

export default class CssFloatPopup {
  static popup;
  static span;
  static arrow;
  
  static {
    CssFloatPopup.popup = document.createElement("div");
    CssFloatPopup.span = document.createElement("span");
    CssFloatPopup.arrow = document.createElement("div");

    CssFloatPopup.popup.id = "tooltip";

    CssFloatPopup.span.style.setProperty("white-space", "pre");

    CssFloatPopup.arrow.id = "arrow";

    CssFloatPopup.popup.appendChild(CssFloatPopup.span);
    CssFloatPopup.popup.appendChild(CssFloatPopup.arrow);
  }

  constructor(_obj) {
    this.obj = _obj;

    this.button = this.obj.button;
    
    this.popup = CssFloatPopup.popup;
    this.arrow = CssFloatPopup.arrow;
    this.span = CssFloatPopup.span;

    this.addDefaultStyles();
    this.addEvents();
  }

  hidePopup() {
    this.popup.style.display = "none";
  }

  showPopup() {
    this.popup.style.display = "block";
    this.span.textContent = `${this.button.dataset.line}`;
    updatePopup(this);
  }

  addEvents() {
    this.button.addEventListener("mouseenter", () => {
      this.showPopup();
    });

    this.button.addEventListener("mouseleave", () => {
      this.hidePopup();
    });
  }

  stylePopup() {
    this.popupStylesToAdd = {
      display: "none",
      position: "absolute",
      top: 0,
      left: 0,
    };

    this.popupKeysArray = Object.keys(this.popupStylesToAdd);
    this.PopupValuesArray = Object.values(this.popupStylesToAdd);

    this.popupKeysArray.forEach((key, index) => {
      this.popup.style.setProperty(key, this.PopupValuesArray[index]);
    });

    this.span.style.setProperty("white-space", "pre");
  }

  styleArrow() {
    this.arrowStylesToAdd = {
      position: "absolute",
      width: "8px",
      height: "8px",
      transform: "rotate(45deg)",
      "z-index": -1,
    };

    this.arrowKeysArray = Object.keys(this.arrowStylesToAdd);
    this.arrowValuesArray = Object.values(this.arrowStylesToAdd);

    this.arrowKeysArray.forEach((key, index) => {
      this.arrow.style.setProperty(key, this.arrowValuesArray[index]);
    });
  }

  addDefaultStyles() {
    this.stylePopup();
    this.styleArrow();
  }
}
