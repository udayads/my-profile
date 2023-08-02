const arrayNumbers = [20,32,40,25,23,11,29,9,60,2,11];
console.log(`------------Q1-----------`);
console.log(`Total Elememts in Array is `,arrayNumbers.length);
console.log(`------------Q2-----------`);
console.log(`First element of array is`, arrayNumbers[0],`last element of array is`, arrayNumbers[arrayNumbers.length-1]);
console.log(`------------Q3-----------`);
console.log(`Third last element in the array is `, arrayNumbers[arrayNumbers.length-3]);

console.log(`------------Q4-----------`);
let empt=[]
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%2==0) {
        empt=empt+arrayNumbers[index]
    }
    
}
console.log(empt);
console.log(`------------Q5-----------`);
let empty=[]
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%2!=0) {
        empty=empty+arrayNumbers[index]
    }
    
}
console.log(empty);

console.log(`------------Q6-----------`);
let sum=0;
for (let index = 0; index < arrayNumbers.length; index=index+2) {
    sum=sum+arrayNumbers[index];
    console.log(`The even positioned elements are `,arrayNumbers[index]);
}
console.log(`The total sum of even positned elements in array is`, sum);
console.log(`------------Q7-----------`);
let sum1=0;
for (let index = 1; index < arrayNumbers.length; index=index+2) {
    sum1=sum1+arrayNumbers[index];
    console.log(`The even positioned elements are `,arrayNumbers[index]);
}
console.log(`The total sum of even positned elements in array is`, sum1);

console.log(`------------Q8-----------`);
let sumOfArray=0;
for (let index = 0; index < arrayNumbers.length; index++) {
   sumOfArray=sumOfArray+arrayNumbers[index] 
}
console.log(`The total of all elemnts in array is`, sumOfArray);

console.log(`------------Q9-----------`);
let fiveMultiple=[]
let count=0;
for (let index = 0; index < arrayNumbers.length; index++) {
   if (arrayNumbers[index]%5==0) {
        fiveMultiple=fiveMultiple+arrayNumbers[index];
    count=count+1;
   }
}
console.log(`The  elemnts are multiple by 5 in array are`, fiveMultiple , `total element divisible by 5 are`,count);


console.log(`------------Q10-----------`);
console.log(` The given number 115 is present `, arrayNumbers.includes(115));

console.log(`------------Q11-----------`);
console.log(` The given number 23 is present `, arrayNumbers.includes(23));

console.log(`------------Q12-----------`);
 arrayNumbers.splice(3, 0, 55, 66);
 let result= arrayNumbers;
 console.log(result);

 console.log(`------------Q12-----------`);
  let resmovedElement=result.splice(4, 3)
 console.log(resmovedElement);
