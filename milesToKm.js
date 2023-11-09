function milesToKilometer(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

var myMiles = 500;
var giveKilomiters = milesToKilometer(myMiles);

console.log(giveKilomiters);