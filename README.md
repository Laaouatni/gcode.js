# gcode.js

basically a gcode library for making the making gcode program easily and efficiently for CNC machines.

```javascript
// example
let g = new G0({});

for(let i=0; i < 10; i++) {
   g.moveTo({left: 100})
}
```
