class ParentClass {
  constructor() {
    /* at the start is 0 because we didn't call it */
    this.previusX = 0;
    this.previusY = 0;
    this.previusZ = 0;
  }

  // if we call a newChildClass() the previus values will not be 0 anymore, but the current x, y, z values.
  setLastPosition() {
    this.previusX = this.x;
    this.previusY = this.y;
    this.previusZ = this.z;
  }
}

class ChildClass extends ParentClass {
  constructor(_obj) {
    super();
    // if there is no obj, then use the previus position (that is the last position)
    // this techically works because we use "??"
    this.x = _obj.x ?? this.previusX;
    this.y = _obj.y ?? this.previusY;
    this.z = _obj.z ?? this.previusZ;

    // if result is not set, then it will be a error, but we will change it (here is work fine, no problem in that)
    this.result = "ERROR";
  }

  print() {
    this.result = `X${this.x} Y${this.y} Z${this.z}`;
    // ❌ this is not working properly, technically
    // if I console.log previusX, previusY, previusZ, it will print the current x, y, z values,
    // but in the next ChildClass it doesn't remember the previus values that are save in parentClass

    // I thinked that if I have for example 10 childrens, the parent be only one
    // and all that children can get the previus values from the parentClass.
    this.setLastPosition();

    return this.result;
  }
}