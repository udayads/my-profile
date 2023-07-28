console.log("-----------part1----------");

 var square=function (num){
    var result=num*num;
    console.log(`The Square of ${num} is : ${result}`);
}
square(5)
square(6)
square(25)
square(100)
square(67.89)
square(59)

console.log("-----------part2----------");
console.log(`The type of given function is:${typeof square}`);

console.log("-----------part3----------");
var area=function (length,breadth) {
    var totalarea=length*breadth;
    console.log(`The area of rectangle is :${totalarea}`)
}
area(499,917)

console.log("-----------part4----------");
var swap=function(str1,str2){
    console.log(`Before swap the values are: ${str1} and ${str2}`);
    [str1,str2]=[str2,str1] 
    console.log(`after swap the values are : ${str1} and ${str2}`);
}
swap("mahi","raina")
var swap=function(num1,num2){
    console.log(`Before swap the values are: ${num1} and ${num2}`);
    [num1,num2]=[num2,num1] 
    console.log(`after swap the values are : ${num1} and ${num2}`);
}
swap(55,77)

console.log("-----------part5----------");

var word= function (str3){
    var make=str3.length;
    console.log(`Total number of characters in given string is :${make}`);
    var good=(str3.charAt(6));
    console.log(`the character at index 6 is :${good}`);
    var bad=(str3.charAt(11));
    console.log(`the character at index 11 is :${bad}`);
    var me=(str3.charAt(str3.length-1));
    console.log(`the last character of the string is :${me}`);
    var me1=(str3.charAt(0));
    console.log(`the first character of the string is :${me1}`);
    var me2=(str3.charAt(str3.length-3));
    console.log(`the last 3rd character of the string is :${me2}`);
    var me4=str3.split('').length

    console.log(`the last 3rd character of the string is :${me4}`);
}
word("JS the most popular language of internet");