const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`-----------------que 1-----------------------`);
const arrayNum = arrayNumbers.map(element =>{
    return element+10;
})
console.log(`After adding value 10 to each element of array:${arrayNum}`);

console.log(`-----------------que 2-----------------------`);
const cubeOfNumbers = arrayNumbers.map(element =>{
    return element*element*element;
})
console.log(`The cube of array elements is : ${cubeOfNumbers}`);

console.log(`-----------------que 2-----------------------`);
const addIndexToNum = arrayNumbers.map((element,index) =>{
    return element+index;
})
console.log(`After adding index to their element is : ${addIndexToNum}`);