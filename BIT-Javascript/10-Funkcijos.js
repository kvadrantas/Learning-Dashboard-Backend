//*************************************
// FUNKCIJOS
//*************************************



// // skaiciu suma nuo .. iki 

function skaiciuSuma(nuo, iki) {
    let suma = 0;
    for (i = nuo; i <= iki; i++) {
        suma += i;
    }
    return suma;
    console.log('blabla'); // sitas niekad nebus vykdomas, nes po return niekas nebevykdoma
}

console.log(skaiciuSuma(1, 3));

console.log('----------------------');

function calc(veiksmas, a, b) {
    function sum(sk1, sk2) {
        return sk1 + sk2;
    }
    if (veiksmas === "suma") {
        return sum(a, b);
    } else if (veiksmas === "atimtis") {
        return sub(a, b);
    } else {
        console.log("nezinomas veiksmas");
    }
    function sub(b, c) {
        return b - c;
    }
}
    
   console.log(calc("suma", 3, 4));
   console.log(calc("atimtis", 15, 7));
   console.log(calc("daugyba", 15, 7));






// -------------------------------- 
/*
parasyti funkcija, kuri paskaiciuoja trikampio plota
pagal nurodyus krastiniu ilgius
(Herono formule)
 
pradzioj reikia patikrinti ar susidaro trikampis
jei nesusidaro - atspausdinti 
"ne trikampis"
ir grazinti -1;
 
2, 4, 5
 
654, 15, 666
 
65, 48, 11
 
*/


// // ------------------------

console.log('-------------2---------------');

function div(a, b) {
    return a/b;
   }
    
   function calc2(veiksmas, a, b) {
    function sum (sk1, sk2) {
    return sk1 + sk2;
    }
    if (veiksmas === "suma") {
    return sum(a, b);
    } else if (veiksmas === "atimtis") {
    return sub (a, b);
    } else if (veiksmas === "dalyba") {
    return div (a, b);
    } else {
    console.log("nezinomas veiksmas");
    }
    function sub (b, c) {
    return b - c;
    }
   }
    
   console.log(calc2("suma", 3, 4));
   console.log(calc2("atimtis", 15, 7));
   console.log(calc2("daugyba", 15, 7));
   console.log(calc2("dalyba", 15, 7));

//    // ------------------------

// function div(a, b) {
//     console.log(superTetis);
//     // console.log(tetis);
//     return a/b;
//    }
    
//    function calc(veiksmas, a, b) {
//     function sum (sk1, sk2) {
//     console.log(superTetis);
//     console.log(tetis);
//     return sk1 + sk2;
//     }
//     let tetis = "tetis";
//     if (veiksmas === "suma") {
//     return sum(a, b);
//     } else if (veiksmas === "atimtis") {
//     return sub (a, b);
//     } else if (veiksmas === "dalyba") {
//     return div (a, b);
//     } else {
//     console.log("nezinomas veiksmas");
//     }
//     function sub (b, c) {
//     return b - c;
//     }
//    }
    
//    let superTetis = "superTetis";
    
//    console.log(calc("suma", 3, 4));
//    // console.log(calc("atimtis", 15, 7));
//    // console.log(calc("daugyba", 15, 7));
//    console.log(calc("dalyba", 15, 7));

//    // ------------------------
