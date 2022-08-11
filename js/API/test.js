class ParentClass {

}

class ChildClass extends ParentClass {
  constructor(_obj) {
    super();
    this.x = _obj.x ?? ParentClass.previusX ?? 0;
    this.y = _obj.y ?? ParentClass.previusY ?? 0;
    this.z = _obj.z ?? ParentClass.previusZ ?? 0;

    this.result = "ERROR";
  }

  print() {
    this.result = `X${this.x} Y${this.y} Z${this.z}`;
    this.setLastPosition();

    return this.result;
  }

  setLastPosition() {
    ParentClass.previusX = this.x;
    ParentClass.previusY = this.y;
    ParentClass.previusZ = this.z;

    console.log(ParentClass.previusY)
  }
}

test();

function test() {
  console.log(new ChildClass({ x: 1, y: 2 }).print());

  console.log(new ChildClass({ x: 4, y: 5 }).print());

  console.log(new ChildClass({ x: 3 }).print());

  console.log(new ChildClass({ z: 18 }).print());

  console.log(new ChildClass({ x: 8, y: 20, z: 30 }).print());
}
