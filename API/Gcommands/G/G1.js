import Gcommands from "../Gcommands.js";

export default class G1 extends Gcommands {
  constructor(_xyzObj) {
    super(_xyzObj);
    this.prefix = `G1`;
  }
}
