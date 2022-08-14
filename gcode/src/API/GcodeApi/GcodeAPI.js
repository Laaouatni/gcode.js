import PushGclassesToArray from "./GcodeAPI_main/other/Methods/PushGclassesToArray.js";
export default class GcodeAPI {
  static array = [];

  constructor() {
    new PushGclassesToArray(this);

    console.log(GcodeAPI.array)
  }
}
