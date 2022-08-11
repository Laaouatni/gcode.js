import Gcommands from "../Gcommands.js";

export default class G0 extends Gcommands {
  constructor(_xyzObj) {
    super(_xyzObj);
    this.prefix = `G0`;
  }
}