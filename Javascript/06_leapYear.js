console.log(`------------------Assignment 3-----------`);

var leapYear=function(year){
        // var year=year;
        // var result=(year%4==0||year%400==0&&year%100!==0)?"The given number is leap year":"it is not a leap year";
        // console.log(`${result}`);
    if (typeof(year)==String) {
        console.log(`please enter a valid input`);
    }
    
    if ((year%4==0)&&(year%100!=0)|| (year%400==0) ) {
        console.log(`The given number ${year} is Leap year....`);
    } else {
        console.log(`The given number ${year} is not a Leap year....`);
    }

}
leapYear(2020)
leapYear(1999)
leapYear(1600)
leapYear(2022)
leapYear(null)
leapYear("twenty twenty")
leapYear(undefined)
leapYear(NaN)
leapYear(1750)