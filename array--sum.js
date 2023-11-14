function sumOfArray(numbers){
let sum = 0;

    for(let i = 0; i < numbers.length; i++ ){
        
        const index = i;
        const element = numbers[index];
        sum = element + sum;

        if(sum => 0){
            // console.log(sum)



        }
        // console.log(element, sum)
    }
}







// const myArray = [12, 13, 144, 66, 57, 34, 98, 77, 500, 100];

// sumOfArray(myArray);




function oddNumbers(numbers){

    var oddNumbersArray = [];

    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const elementOdd = numbers[index];
        // console.log(elementOdd);

        if(elementOdd % 2 !== 0){

            console.log(elementOdd);
            oddNumbersArray.push(elementOdd);
        }
    }
}

const arrayOdd = [12, 13, 144, 66, 57, 34, 98, 77, 500, 100];

oddNumbers(arrayOdd);

console.log(oddNumbersArray);


function evenNumbers(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const elementOdd = numbers[index];
        // console.log(elementOdd);

        if(elementOdd % 2 === 0){

            console.log(elementOdd);
        }
    }
}

const arrayEven = [12, 13, 144, 66, 57, 34, 98, 77, 500, 100];

evenNumbers(arrayOdd);