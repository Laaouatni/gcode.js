export default class DirectionValues {
  constructor(_transformObj) {
    this.obj = _transformObj;
    
    this.left = this.obj.left ?? 0;
    this.right = this.obj.right ?? 0;

    this.top = this.obj.top ?? 0;
    this.bottom = this.obj.bottom ?? 0;
  }
}