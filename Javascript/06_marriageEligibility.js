console.log(`--------------Assignment 2-------------`);

function marriageEligibility(gender,age) {
    if (gender=='male' && age>=21) {
        console.log(`${gender} are Eligible for Marriage Greater than equal to 21 according to the Indian Constituion`);
    } else {
        if (gender=='female' && age>=18)  {
            console.log(`${gender} are Eligible for Marriage Greater than equal to 18 according to the Indian Constituion....`);
        } else {
            console.log(`please enter a valid input`);
        }
    }

    // var result=((gender=='male'||gender=='female' && gender!='other')&& (age>=21||age>=18))? "your eligible for marriage":"not eligible";
    // console.log(result)
}
marriageEligibility("",0);
marriageEligibility("male",27);
marriageEligibility("Other",41);
marriageEligibility("male",25);
marriageEligibility("female",16);
marriageEligibility("female",28);
marriageEligibility("Other",35);
