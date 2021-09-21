// *************************************
// ARGUMENTS
// specialus objektas kuris yra kaip masyvas (bet ne masyvas) kuriame yra surasytos visos parametru reiksmes
//*************************************

function suma1() {
    console.log(arguments);
    console.log(arguments.length);
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

console.log(suma1(1,2));
console.log(suma1(1,2,3));
console.log('suma: ', suma1(1,2,3,4));


//*************************************
function suma2(a, b) {
    /*
    a:undefined
    b:undefined
    arguments: {length:0}
    */
    console.log("----------");
    console.log("a", a);
    console.log("b", b);
    console.log(arguments);
    console.log(arguments.length);
    console.log("----------");
    let suma = 0;
    for(let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
    }
    return suma;
   }
    
   console.log(suma2());




// *************************************
// ARGUMENTU DEFAULTINES REIKSMES
// jeigu kvieciam funkcija be argumentu mes automatiskai gauname apibrestas defaultines reiksmes 
// o arguments tures tik tuos argumentus kuriuos perdaveme, defoltiniu reiksmiu jis nagaus
// *************************************

function labas(vardas = "bevardis", pavarde = "bepavardis") {
    /*
    vardas:"bevardis"
    pavarde:"bepavardis"
    */
    console.log(arguments);
    console.log("Labas", vardas, pavarde);
   }
    
   labas("Jonas", "Jonaitis");
   labas("Jonas");
   labas();
   labas("Jonas", "Jonaitis", "Misteris");
   labas(undefined, "Jonaitis");
   labas(undefined, undefined, "Ponas", "Misteris");

   