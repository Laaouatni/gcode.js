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
    this.span.innerHTML = this.styleCustomSpanHTML();
    updatePopup(this);
  }

  styleCustomSpanHTML() {
    this.lineParsedJson = JSON.parse(this.button.dataset.line);
    this.linePopupSpanHtml = `
    <div style="display: flex; align-items: center; gap: 1rem; width: min-content; font-family: poppins;">
      <div>
        <div style="display: flex; align-items: center; font-size: 2rem; gap: 0.5rem;">
          <div style="font-size: 2rem; font-weight: bold;">X</div>
          <div style="display: flex; align-items: baseline;">
            <div>${this.lineParsedJson.x.split(".")[0]}</div>
            <div style="font-size: 1.5rem;">.${
              this.lineParsedJson.x.split(".")[1]
            }</div>
          </div>
        </div>

        <div style="display: flex; align-items: center; font-size: 2rem; gap: 0.5rem;">
          <div style="font-size: 2rem; font-weight: bold;">Y</div>
          <div style="display: flex; align-items: baseline;">
            <div>${this.lineParsedJson.y.split(".")[0]}</div>
            <div style="font-size: 1.5rem;">.${
              this.lineParsedJson.y.split(".")[1]
            }</div>
          </div>
        </div>
      </div>

      <div>
        <div style="display: flex; align-items: center; font-size: 2rem; gap: 0.5rem;">
          <div style="font-size: 2rem; font-weight: bold;">LENGTH</div>
          <div style="display: flex; align-items: baseline;">
            <div>${this.lineParsedJson.length.split(".")[0]}</div>
            <div style="font-size: 1.5rem;">.${
              this.lineParsedJson.length.split(".")[1]
            }</div>
          </div>
        </div>

        <div style="display: flex; align-items: center; font-size: 2rem; gap: 0.5rem;">
          <div style="font-size: 2rem; font-weight: bold;">ANGLE&nbsp;&nbsp;&nbsp;</div>
          <div style="display: flex; align-items: baseline;">
            <div>${this.lineParsedJson.angle.split(".")[0]}</div>
            <div style="font-size: 1.5rem;">.${
              this.lineParsedJson.angle.split(".")[1]
            }</div>
          </div>
        </div>
      </div>
    </div>
    `;

    return this.linePopupSpanHtml;
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
      width: "1rem",
      height: "1rem",
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
