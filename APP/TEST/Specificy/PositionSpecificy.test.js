import PositionSpecificy from "./../../../API/Gcommands/other/Specificy/PositionSpecificy.js";

export default function PositionSpecificyTest() {
  console.warn("🧪 TEST STARTED: POSITION_SPECIFICY 🏃‍♂️");
  // -1
  console.log(
    new PositionSpecificy({ left: 12, bottom: 15, right: 17, top: 23 }),
  );

  // 0
  console.log(
    new PositionSpecificy({
      left: 12,
      bottom: 15,
      right: 17,
      top: 23,
    }).obj,
  );

  // 0
  console.log(
    new PositionSpecificy({
      left: 12,
      bottom: 15,
      right: 17,
      top: 23,
    }).objKeysArrayReversed,
  );

  // 1
  console.log(
    new PositionSpecificy({
      left: 12,
      bottom: 15,
      right: 17,
      top: 23,
    }).getChoosedDirection(),
  );

  // 2
  console.log(
    new PositionSpecificy({
      left: 12,
      bottom: 15,
      right: 17,
      top: 23,
    }).XpossibleDirection,
  );

  // 3
  console.log(
    new PositionSpecificy({
      left: 12,
      bottom: 15,
      right: 17,
      top: 23,
    }).YpossibleDirection,
  );

  console.warn("🧪 TEST FINISHED: POSITION_SPECIFICY 🚩");
}
