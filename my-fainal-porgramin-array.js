function sumArray(numbers){
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];

        sum = element + sum;
    }
    return sum;
}

function oddArray(numbers){
    const oddNumbers = [];
    const evenNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 0){
            oddNumbers.push(element);

        }
        else{
            evenNumbers.push(element);
        }
    }

    return oddNumbers;
}


const array = [12, 13, 15, 15, 16, 17, 18, 19, 20];
const result1 = oddArray(array);

console.log(result1);

const result2 = sumArray(result1);

console.log(result2);