import DirectionValues from "../../../API/GcodeApi/Gcommands/other/DirectionValues/DirectionValues.js";

export default function DirectionValuesTEST() {
  console.warn(
    "🧪 TEST STARTED: DIRECTION_VALUES (left, right, top, bottom) 🏃‍♂️",
  );

  let obj = { left: 12, bottom: 15, right: 17, top: 23 };
  // -1
  console.log(new DirectionValues(obj));

  // 0

  console.log(new DirectionValues(obj).obj)

  // 0
  console.log({ left: new DirectionValues(obj).left });

  // 1
  console.log({ right: new DirectionValues(obj).right });

  // 2
  console.log({ top: new DirectionValues(obj).top });

  // 3
  console.log({ bottom: new DirectionValues(obj).bottom });

  // 4
  console.warn("🧪 TEST FINISHED: DIRECTION_VALUES 🚩");
}
