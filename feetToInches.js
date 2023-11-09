// Inches To Feet Converter



const myInches = 84;
const myFeet = myInches / 12;
console.log(myFeet);


// Feet to Inches Converter


const myFeet2 = 7;

const myInches2 = myFeet2 * 12;
console.log(myInches2);


// converter inches to feet function 

function incheToFeet(inches){
    const result = inches / 12;
    return result;
}



var myInches3 = 84;

var myFeet3 = incheToFeet(myInches3);

console.log(myFeet3);



// convater Feet to Inche function 

function feetToInche(feet){
    const inches4 = feet * 12;
    return inches4;
}

const myFeet4 = 7;
const myInches4 = feetToInche(myFeet4);
console.log(myInches4);