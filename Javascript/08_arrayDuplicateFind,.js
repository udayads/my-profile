let array=[4,5,4,5,8,5,7,8,9,7,8];
let res=[];

for (let i = 0; i< array.length; i++) {
    var foundItem= false;
    for ( j= 0; j< res.length; j++) {
        if (array[i]==res[j]) {
            foundItem=true;
            break;
        }
        
    }
    if (!foundItem) {
        res[res.length]=array[i];
    }
}
console.log(array);
console.log(`Array after removing duplicate numbers`);
console.log(res);