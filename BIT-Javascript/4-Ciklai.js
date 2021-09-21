// CILAI

// FOR CIKLAS
var sum = 0;
// suma += 5;

for (let i = 5; i <= 73; i++) {
    sum += i;
}
console.log(sum);
//-------------------------
// WHILE CIKLAS
var sum2 = 0;
var i = 5;
while (i <= 7) {
    sum2 += i;
    i += 1;
}
console.log(sum2);
//-------------------------

// susumuoti 100 lyginiu skaiciu
var suma3 = 0;
var i = 0;
while (i <= 100) {
    suma3 += i;
    i += 2;
}
console.log(suma3);

// var sk1 = 101;
// if (1 <= sk1 && sk1 <= 100) {
//     console.log(`tarp 1 ir 100`);
// }


var sk = 2;
while (sk <= 100) {
    var daliklis = 2;
    var pirminis = true;
    while (daliklis < sk) {
        if (sk % daliklis == 0) {
            pirminis = false;
        }
        daliklis += 1;
    }
    if (pirminis) { console.log(sk); }
    sk += 1;
}


// DO WHILE CIKLAS
let suma4 = 0;
var i = 200;
do {
  suma4 += i;
  i += 2;
} while (i <= 100);

// CIKLAS FOR
for (i = 1; i <= 5; i++) {
  console.log(i);
}



// var a = 1;
// var b = 3 + a++;
// paimam reiksme is a ir atsiemnam -> 1
// reiksme padidinam 1 -> 2
// padedam padidinta reiksme i a <- 2
// toliau naudojam atsiminta reiksme -> 1
//re zultatas a2 o b 4 ne 5

// var a = 1;
// var b = 3 + ++a;
// paimam reiksme is a ir atsiemnam -> 1
// reiksme padidinam 1 -> 2
// padedam padidinta reiksme i a <- 2
// toliau naudojam atsiminta reiksme -> 1
//re zultatas a2 o b 4 ne 5

//1*11+2*12+3*13...+9*19
// var sum = 0;
// for (var i = 1, j = 11; i < 10; i++, j++) {
//   suma = +i * j;
//   console.log(i, " ", j);
// }
// console.log(suma);

// for (var i = 15, j = 23; i <= j; i++, j--) {
//   console.log(i, " ", j);
// }

//PIRMINIAI SKAICIA
// var suma = 0;
// for (var i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
//   suma += i;
//   if (suma > 1000) {
//     break; //nutraukia cikla griestuoju budu
//   }
// }
// console.log(suma);