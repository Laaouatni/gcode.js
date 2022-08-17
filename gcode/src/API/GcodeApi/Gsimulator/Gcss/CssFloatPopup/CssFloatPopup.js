import updatePopup from './other/Methods/updatePopup/updatePopup';

export default class CssFloatPopup {
  constructor(_obj) {
    this.obj = _obj;

    console.log(this.obj)

    this.button = _obj.button;
    this.popup = _obj.popup;
    this.arrow = _obj.arrow ?? _obj.popup.querySelector("#arrow");

    this.addEvents();
  }

  update() {
    updatePopup(this.obj);
  }

  showPopup() {
    this.popup.style.display = "block";
  }

  hidePopup() {
    this.popup.style.display = "none";
  }

  addEvents() {
    [
      ["mouseenter", this.showPopup],
      ["focus", this.showPopup],
      ["mouseleave", this.hidePopup],
      ["blur", this.hidePopup],
    ].forEach(([event, listener]) => {
      this.button.addEventListener(event, listener);
    });
  }
}
