function factorialRevers(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
        console.log(i, result);
    }
    return result;
}

const number = 100;
const result = factorialRevers(number);
console.log(result);