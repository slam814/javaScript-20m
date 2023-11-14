function arraysum(numbers){

    let sum = 0;

for(let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    
}
return sum;
}









function oddNumbersArray(numbers){
        const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];

        if(element % 2 === 0){
            // console.log(element);
            oddNumbers.push(element);
        }

    }

    return oddNumbers;


}


const myArray = [13, 15, 89, 77, 88, 66, 90, 12];
const result = oddNumbersArray(myArray);
console.log(result);


const resultsum = arraysum(result);

console.log("sum the all numbers", resultsum);

