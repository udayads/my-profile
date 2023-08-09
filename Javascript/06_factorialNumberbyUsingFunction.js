
function factNumber(num){
    var result=1;
    for (let i=num; i>0; i--) {
        var total= result=result * i;
    }
    console.log(`The factorial of the ${num} is ${total}`);
}
factNumber(5);
factNumber(9);
factNumber(11);
factNumber(7);
 