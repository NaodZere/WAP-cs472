
//this is ananimos function  
let callbacks = []
for(let i = 0; i <= 2; i++){
    callbacks[i] = function(){
        console.log( i * 2);
    }
}
callbacks[2]();
// console.log(callbacks[2]());


//const can not be re assinged but a variable inside a cons can be reassign 
// const point = {
//     x = 1
//     y = 2
// // }
// point.y = 10;
// console.log(point.y);

//fallsy and truthy 
let a = 10;
let b = '';
let c = null;
let d = undefined;
let e = NaN;
let f = 0;

console.log(Boolean(a)); // true
console.log(Boolean(b)); // false
console.log(Boolean(c)); // false
console.log(Boolean(d)); // false
console.log(Boolean(e)); // false
console.log(Boolean(f)); // false


//var is "hoisted"
console.log(y);
var y = 2;
// console.log(x);
console.log(y);