// 'use strict'
// // console.log(`Hello world`);
// // console.log(`labas`);

// // const a = 2;
// // const b = 7;
// // const c = 6;
// // let vidurkis = (a + b + c) / 3;
// // console.log(vidurkis);

// const sk1 = 0.1;
// const sk2 = 0.2;

// const rez = sk1 + sk2;

// console.log(rez);

/* SPECIALUS SIMBOLIAI:
    /
    /u+4(16-ainiai skaiciai)    -   nusako bet koki simboli
    /t  -   tab simbolis. didelis tarpas
    /r  -   carrage return. simbolio kodas 13 arba 0D
    /n  -   nauja eilute. simbolis kurio kodas 10, simbolis reiskia eilutes pabaiga
    /r/n    -   nauja eilute arba simbolis 1310

*/

// var tekstas = 'labas';
// backslashas \ nurodo, kad nereaguotu i kabutes ir neuzdarytu text stringo, todel ta viengyba kabute itrauke i stringa
// tekstas = tekstas + ' \' pasauli"';
// let tekstas2 = tekstas + " \' \\\\\ pasauli\"";
// console.log(tekstas, tekstas2);

// kai po backslasho \ yra u tai po jo turi eiti 4 16-ainiai skaitmenys, nusakantys konkretu simboli
// let tekstas3 = '\u0061 \u5aed \ \t mes \n jie';
// console.log(tekstas3);