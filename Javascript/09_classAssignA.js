
  console.log(`--------------------part 1-------------------------`);

class Vehicle{
    constructor(vehicleName,ownerName,color,price,engineType,seatingCapacity,saftyBags){
        this.vehicleName = vehicleName;
        this.ownerName = ownerName;
        this.color = color;
        this.price =price;
        this.engineType = engineType;
        this.seatingCapacity = seatingCapacity;
        this.saftyBags = saftyBags;
    }
}
let toyotaFortuner= new Vehicle("Fortuner", "Mahesh k", "Red with black", "35 lakhs", "Pertrol", "5 seats", 4);

let toyotaInnova= new Vehicle("Innova", "SHEKHAR SHINDE", "white", "22 lakhs", "Pertrol", "8 seats", 5);

let toyotaEtiosLiva= new Vehicle("EtiosLiva", "MUkESH M", "Black with white patches", "19 lakhs", "Diesel", "6 seats", 2);

let suzukiGlanza= new Vehicle("Glanza", "Sarvesh H", "white", "15 lakhs", "Petrol", "5 seats", 2);

let suzukiSwift= new Vehicle("Swift", "Mohith ", "Brown", "9.5 lakhs", "Diesel", "5 seats", 4);

let arrayOfVehicles = [toyotaFortuner,toyotaInnova,toyotaEtiosLiva,suzukiGlanza,suzukiSwift];

for (const Vehicle of arrayOfVehicles) {
    console.log(`The vehicle ${Vehicle.vehicleName} with ${Vehicle.seatingCapacity} ,
     ${Vehicle.engineType} type with ${Vehicle.saftyBags} safty bags worth of ${Vehicle.price} is Purchased by ${Vehicle.ownerName}...... `);
}



console.log(`--------------------part 2-------------------------`);
class College{
  constructor(collegeName,establishYear,address,phoneNumber,pricipalName,stateRanking){
    this.collegeName = collegeName;
    this.establishYear = establishYear;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.pricipalName = pricipalName;
    this.stateRanking = stateRanking;
  }
  display(){
    console.log(`The college ${this.collegeName} is established in the year ${this.establishYear},
    in ${this.address}. The College principal name is ${this.pricipalName} and phone number is ${this.phoneNumber}.
    Currently this college in ${this.stateRanking} ranking in State....`);
  }
}

const RRIT= new College("RRIT", 1997, "Bangalore", 8967627267, "Rudresh Doddmani","100th");

const SIT = new College("SIT", 1984, "Tumkur", 087673698698, "Murali Matt", "8th");

const dayanandhSagar = new College("Dayanandh Sagar", 1991, "Kengeri Bangalore", 994097069,"D sagar dayanandh", "4th");

const iitBanglore= new College("IIT BANGALORE", 1968, "Bnaglore",89832883893,"Lakshmish", "1st");

const msRamayya = new College("MS-RAMAYYA", 1974, "Yelankha, Bangalore", 7295359259, "M S jytohi", "5Th");

let Result =[RRIT,SIT,dayanandhSagar,iitBanglore,msRamayya];

for (const collegeaResult of Result) {
    collegeaResult.display();
}

console.log(`-------------------------------part 3---------------------------`);
function traverseObject(str){
  for (const key in str) {
    console.log(`${key} : ${str[key]}`);
  }
}
traverseObject(RRIT);
console.log(`=============================`);
traverseObject(SIT);
console.log(`=============================`);
traverseObject(dayanandhSagar);
console.log(`=============================`);
traverseObject(iitBanglore);
console.log(`=============================`);
traverseObject(msRamayya);



