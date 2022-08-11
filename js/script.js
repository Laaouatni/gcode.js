import G0 from "./API/G0.js"

test();

function test() {
  console.log(new G0({
    x: 1,
    y: 2
  }).getLine());

  console.log(new G0({
    x: 4,
    y: 5
  }).getLine());

  console.log(new G0({
    x: 3
  }).getLine());

  console.log(new G0({
    z: 18
  }).getLine());

  console.log(new G0({
    x: 8,
    y: 20,
    z: 30
  }).getLine());
}