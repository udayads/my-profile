function vowelCount(str) {
    let count=0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' ||
            char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
            console.log(char);
            count=count+1;
        }
    
    }
    console.log(`The number of vowels in the given string is :${count}`);
}
vowelCount(' I am very good UI Developer')





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