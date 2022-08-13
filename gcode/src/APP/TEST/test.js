import GcodeApiTest from "./GcodeAPI_main/GcodeAPI.test.js";
import G0test from "./Gcommands/G/G0.test.js";
import G1test from "./Gcommands/G/G1.test.js";
import PositionSpecificyTest from "./Specificy/PositionSpecificy.test.js";
import MoveToTEST from "./Gcommands/MoveTo/MoveTo.test.js";
import DirectionValuesTEST from "./DirectionValues/DirectionValues.test.js";
import G0LoopTEST from './GloopTest/G0/G0loop.test.js';
import G1LoopTEST from "./GloopTest/G1/G1loop.test.js";
import GcommandsTEST from "../TEST/Gcommands/Gcommands.test.js";

export default function consoleTEST() {
  // GcodeAPI
  GcodeApiTest();

  // G0
  G0test();
  
  // G1
  G1test();
  
  // Position Specificy
  PositionSpecificyTest();
  
  // MoveTo
  MoveToTEST();
  
  // left, right, top, bottom, zIndex
  DirectionValuesTEST();
  
  // for loop G0
  G0LoopTEST();
  
  // for loop G1
  G1LoopTEST();

  // Gcommands
  GcommandsTEST();
}