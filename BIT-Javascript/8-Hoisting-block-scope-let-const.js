//*************************************
// BLOKAI arba SCOPAI     {}
//*************************************

// {

// }

// JEIGU DEKLARUOTAS KINTAMASIS SU SCOPE JI GYVENS TIK SCOPE


{
  let b = 10;
  console.log(b);
}
// console.log(b); // mes klaida - kintamasis neegzistuoja

let sk = 10;
{
let a;
console.log(a);
a = 15;
console.log(a);
console.log(a + sk);
}

console.log('-------------------------');
let a = 10;
{
  let b = 15;
  {
    let c = 20;
    console.log(a, b, c);
    a = 25;
  }
  console.log(a, b);
}
console.log(a);

// KINTAMIEJI DEKLARUOTI SU VAR ATSIRANDA PAGRINDINIAME SCOPE
// KINTAMIEJI DEKLARUOTI SU LET ATSIRANDA IR GYVENA TIK SAVO SCOPE


//*************************************
// KONSTANTOS
//*************************************

// const veikia lygiai taip pat kaip ir let- jos nera hoistinamos

// let a = 5;
// console.log(a);
// a = 7
// console.log(a);

// const b = 55;
// console.log(b);
// b = 77;
// console.log(b); // cia mes klaida, nes bandome keisti konstanta

// {
// const k = 1;
// console.log(k);
// }
// const k = 2;
// console.log(k);

// // --------------------------
// console.log(d);
// let a = 10;
// {
//     let b = 15;
//     {
//         let a = 77;
//         let c = 20;
//         var d = 30;
//         console.log(a, b, c, d);
//         //        77, 15, 20, 30
//         a = 25;
//     }
//     console.log(a, b);
//     //         10, 15
// }
// console.log(a, d);
// //         10, 30

// /*
// d: 30
// a: 10
//     b: 15
//         a: 25
//         c: 20
// */

// // ---------------------

