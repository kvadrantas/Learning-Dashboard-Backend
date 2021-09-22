//*************************************
// MASYVAI
//*************************************

var m = [5, 8, 12];
m[2] = 53;
console.log(m);
console.log(m[1]);
console.log(m.length);

// var i = 1;
// console.log(m[i]);
var suma = 0;
for (var i = 0; i < m.length; i++) {
  suma += m[i];
}
var vidurkis = suma / m.length;
console.log(suma, vidurkis);


var st = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];

console.log(st[1][2]);
st[1] = [13, 14, 15, 16, 17];
console.log(st[1][10]);


// // visu masyvu elementu suma. Javascript neturi dvimaciu masyvu- yra tik masyvai masyve
// var st = [
//   [1, 2, 3],
//   [13, 14, 15, 16, 17],
//   [7, 8, 9],
//   [10, 11, 12]
// ];
// var suma = 0;
// for (i = 0; i < st.length; i++) {
//   for (j = 0; j < st[i].length; j++) {
//     // console.log(st[i][j]);
//     suma += st[i][j];
//   }
// }
// console.log(suma);


// NAMU DARBAI

// var m = [11, 12, 13, 14, 15];
// var mk = new Array[m.length];
// for (var i = 0; mk.length; i++) {
//   mk[i] = new Array[m.length]
// }

// // *******************************************
// var m = [11, 12, 13, 14, 15];

// var mk = new Array(m.length);
// for (var i = 0; i < mk.length; i++) {
//   mk[i] = new Array(m.length);
// }
// // ND

// console.log(mk);

/*
11 12 13 14 15
12 13 14 15 11
13 14 15 11 12
14 15 11 12 13
15 11 12 13 14
mk = [
 [11, 12, 13, 14, 15],
 [12, 13, 14, 15, 11],
 [13, 14, 15, 11, 12],
 [14, 15, 11, 12, 13],
 [15, 11, 12, 13, 14]
];
*/

// var md = new Array(m.length);
// for (var i = 0; i < md.length; i++) {
//   md[i] = new Array(m.length);
// }
// // ND

// console.log(md);

/*
11 12 13 14 15
15 11 12 13 14
14 15 11 12 13
13 14 15 11 12
12 13 14 15 11
*/






// var skaiciai = [45, 7, -4, -7, 42, 7, 1, 0, 9];
// surusiuoti masyvo elementus didejimo tvarka
// surusiuoti masyvo elementus mazejimo tvarka

// ---------------------------------------------------

/* Masinyciu lenktynes uzd 2
masyve yra 8 masinos
masyve saugoma kiek masina yra nuvaziavusiu kilometru
vyksta lenktynes (ciklas):
kiekvieno ciklo metu kiekviena masina pavaziuoja random (1..5) km
lenktynes baigiasi kai bent 1 masina nuvaziuoja 1000 km

1) pabaigoje atspausdinam kelinta masina ir kiek nuvaziavo
2*) komentatorius
kas 100 km reikia atspausdinti lyderio nr ir nuvaziuota atstuma



/*
Masinu lenktynes
masyvas is 8 masinu (nuvaziuoti kilometrai)
vyksta lenktyes (ciklas):
kiekvieno ciklo metu kiekviena masina pavaziuoja random (1..5) km
lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km
pabaigoj atspausdinam kelinta masina ir kiek nuvaziavo
*)
komentatorius
kas 100 km reikia atspausdinti lyderio numeri ir nuvaziuota atstuma
*/