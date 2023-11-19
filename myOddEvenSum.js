function sumOfArray(numbers){
let sum = 0;

for(let i = 0; i < numbers.length; i++ ){

    const index = i;
    const element = numbers[index];

    sum = element + sum;

}



    return sum;
}

function oddArray(numbers){
    const oddNumbers = [];

    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            oddNumbers.push(element);
        }

    }


    return oddNumbers;

}


const myArray = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

const result1 = oddArray(myArray);
console.log(result1);

const result2 = sumOfArray(result1);
console.log("Avobe Array Total:",result2);