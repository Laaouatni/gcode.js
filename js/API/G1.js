export default class G1 extends Gline {
  constructor(xyzObj) {
    super();
    this.x = xyzObj.x ?? this.previusX;
    this.y = xyzObj.y ?? this.previusY;
    this.z = xyzObj.z ?? this.previusZ;

    this.prefix = `G1`;
  }
}