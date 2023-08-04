let professor={
    name:"Ravikumar",
    age:45,
    gender:"Male",
    phNUmber: 9455445542,
    address:'Solapur',
    subject:'Political Science',
    degree : {
        engineering : 'CSC',
        MTech : "Adavance learning Of AI tool",
        PHD : "Advance Computing",
        teacherDegrees: function () {
            console.log(`Teacher Degrees are : ${this.engineering} , ${this.MTech} , ${this.PHD}`);
        }
    },
    certificates : ['Hacker Rank Participation', 'Certificate in IFE course', 'Certificate in Advance Programing'],
}

console.log(professor);
console.log(professor.degree.teacherDegrees());
professor.totalExperience ="14 years";
console.log(professor);
console.table(professor);
professor.name="Nizamuddin mujawar";
professor.age= 30;
console.table(professor);

professor.certificates.push("Oracle Certidied");
console.log(professor.certificates);
let arrayLength= professor.certificates.length;
let lastNUmberOfArrayIs= professor.certificates[arrayLength-1];
// let lastNUmberOfArrayIs= professor.certificates.pop();
console.log(lastNUmberOfArrayIs);