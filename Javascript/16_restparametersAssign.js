function add(num1, num2, ...num ){
    let totalSum=0;
    for (const key in num) {
        totalSum=totalSum+num[key];
    }
    let sum=num1+num2+totalSum;
    console.log(`The given input numbers are : ${num1},${num2},${num} => and total sum of the numbers is : ${sum}`);
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);