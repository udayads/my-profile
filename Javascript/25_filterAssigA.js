

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`------------------------- ques 1-----------------------------------`);
const greaterNum = arrayNumbers.filter(num =>{
    return num>50;
})
console.log(`In the given array elements greater than 50 is : ${greaterNum}`);
console.log(`------------------------- ques 2-----------------------------------`);
const evenNum = arrayNumbers.filter(num =>{
    return num%2==0;
})
console.log(`Even numbers present in the given array : ${evenNum}`);
console.log(`------------------------- ques 3-----------------------------------`);
const oddNum = arrayNumbers.filter(num =>{
    return num%2!=0;
})
console.log(`Odd numbers present in the given array : ${oddNum}`);
console.log(`------------------------- ques 4-----------------------------------`);
const multipleOfFiveNum = arrayNumbers.filter(num =>{
    return num%5==0;
})
console.log(`Multiple of Five present in the given array : ${multipleOfFiveNum}`);
console.log(`------------------------- ques 5-----------------------------------`);
const rangeOfNum = arrayNumbers.filter(num =>{
    return num>20 && num<50;
})
console.log(`The element present between range of 20 and 50 in the given array : ${rangeOfNum}`);