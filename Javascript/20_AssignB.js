class Emploee {
    constructor (emp_id, emp_name,emp_dept, emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}

const emp_anil = new Emploee( 22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Emploee( 33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Emploee( 55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Emploee( 66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Emploee( 77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Emploee( 88, "Vinayk", "IT", 75000, "TCS");
const emp_mahi = new Emploee( 99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployess =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`--------------------------------------- part 1---------------------------------------------`);
for (const value of arrayEmployess) {
    if (value.emp_company=='TCS') {
        console.log(`The employee name is : ${value.emp_name} & company name is : ${value.emp_company}`);
    }
    
}
console.log(`--------------------------------------- part 2---------------------------------------------`);
for (const value of arrayEmployess) {
    if (value.emp_dept=="Finance") {
        console.log(`The employee department is : ${value.emp_dept} & Employee name is : ${value.emp_name}`);
    }
}
console.log(`--------------------------------------- part 3---------------------------------------------`);
for (const value of arrayEmployess) {
    if (value.emp_name.startsWith("R") ){
        console.log(`The employee id : ${value.emp_id} ,employee name is :${value.emp_name}, department is :${value.emp_dept}, employee salary is : ${value.emp_salary} & company name is : ${value.emp_company}`);
    }
}

console.log(`--------------------------------------- part 4---------------------------------------------`);
for (const value of arrayEmployess) {
    if (value.emp_salary>75000) {
        console.log(`The employee name is :${value.emp_name} & company name is : ${value.emp_company} & employee salary is : ${value.emp_salary}`);
    }
}

console.log(`--------------------------------------- part 5---------------------------------------------`);
for (const value of arrayEmployess) {
    if (value.emp_salary>=50000 && value.emp_dept=="IT") {
        console.log(`The employee id : ${value.emp_id} ,employee name is :${value.emp_name}, department is :${value.emp_dept}, employee salary is : ${value.emp_salary} & company name is : ${value.emp_company}`);
    }
}

console.log(`--------------------------------------- part 6--------------------------------------------`);
for (const value of arrayEmployess) {
    if (value.emp_company=='Infy') {
        console.log(`The employee id : ${value.emp_id} ,employee name is :${value.emp_name}, department is :${value.emp_dept}, employee salary is : ${value.emp_salary} & company name is : ${value.emp_company}`);
    }
}