import PushGclassesToArray from "./other/Methods/PushGclassesToArray.js";

export default class GcodeAPI {
  static array = [];

  constructor() {
    this.PushGclassesToArray(this);
  }

  PushGclassesToArray() {
    return new PushGclassesToArray(this);
  }
}
