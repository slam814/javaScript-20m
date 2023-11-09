function isLeapYear(year){
    // Leap year are divisible by 4
    // If a year is divisible by 100, it must also be divisible by 400 to be a leap year
    if ((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0) ){
        console.log('This Year is LeapYear');
    }
    else{
        console.log("This year is Not LeapYear");
    }
}

const inputYear = 2004;
const LeapYear =isLeapYear(inputYear);