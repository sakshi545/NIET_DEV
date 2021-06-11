let fs = require("fs");
let files=["./f1.txt","./f2.txt","./f3.txt"];
let n=files.length;
function asynserial(files,i){
    if(i>=files.length){
        return ;
    }
    fs.readFile(files[i],function(error ,data){
        console.log(data+"");
        asynserial(files,i+1);
    });
    

}
asynserial(files,0);