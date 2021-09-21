//*************************************
// GLOBALUS OBJEKTAS
// su node.js "global" be node.js o narsykleje "window", bendrai ir ten ir ten "globalThis"
// *************************************

console.log(global);
global.globalusKintamasis = 'supersenelis';
console.log(global);



// ------------------------
// SVARBU
// jei neapibreziam kintamojo su let arba var o iskart priskiriam reiksme kintamasis = 10, tai sis kintamasis bus
// idedamas i global
// reikia naudoti 'use strict', kad neleistu daryti smulkiu klaidu net ir praleisti deklaravima
// 'use strict' veiks tik irasytas failo pradzioje

console.log(globalThis);
kintamasis = 10;
console.log(globalThis);

console.log(kintamasis);
// ------------------------
