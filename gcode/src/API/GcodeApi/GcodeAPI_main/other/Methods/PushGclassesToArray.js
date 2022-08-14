import GcodeAPI from "../../../GcodeAPI.js";

export default class PushGclassesToArray {
  constructor(_this) {
    this.toNotPush = ["Gcommands"];
    this.pushClass(_this);
  }

  pushClass(_this) {
    this.toNotPush.forEach((classToNotPush) => {
      if (_this.constructor.name != classToNotPush) {
        GcodeAPI.array.push(_this);
      }
    });
  }
}