//*************************************
// REKURSIJA
// kai funkcija kviecia pati save, vadinasi rekursija
//*************************************

function fakt(sk) {
    if (sk === 0) {
    return 1;
    }
    return sk * fakt(sk - 1);
   }
    
   console.log(fakt(5));

   // ------------------------



