console.log(`--------------------------part 1--------------------`);
let arrowFun = () =>{
    console.log(`The output is: "Good Morning, Today is Tuesday......"`);
}
arrowFun();

console.log(`--------------------------part 2--------------------`);
let multiplicationNum = (num1,num2,num3=1) => {
    return num1*num2*num3;
}
let multi = multiplicationNum(5,5,2)
console.log(`The multiplication of  given numbers is = ${multi}`);
let multi2=multiplicationNum(10,4)
console.log(`The multiplication of  given numbers is = ${multi2}`);

console.log(`--------------------------part 3--------------------`);
let addition = (n1,n2,n3,n4,n5) => {
    return n1+n2+n3+n4+n5;
}
let sum =addition(100,100,200,349,756);
console.log(`Addition of five number is : ${sum}`);
let sumOfChar = addition("I am", " learning", " ES6", " features", " in deapth");
console.log(`Concatination of given string is : ${sumOfChar}`);