console.log(`----------------------------part 1--------------------------`);

let personalDetails={
    fullName:"Udaya D S",
    address:"Bangalore",
    education:"BE(mechanical Engg)",
    phoneNumber: 8310213787,
    emailID:"dsudaya@gmail.com",
    jobRole:"Angular Developer",
}
console.log(personalDetails);

console.log(`----------------------------part 2--------------------------`);

let colleageDetails={
    collegeName:"SSIT Tumkur",
    address:"Tumkur",
    principleName:"Mahesh kumar",
    rankingInState:"38TH",
}
console.log(colleageDetails);

console.log(`----------------------------part 3--------------------------`);
let result={...personalDetails, ...colleageDetails};
console.log(`My full deatils is: ${result.fullName}, ${result.address},${result.education},${result.phoneNumber},${result.emailID},${result.jobRole},
            College details is:${result.collegeName},${result.address},${result.principleName},${result.rankingInState}`);

console.log(`----------------------------part 4--------------------------`);

let frndNames=["Ravi Kumar","Maheh kumar", "Mohith", "Sarvesh Holla","Nizamuddin","Sandeep"];
Object.freeze(frndNames);

for (const name of frndNames) {
    console.log(` friends names are:${name}`);
}

console.log(`----------------------------part 5--------------------------`);

function reverseString(str){
    var reverseWord="";
    for (let index =str.length-1; index >=0; index--) {
        reverseWord= reverseWord + str[index];
        if (str[index]==" ") {
            break
        }
    }
    console.log(reverseWord);
    // let result=str.split('').reverse().join('');
    // console.log(result);
}
reverseString("Codemind Technology");