// console.log(4%2);
// console.log(98%2);
// console.log(144%2);
// console.log(1286%2);



// console.log(733%2);
// console.log(755%2);
// console.log(777%2);
// console.log(7779%2);
// console.log(7123%2);


function isEven(number){
    const remainder = number % 2;
    // return remainder;

    if(remainder === 0){

        console.log('thes number is event   number is', number)
    }
    else{
        console.log("This number is odd", number)
    }
}

var checkEventNumber = 133;

var evenNumberResult = isEven(checkEventNumber);

console.log(evenNumberResult);




