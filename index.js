const app = require('./app')
console.log("welcome to node js");

var x='20';

const arr=[1,2,3,4,5,6];

if(x===20) {

    console.log("matched");
}
else{
    console.log("not matched");
}

const z=30;

console.log(z);
console.log("App Module : "+app.x+","+app.y);
console.log(app.z());
console.log(arr);

let result = arr.filter((item)=>{
    return item>3

})
console.warn(result);


