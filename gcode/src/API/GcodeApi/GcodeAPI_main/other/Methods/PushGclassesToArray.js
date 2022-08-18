import GcodeAPI from "../../../GcodeAPI_main/GcodeAPI.js";

export default class PushGclassesToArray {
  constructor(_this) {
    this.obj = _this;
    
    this.toNotPush = ["Gcommands"];
    this.pushClass(this.obj);
  }

  pushClass(_this) {
    this.toNotPush.forEach((classToNotPush) => {
      if (_this.constructor.name != classToNotPush) {
        GcodeAPI.array.push(_this);
      }
    });
  }
}