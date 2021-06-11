let fs = require("fs");
console.log("start");
let f1data=fs.readFileSync("./f1.txt","utf8");
console.log(f1data);
console.log("end");
