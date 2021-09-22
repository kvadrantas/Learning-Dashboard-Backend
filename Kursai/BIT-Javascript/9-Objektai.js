
//*************************************
// OBJEKTAI
//*************************************

let puodukas = {
    spalva: 'rudas',
    turis: '300',
    kiekis: 25
};

let zmogus = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',

};

console.log(zmogus);

let z = zmogus;
console.log(z);
zmogus.pavarde = 'Petraitis';
console.log('--------');
console.log(zmogus);
console.log(z);

console.log('--------');
console.log(zmogus.pavarde);

// puodukas.kiekis -= 5;
console.log(puodukas);

// P GAUNA NE PUODUKO KOPIJA O NUORODA I OBJEKTA. TY JEIGU PO PRISKYRIMO KEISME PUODUKA KEISIS IR P
// PAPRASTU KINTAUJU ATVEJU VEIKIA KITAIP- SUKURIAMA KOPIJA
let p = puodukas;
puodukas.kiekis -= 5;
console.log(p);



// // ----------------------

// let puodukas = {
//     spalva: "rudas",
//     turis: 300,
//     kiekis: 25
//    };
    
//    let p = puodukas;
    
//    p.kiekis -= 5;

//    // CIA NE ESAMAM OBJEKTUI KEICIAME REIKSMES, O SU CURLE BACKETS KURIAME P KINTAMAJAM NAUJA OBJEKTA SU NAUJOM SAVYBEM
//    p = {
//     spalva: "rudas",
//     turis: 300,
//     kiekis: 25
//    };
    
//    console.log(puodukas);
//    console.log(p);

// // ----------------------


// MASYVAS IRGI YRA OBJEKTAS TIK LABAI SPECIALUS

// let m = [15, 19, 23];
// let kitas = m;
// kitas[1] = 77;
// console.log(m);
// kitas = [1, 2, 3];
// console.log(m);
// console.log(kitas);

// //----------

// let puodukas = {
//     spalva: "rudas",
//     turis: 300,
//     kiekis: 25
//    };

// console.log(puodukas.gerimas);  //undefined
// puodukas.gerimas = 'kava';
// console.log(puodukas.gerimas);
// console.log(puodukas);
// //----------


// let puodukas = {}
// console.log(puodukas);
// puodukas.spalva = 'rudas';
// puodukas.turis = 300;
// puodukas.kiekis = 25;
// console.log(puodukas);

// // //----------


// let zmogus = {
//     vardas: 'Jonas',
//     pavarde: 'Jonaitis',
//     kontaktai: {
//         telefonas: 11111111,
//         email: 'a@a.lt'
//     }
// };

// // console.log(zmogus);

// let k = zmogus.kontaktai;
// console.log(k);

// zmogus.kontaktai.telefonas = '22222222';
// console.log(k);



//--------------------------------------
/*
8 masinos su savybem:
pavadinimas
kelias
greitis
 
vyksta lenktyes (ciklas):
kiekvieno ciklo metu kiekviena masina pakeicia savo greiti random (-5..5) km
atbuliniu masina vaziuot negali
kiekvieno ciklo metu kiekviena masina pavaziuoja per tiek, koks yra jos greitis
 
lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km
 
pabaigoj atspausdinam visa turnyrine lentele isrusiuota pagal nuvaziuota kelia
 
*)komentatorius


 
*/