let bankSbi ={
    bankName:"SBI BANK",
    location:"Pune",
    managerName:"M Choudry",
    phoneNumber: 76255252552,
}

let bankLocation = {
    street:"1st",
    city:" kharad Pune",
    Pincode: 614232,
}

let unionBank = Object.assign( {},bankSbi, bankLocation);
console.log(`The Union bank Details : ${unionBank.bankName} , ${unionBank.location}, ${unionBank.managerName},${unionBank.phoneNumber}, ${unionBank.street}, ${unionBank.city}, ${unionBank.Pincode}`);

console.log(`-----------------------------------`);
let myBank = {...bankSbi, ...bankLocation}
console.log(`The My bank Details : ${myBank.bankName} , ${myBank.location}, ${myBank.managerName},${myBank.phoneNumber}, ${myBank.street}, ${myBank.city}, ${myBank.Pincode}`);

console.log(`--------------------------------------`);
let rateOfInterest={
    homeLoanInterest:"8%",
    personalLoanInterest:"10%",
    dueInterest:"6%",
}

let sbiDetails={...bankSbi, ...bankLocation, ...rateOfInterest};
console.log(`The Sbibank Details  are: ${sbiDetails.bankName} , ${sbiDetails.location}, ${sbiDetails.managerName},${sbiDetails.phoneNumber}, ${sbiDetails.street}, ${sbiDetails.city}, ${sbiDetails.Pincode}, ${sbiDetails.homeLoanInterest},${sbiDetails.personalLoanInterest},${sbiDetails.dueInterest}`);

console.log(`--------------------------------------`);

for (const key in sbiDetails) {
   console.log(`key is ${key} : value is ${sbiDetails[key]}`);
}