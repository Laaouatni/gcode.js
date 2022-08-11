export default class GcodeAPI {
  setLastPosition() {
    GcodeAPI.previusX = "❌" +this.x;
    GcodeAPI.previusY = "❌" +this.y;
    GcodeAPI.previusZ = "❌" +this.z;
  }
}