export default function getPopupSpanHtml(_this) {
  return `
  <div style="display: flex; align-items: center; gap: 1rem; width: min-content; font-family: poppins, system-ui;">
    <div>
      <div style="display: flex; align-items: center; font-size: 1rem; gap: 0.5rem;">
        <div style="font-size: 1rem; font-weight: bold;">X</div>
        <div style="display: flex; align-items: baseline;">
          <div>${JSON.parse(_this.button.dataset.line).x.split(".")[0]}</div>
          <div style="font-size: 0.7rem;">.${
            JSON.parse(_this.button.dataset.line).x.split(".")[1]
          }</div>
        </div>
      </div>

      <div style="display: flex; align-items: center; font-size: 1rem; gap: 0.5rem;">
        <div style="font-size: 1rem; font-weight: bold;">Y</div>
        <div style="display: flex; align-items: baseline;">
          <div>${JSON.parse(_this.button.dataset.line).y.split(".")[0]}</div>
          <div style="font-size: 0.7rem;">.${
            JSON.parse(_this.button.dataset.line).y.split(".")[1]
          }</div>
        </div>
      </div>
    </div>

    <div>
      <div style="display: flex; align-items: center; font-size: 1rem; gap: 0.5rem;">
        <div style="font-size: 1rem; font-weight: bold;">LENGTH</div>
        <div style="display: flex; align-items: baseline;">
          <div>${JSON.parse(_this.button.dataset.line).length.split(".")[0]}</div>
          <div style="font-size: 0.7rem;">.${
            JSON.parse(_this.button.dataset.line).length.split(".")[1]
          }</div>
        </div>
      </div>

      <div style="display: flex; align-items: center; font-size: 1rem; gap: 0.5rem;">
        <div style="font-size: 1rem; font-weight: bold;">ANGLE&nbsp;&nbsp;</div>
        <div style="display: flex; align-items: baseline;">
          <div>${JSON.parse(_this.button.dataset.line).angle.split(".")[0]}</div>
          <div style="font-size: 0.7rem;">.${
            JSON.parse(_this.button.dataset.line).angle.split(".")[1]
          }</div>
        </div>
      </div>
    </div>
  </div>
  `;
}
