

let personDetails= `{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
    "address": {
        "street":"32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`
console.log(`---------------------------------------------------------------------------------`);
let personObject= JSON.parse(personDetails);
console.log(`Type of personDetails is : ${typeof personDetails}`);
console.log(`Type of personObject is : ${typeof personObject}`);
console.log(`---------------------------------------------------------------------------------`);
let personRole=personObject.role;
console.log(personRole);
for (const result of personRole) {
    if (result==='Dev') {
        console.log(`The expected personRole from array is : ${result}`);
    }
}
console.log(`---------------------------------------------------------------------------------`);
let lastName=personObject.name;
let lastNameOfPerson=lastName.substring(5,11);
console.log(`Person last name is :${lastNameOfPerson}`);
var splitName=[];
var splitName= lastName.split(' ');
console.log("student lastName=" +splitName[1]);

console.log(`---------------------------------------------------------------------------------`);
let dateOfJoin= personObject.doj;
let datemain= new Date(dateOfJoin);
const fullYear= datemain.getFullYear();
console.log(`The Year is :${fullYear}`);