import PositionSpecificy from "./../../../API/Gcommands/other/Specificy/PositionSpecificy.js";

export default function PositionSpecificyTest() {
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
    }).getChoosedDirection(),
  );

  // 1
  console.log(
    new PositionSpecificy({
      left: 12,
      bottom: 15,
      right: 17,
      top: 23,
    }).XpossibleDirection,
  );

  // 2
  console.log(
    new PositionSpecificy({
      left: 12,
      bottom: 15,
      right: 17,
      top: 23,
    }).YpossibleDirection
  )
}
