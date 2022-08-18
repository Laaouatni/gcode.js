import updatePopup from "./other/Methods/updatePopup/updatePopup";

export default class CssFloatPopup {
  constructor(_obj) {
    this.obj = _obj;

    this.button = this.obj.button;
    this.popup = this.obj.popup;
    this.arrow = this.obj.arrow ?? this.obj.popup.querySelector("#arrow");

    this.addDefaultStyles();
    this.addEvents();
  }

  hidePopup() {
    this.popup.style.display = "none";
  }

  showPopup() {
    this.popup.style.display = "block";
    this.popup.querySelector(
      "span",
    ).textContent = `${this.button.dataset.after}`;
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
