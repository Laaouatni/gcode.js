# gcode.js

basically a gcode library for making the creation of gcode programs easily and efficiently for CNC machines.

```javascript
// example
const G0 = new G0({x:0, y:0});

for(let i=0; i < 10; i++) {
   G0.moveTo({ 
      left: Math.random() * 100,
      top: Math.random() * 100 
   });
}
```

> demo: https://gcode-js.vercel.app

![image](https://user-images.githubusercontent.com/87947051/185802527-f03e7aba-45ed-4eb0-a6cd-f2f31048912f.png)

> ⚠️ the project is not completed, don't use it (at least for now, in the future maybe yes) but you can suggest some ideas
