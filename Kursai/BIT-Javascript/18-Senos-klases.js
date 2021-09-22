//*************************************
// PAPRASTOS KLASES
// CLASS
//*************************************

function Puodukas(spalva, turis) {
    this.spalva = spalva;
    this.turis = turis;
    this.kiekis = 0;
}

let p1 = new Puodukas('rudas', 250);
let p2 = new Puodukas("baltas", 150);
// OPERATORIUS NEW SUKURIA NAUJA TUSCIA OBJEKTA

console.log(p1);
console.log(p2);


//------------
function suma(a, b) {
    return a+b;
   }
    
   let s =  suma(1, 2);
    
   console.log(s);
//------------
// FUNKCIJOS IS DIDZIOSIOS RAIDES YRA SKIRTOS OBJEKTAMS. DAR JOS VADINAMOS KONSTRUKTORIAIS
// DIDZIOJI RAIDE NEPRIVALOMA BET PAGEIDAUTINA

delete p2.turis // operatorius delete istrina objekto savybe


console.log('-----------------------');
//------------
function Puodukas2(spalva, turis) {
    this.spalva = spalva;
    this.turis = turis;
    this.kiekis = 0;
    this.ipilk = function(kiek) {
    this.kiekis += kiek;
    }
   }
    
   let p11 = new Puodukas2("rudas", 250);
    
   let p22 = new Puodukas2("baltas", 150);
    
   console.log(p11);
   console.log(p22);
    
   p11.ipilk(100);
    
   p22.ipilk(20);
    
   console.log(p11);
   console.log(p22);

//------------

console.log('-----------------------');

//*************************************
// PAPRASTOS KLASES
// CLASS
//*************************************

//------------

//------------


//------------
class Puodukas3 {
 
    constructor(spalva, turis) {
    this.spalva = spalva;
    this.turis = turis;
    this.kiekis = 0;
    }
    
    ipilk(kiek) {
    if (kiek <= 0) {
    return;
    }
    this.kiekis += kiek;
    if (this.kiekis > this.turis) {
    this.kiekis = this.turis;
    }
    }
    
    isgerk(kiek) {
    if (kiek <= 0) {
    return;
    }
    this.kiekis -= kiek;
    if (this.kiekis < 0) {
    this.kiekis = 0;
    }
    }
   }
    
   let p111 = new Puodukas3("rudas", 250);
    
   let p222 = new Puodukas3("baltas", 150);
    
   console.log(p111);
   console.log(p222);
    
   p111.ipilk(100);
   p111.ipilk(-50);
   p111.isgerk(30);
    
   p222.ipilk(20);
   p222.ipilk(200);
    
   console.log(p111);
   console.log(p222);
    
   p111.isgerk(100);
   console.log(p111);
    
   // let p3 = Puodukas3("juodas", 500);
//------------------------------------

//------------------------------------------------------------------------------------------------------------
//
// GET ir SET
//

// // PAPRASTOS KLASES
// //------------------------------------
// // "use strict";

// function Puodukas(spalva, turis) {
//     this.spalva = spalva;
//     this.turis = turis;
//     this.kiekis = 0;
// }

// Puodukas.prototype.ipilk = function(kiek) {
//     if (kiek <= 0) {
//         return;
//     }
//     this.kiekis += kiek;
//     if (this.kiekis > this.turis) {
//         this.kiekis = this.turis;
//     }
// };

// Puodukas.prototype.isgerk = function(kiek) {
//     if (kiek <= 0) {
//         return;
//     }
//     this.kiekis -= kiek;
//     if (this.kiekis < 0) {
//         this.kiekis = 0;
//     }
// };

// let p1 = new Puodukas("rudas", 250);

// let p2 = new Puodukas("baltas", 150);

// console.log(p1);
// console.log(p2);

// // console.log(p1.__proto__);

// p1.ipilk(100);
// p1.ipilk(-50);
// p1.isgerk(30);

// p2.ipilk(20);
// p2.ipilk(200);

// console.log(p1);
// console.log(p2);

// p1.isgerk(100);
// console.log(p1);

// // console.log(global);
// // let p3 = Puodukas("juodas", 500);
// // console.log(p3);
// // console.log(global);

// /*
// window
// global
// globalThis
// */

// console.log(typeof Puodukas);

// //------------------------------------
