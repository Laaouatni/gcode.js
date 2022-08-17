import updatePopup from "./other/Methods/updatePopup/updatePopup";

export default class CssFloatPopup {
  constructor(_obj) {
    this.obj = _obj;

    this.button = this.obj.button;
    this.popup = this.obj.popup;
    this.arrow = this.obj.arrow ?? this.obj.popup.querySelector("#arrow");

    this.addEvents();
  }

  hidePopup() {
    this.popup.style.display = "none";
  }

  showPopup() {
    this.popup.style.display = "block";
    updatePopup(this.obj);
  }

  addEvents() {
    this.button.addEventListener("mouseenter", () => {
      this.showPopup();
    });

    this.button.addEventListener("mouseleave", () => {
      this.hidePopup();
    });
  }

  addDefaultStyles() {
    // TODO: finish from here (create obj with styles then add them with forloop)
  }
}
