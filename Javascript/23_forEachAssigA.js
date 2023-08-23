const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`------------------------------ Q1 ----------------------------`);
 arrayNumbers.forEach((num,i) =>{
    console.log(`Array element index is :${i} & element is : ${num}`);
 })

 console.log(`------------------------------ Q2 ----------------------------`);
 arrayNumbers.forEach((num,i) =>{
    if (num>=0) {
        console.log(`Positive numbers are => ${num}`)
    }
 })
 console.log(`------------------------------ Q3 ----------------------------`);
 let newArray=[]
 arrayNumbers.forEach((num,i) =>{
   if(num<0){
    newArray += num;
    }
 })
 console.log(`The negative numbers are => ${[newArray]}`);
 
 console.log(`------------------------------ Q4 ----------------------------`);
 arrayNumbers.forEach((num,i) =>{
   if(num%2==0){
        console.log(`Even numbers are => ${num}`)
    }
 })

 console.log(`------------------------------ Q5 ----------------------------`);
 let sum=0;
 arrayNumbers.forEach(num =>{
  sum = sum + num;
 })
 console.log(`The total sum of array is = ${sum}`)

 console.log(`------------------------------ Q6 ----------------------------`);
 arrayNumbers.forEach((num,i) =>{
    if (i%2==0) {
        console.log(`value is  =>${num} & index  =>${i}`);
    }
 })

