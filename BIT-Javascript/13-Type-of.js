// *************************************
// TYPE OF
//*************************************

let sk = 10

console.log(typeof sk);

let s = '10';

console.log(typeof s);

let b = false;
console.log(typeof b); //boolean

let c = [];
console.log(typeof c ); //object

let d;
console.log(typeof d); //undefined

function suma(a, b) {
    return a + b;
}
console.log(typeof suma);  //function


//*************************************

    
   console.log(typeof suma); // "function"
    
   suma = suma(1, 2);
    
   console.log(typeof suma); // "number"
    

//*************************************


let n = null;
console.log(typeof n);  //OBJECT!!!
