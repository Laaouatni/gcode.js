export default class GcodeAPI {
  static array = [];

  constructor() {
    console.log(GcodeAPI.array);

    this.addGcommandToArray = this.addGcommandsToArray();
  }

  addGcommandToArray() {
    this.notToPush = ["Gcommands"];

    console.log(this.notToPush);

    if (this.constructor.name != this.notToPush[0]) {
      GcodeAPI.array.push(this);
    }
  }
}
