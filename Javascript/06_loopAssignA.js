// function vowelCount(str){
//     let count=0;
//     for (let index = 0; index < str.length; index++) {
//         let character= str.charAt(index);
//         if(character=='a' || character=='e' ||character=='i' || character=='o' || character=='u' ||
//             character=='A' || character=='E' ||character=='I' || character=='O' || character=='U' ){
//             console.log(character);
//         count=count+1;
//         }
//     }
//     console.log(`The given string ${str} has ${count} vowels .....`);
// }
// vowelCount("I am very good IT Developer");


function vowelCount(str){
    let count=0;
    let i=0;
    while (i<str.length) {
        let character= str.charAt(i);
        if(character=='a' || character=='e' ||character=='i' || character=='o' || character=='u' ||
            character=='A' || character=='E' ||character=='I' || character=='O' || character=='U' ){
            console.log(character);
            count=count+1;
            }
        i=i+1;
    }
    console.log(`The given string ${str} has ${count} vowels .....`);
}
vowelCount("I am very good IT Developer");


console.log(`==================================================`);

    let cubeOFNumber=0;

    for (let index = 1; index <=5; index++) {
       
        cubeOFNumber=cubeOFNumber+(index*index*index);
    }
    console.log(`The total cube sum of first five Number is ${cubeOFNumber}`);


console.log(`==================================================`);

function oddPositionedChars(str) {
    for (let index = 0; index < str.length; index++) {
        const char= str.charAt(index);
        if (index%2!=0 && char !='') {
            console.log(char);
        }
        
    }
}
oddPositionedChars('Hard work always pays back');
oddPositionedChars('Soon I will be Angular IT Champ');

console.log(`========================================`);
function reverseString(str1) {
    // let resvere="";
    // for (let index = str1.length-1; index >=0; index--) {
    //     let char=str1.charAt(index);
    //     resvere=resvere+char;
    // }
    // console.log(`The reversed string is : "${resvere}"`);
    let result = str1.split('');
    let reverse=result.reverse();
    let res=reverse.join('');
    console.log(res);
}
reverseString("Hard work always pays back")
reverseString("Soon I will be Angular IT Champ")