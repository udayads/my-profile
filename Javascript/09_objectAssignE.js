let sbiBank={
    bankName:"SBI bank",
    location:"Pune",
    accountNo: 4966685878559,
    ifscCode:"SBIH002456",
    interstRate: 6.8,
    showDeatils:function(){
        console.log(`The full Detail of SBI bank is : ${this.bankName}, ${this.location}, ${ this.accountNo}, ${this.ifscCode}, ${this.interstRate}`);
    }
}
let axisBank={
    bankName:"Axis bank",
    location:"Nasik",
    accountNo:806550623565,
    ifscCode:"AXISO578858",
    interstRate: 6.0,
    showDeatils:function(){
        console.log(`The full Detail of AXIS bank is : ${this.bankName}, ${this.location}, ${ this.accountNo}, ${this.ifscCode}, ${this.interstRate}`);
    }
}

let hdfcBank={
    bankName:"HDFC bank",
    location:"Pandrapur",
    accountNo:9327474686445,
    ifscCode:"HDFCD083419846",
    interstRate: 9.5,
    showDeatils:function(){
        console.log(`The full Detail of HDFC bank is : ${this.bankName}, ${this.location}, ${ this.accountNo}, ${this.ifscCode}, ${this.interstRate}`);
    }
}

let yesBank={
    bankName:"YES bank",
    location:"DAUND",
    accountNo:99766386757447,
    ifscCode:"YESX0889370639",
    interstRate: 8.03,
    showDeatils:function(){
        console.log(`The full Detail of YES bank is : ${this.bankName}, ${this.location}, ${ this.accountNo}, ${this.ifscCode}, ${this.interstRate}`);
    }
}

sbiBank.showDeatils();
console.log(`======================================`);
axisBank.showDeatils();
console.log(`======================================`);
hdfcBank.showDeatils();
console.log(`======================================`);
yesBank.showDeatils();