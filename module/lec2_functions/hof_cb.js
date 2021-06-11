function getFirstName(fullName){
    // "Steve Rogers"
    // split function
    fullName = fullName.split(" ");
    // [ "Steve" , "Rogers" ];
    return fullName[0];
}

function getLastName(fullName){
    fullName = fullName.split(" ");
    return fullName[1];
}


function callMe( fullName , fun ){
    let name = fun(fullName);
    console.log(name);
}


callMe("Steve Rogers" , getFirstName);
callMe("TOny Stark" , getLastName);