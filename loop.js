for(let i = 0; i <= 100; i++){
    console.log(i);
}


function arrayOddNumbers(numbers){
    const newArray = [];
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(element, sum);

    //     if(element % 2 === 0){
    //         console.log(element);
    //     }
    // }
        const newArray = [];
    if(element % 2 !== 0){
        console.log(element);

        newArray.push(element);

        console.log(newArray);
    }


}

}

const array = [12, 44, 56, 77, 21, 54, 89, 90, 87];

arrayOddNumbers(array);