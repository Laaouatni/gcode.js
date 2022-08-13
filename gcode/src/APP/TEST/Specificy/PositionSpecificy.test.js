import PositionSpecificy from "./../../../API/GcodeApi/Gcommands/other/Specificy/PositionSpecificy.js";

export default function PositionSpecificyTest() {
  console.warn("🧪 TEST STARTED: POSITION_SPECIFICY 🏃‍♂️");

  let obj = { left: 12, bottom: 15, right: 17, top: 23 };

  // -1
  console.log(new PositionSpecificy(obj));

  // 0
  console.log(new PositionSpecificy(obj).obj);

  // 1
  console.log(new PositionSpecificy(obj).objKeysArrayReversed);

  // 2
  console.log(new PositionSpecificy(obj).getChoosedDirection());

  // 3
  console.log(new PositionSpecificy(obj).XpossibleDirection);

  // 4
  console.log(new PositionSpecificy(obj).YpossibleDirection);

  console.warn("🧪 TEST FINISHED: POSITION_SPECIFICY 🚩");
}
