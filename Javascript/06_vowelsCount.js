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