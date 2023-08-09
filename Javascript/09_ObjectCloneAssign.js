const arrayNums =[20,3,4,56,90,400,49];
console.log(`-----------------------part 1-----------------------`);
console.log(arrayNums);
let arrayNumber= arrayNums;
console.log(`after shallow clone : ${arrayNumber}`);
arrayNumber.push(55,66);
console.log(`after add values to the cloned variable : ${arrayNumber}`);
console.log(arrayNums);

console.log(`-----------------------part 2-----------------------`);
 let deepclone=[...arrayNums]
 console.log(deepclone);
 arrayNums.push(10,25);
 console.log(`The original array is : ${arrayNums}`);
 console.log(`The cloned array is : ${deepclone}`);

 
console.log(`-----------------------part 3-----------------------`);
let arrayEven=[2,30,14,8]
let result = [...arrayNums, ...arrayEven];
console.log(` After Concating Both array Th result is : ${result}`);

console.log(`-----------------------part 4-----------------------`);

const employee_info={
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,000INR",
        aug_month:"50,000INR",
        jun_month:"65,000INR",
    },
    address: {
        locality: {
            colony: "Om Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country: "India",
        show:function(){
                console.log(`Address: ${this.locality.colony},${this.locality.street},${this.city}, ${this.state},${this.country}`);
        }
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32","+91- 9096 5678 77"]
}

employee_info.address.show();
console.log(`-----------------------part 5-----------------------`);
console.log(`The mobile number of emplyoee are : ${employee_info.mobiles}`);
console.log(`-----------------------part 6-----------------------`);

let clonedResult = JSON.parse(JSON.stringify(employee_info));
console.log(`cloned object july month salary is : ${clonedResult.salary.july_month}`);
 clonedResult.salary.july_month="80 K";
console.log(`Updated cloned object july month salary  is : ${clonedResult.salary.july_month}`);
console.log(`cloned object country name is : ${clonedResult.address.country}`);
clonedResult.address.country="United KingDom";
console.log(`updated cloned object country name is : ${clonedResult.address.country}`);
