const arrayFruits=["Banana", "Orange","Apple","Mango","Water Melon"];
console.log(`-------------------Q1------------------`);
console.log(arrayFruits[0],',',arrayFruits[arrayFruits.length-1]);
console.log(`-------------------Q2------------------`);
arrayFruits.unshift('Papaya');
console.log(arrayFruits);
console.log(`-------------------Q3------------------`);
let fruits=arrayFruits;
    fruits.splice(4, 1);
console.log(fruits);
console.log(`-------------------Q4------------------`);
let fruit=arrayFruits;
    fruit.push('Pineapple')
console.log(fruit);
console.log(`-------------------Q5------------------`);
let fruitAdd=fruit;
    fruitAdd.splice(5, 0, "Dragon Fruit")
console.log(fruitAdd);
console.log(`-------------------Q6------------------`);
let fruitReplace=fruit;
    fruitReplace.splice(2, 1, "KIWI")
console.log(fruitReplace);
console.log(`-------------------Q7------------------`);
let fruitdisplay=fruitReplace;
    let res=(fruitdisplay.splice(1, 4));
console.log(res);
console.log(`-------------------Q7------------------`);
let fruitLast=fruitReplace;
    let result=(fruitLast.slice(fruitLast.length-3));
console.log(result);

