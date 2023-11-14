function arrayOfSum(numbers){

    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum =  element + sum;
    }
    return sum;
}

function oddArray(givArray){

    const oddNumbers = [];

    for(let i = 0; i < givArray.length; i++){
        const index = i;
        const element = givArray[index];

        if(element % 2 === 0){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myArray = [12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

const result1 = oddArray(myArray);

console.log(result1);

const result2 = arrayOfSum(result1);

console.log(result2);
