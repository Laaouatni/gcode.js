import Gtransform from "../../../API/Gtransform/Gtransform.js";

export default function GtransformTest() {
  // console.log(new Gtransform({ position: "relative", top: 10, left: 20 }).moveTo());
  
  // -1
  console.log(new Gtransform({}));

  // 0
  console.log(new Gtransform().moveTo({left: 10}))
}