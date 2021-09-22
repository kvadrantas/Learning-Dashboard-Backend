//*************************************
// OBJECT STRUCTURE
// OBJECT DESTRUCTION - {} . Objekto savybiu reiksmes nebereikia per taska spausdinti. ne zmogus.vardas o tiesiog vardas
//*************************************

// function labas(zmogus) {
//     console.log("Labas", zmogus.vardas, zmogus.pavarde);
//    }
    
//    function labasNaujoviskai({ vardas, pavarde }) { // OBJECT DESTRUCTION
//     /*
//     vardas: Antanas
//     pavarde: Antanaitis
//     */
    
//     console.log("Labas", vardas, pavarde);
//    }
    
//    function naujasZmogus(vardas, pavarde, gimimoMetai) {
//     return {
//     gimimoMetai,
//     pavarde,
//     vardas
//     };
//    }
    
//    let z1 = naujasZmogus("Jonas", "Jonaitis", 1999);
//    let z2 = naujasZmogus("Petras", "Petraitis", 2000);
//    let z3 = naujasZmogus("Antanas", "Antanaits", 2000);
    
//    console.log(z1, z2, z3);
//    labas(z2);
//    labasNaujoviskai(z3);
    
//    let vardas = "Jonas";
//    let pavarde = "Jonaitis";
//    let gimimoMetai = 1999;
//    let zmogus = {
//    firstName: vardas,
//    pavarde,
//    gimimoMetai
//    };
    
//    console.log(zmogus);


// --------------------------------------------------------
function labas(zmogus) {
    console.log("Labas", zmogus.vardas, zmogus.pavarde);
   }
    
   function labasNaujoviskai({ vardas : firstName, pavarde = "nera pavardes", issilavinimas }) {
    /*
    firstName: Antanas
    pavarde: Antanaitis
    */
    
    console.log(arguments);
    console.log(arguments.length);
    console.log("Labas", firstName, pavarde, issilavinimas);
   }
    
   function naujasZmogus(vardas, pavarde, gimimoMetai) {
    return {
    gimimoMetai,
    pavarde,
    vardas
    };
   }
    
   let z1 = naujasZmogus("Jonas", "Jonaitis", 1999);
   let z2 = naujasZmogus("Petras", "Petraitis", 2000);
   let z3 = naujasZmogus("Antanas", "Antanaits", 2000);
    
   console.log(z1, z2, z3);
   labas(z2);
   labasNaujoviskai(z1);
   labasNaujoviskai({
       vardas: 'Rolandas',
       pavarde: 'Seputis',
       issilavinimas: {
           pradinis: '4 vidurine',
           aukstasis: 'vgtu'
       }
   });

   let gyvunas = {
    vardas: "Lordis",
    veisle: "vokieciu aviganis"
   };
    
   labas(gyvunas);
   labasNaujoviskai(gyvunas);





// ///// ============================ DESTRUKCIJA NE FUNKCIJOJE

// let gyvunas = {
//     vardas: "Lordis",
//     veisle: "vokieciu aviganis",
//     veisykla: "Anrebri",
//     sovris: 31.5
// };

// labas(gyvunas);
// labasNaujoviskai(gyvunas);

// let { veisykla, sovris: weight } = gyvunas; 

// SUKURE 2 NAUJUS KINTAMUOSIUS VEISYKLA IR WEIGHT
// //TADA ISLUKSTENO OBJEKTA GYVUNAI IR IS JO PRISKYRE REIKSMES NAUJIEMS KINTAMIESIEMS
// // VEISYKLA = GYVUNAS.VEISYKLA
// // WEIGHT = GYVUNAS.SOVRIS

// console.log(veisykla);
// console.log(weight);


// ///// ============================ DESTRUKCIJA NE FUNKCIJOJE
