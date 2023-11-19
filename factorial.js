function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const givNumber = 20;
const factorialResult = factorial(givNumber);
console.log(factorialResult);
