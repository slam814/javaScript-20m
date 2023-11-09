for(var i = 1997; i <= 2023; i++){
    console.log(i);
}



function isMoneUp(time){
    if(time > 7){
        return true;
    }
    else{
        return false;
    }
}

var time = 5;

var timeNow = isMoneUp(time);

console.log(timeNow);