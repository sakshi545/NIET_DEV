let fs = require("fs");
let input = process.argv.slice(2);

let files = [];
let flags = [];

for (let i = 0; i < input.length; i++) {
  if (input[i].startsWith("-")) {
    flags.push(input[i]);
  } else {
    files.push(input[i]);
  }
}

// console.log(files);
// console.log(flags);

 let data = "";
 for(let i=0 ; i<files.length ; i++){
     let fileKaData = fs.readFileSync(files[i]);
     data += i == files.length-1 ? fileKaData :  fileKaData+"\r\n";
}

// console.log(data);
// -s flag
function applySFlag(){
    let dataComp = data.split("\r\n");
    // console.log(dataComp);


    // console.log(dataComp);
    let sFlagedData = [];
    let nonEmptyFound = false;

    for(let i=0 ; i<dataComp.length ; i++){
        if(dataComp[i] != '' ){
            sFlagedData.push(dataComp[i]);
            nonEmptyFound = true;
        }
        else if(dataComp[i] == '' && dataComp[i-1] != '' && nonEmptyFound){
            sFlagedData.push(dataComp[i]);
        }
    }
    let sFlagedString = sFlagedData.join("\r\n");
    return sFlagedString;
}

applySFlag(); 
data = applySFlag();

console.log(data); 