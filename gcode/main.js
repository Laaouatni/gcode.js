import GcodeAPI from './src/API/GcodeApi/GcodeAPI_main/GcodeAPI';
import G0 from './src/API/GcodeApi/Gcommands/G/G0';

// new G0({ x: 50 })
// new G0({ x: 50 })

let a = new G0({ x: 70, y: 10 })
  
a.moveTo({ left: 100 });

a.moveTo({ left: 80, top: 100 });

a.moveTo({ left: 150, top: 100 });

console.log(GcodeAPI.array);