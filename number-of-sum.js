
function sumOfNumber(number){
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum = sum + i;
    }
    return sum;
}

const number = 2;
const result = sumOfNumber(number);
console.log(result);