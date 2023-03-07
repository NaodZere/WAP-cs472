
//object literal

const invoice = {
    invoice_number : 10,
    item: {
        itemNumber : 200,
        item : "ola",
    },
    printItem(){
        console.log(this.invoice_number)
    }
};
invoice.invoice_number = 10;
invoice.printItem();
//how to use class to define an object types 

class Invoice{
    constructor(){//we can add parameter in the bracket
        this.subtotal = null;
        this.taxrate = null;
    }
    getTotal(){
        const selelsTax = this.subtotal * this.taxrate;
        return this.subtotal + selelsTax;

    }

}

const invoice1 = new Invoice(234, 2342);
invoice1.subtotal = 100;
invoice1.taxrate = 0.0875;
let total = invoice1.getTotal();
console.log(total);


//functions can be assigned to variables
var myfunc = function(a, x){
    return a * x;
};

//function can be passed as parameters
function apply(a, b, f){
    return f(a, b);
}
var x = apply(2,3, myfunc);//6

//funcion can be return valuse



//functions have a built-in object called the arguments object it is always argument

function findMax(){
    var i;
    var max = -Infinity;
    for(i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

let yy = findMax(1,123, 500, 115, 44, 88);//500
var xx = findMax(5, 32, 24); //32
console.log(yy);
console.log(xx);


//Rest operator syntax
function sum(x,y, ...more){
    var total = x + y;
    if(more.length > 0){
        for(var i = 0; i < more.length; i++){
            total += more[i];
        }
    }
    console.log(total);
}

sum(4,4);//8
sum(4,4,4)//12


//private fileds 

class ClassWithPrivateField{
    #pirvateField;

    constructor(){
        this.#pirvateField = 42;
        // this.#undifinedprivateField = 22;//synatx error

    }
    getPrivateFiled(){
        return this.#pirvateField;
    }
}

const instance = new ClassWithPrivateField();
console.log(instance.getPrivateFiled());
// instance.#pirvateField === 42; //syntax error



//private static fields
class ClassWithPrivateStaticField{
    static #Private_Static_Field;

    static publicStaticMethod(){
        ClassWithPrivateStaticField.#Private_Static_Field = 42;
        return ClassWithPrivateStaticField.#Private_Static_Field;
    }
}
console.log(ClassWithPrivateStaticField.publicStaticMethod() === 42);//true


//Module pattern is calling iimmediately invoked function helps to avoid declaring global variables/functions the steetement inside the funciton is hidden thatis why they call immeditely
(function(){
    var count = 0;
    function incr(n){
        count += n;
    }
    function reset(){
        count = 0;
    }
    incr(4); incr(2);
    console.log(count);
})();

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
