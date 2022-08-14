import GcodeAPI from "../../../GcodeAPI.js";

export default class PushGclassesToArray {
  constructor(_this) {
    this.toNotPush = ["Gcommands"];

    if (_this.constructor.name != this.toNotPush[0]) {
      GcodeAPI.array.push(_this);
    }
  }
}