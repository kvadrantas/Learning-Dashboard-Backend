//*************************************
// HOIST IR LET
//*************************************


/* HOIST

javascriptas pereian per visa musu programa ir persiskaito
visus kintamuosius pries pradedamas vykdyti programa.
todel var kintamuosius galima deklaruoti ne tik pries tuos
kintamuosius naudojant bet ir po to
*/

// 1 pvz
console.log(sk);
sk = 10;
console.log(sk);
var sk;

// 2pvz
console.log(sk);
sk = 10;
console.log(sk);
var sk = 11;
console.log(sk);

// VAR vs LET
// let nera hoistinamas

// console.log(a);
let a = 10;
console.log(a);

