'use strict'


let mailValide = ['esempio1@gmail.com', 'esempio2@gmail.com', 'esempio3@outlook.it'];
let canAccess = false;

const mailUtente = prompt('inserire email').toLowerCase();

//    if (mailUtente === mailValide[0]) {
//    console.log(mailUtente);

//} 
//else if (mailUtente === mailValide[1]) {
//    console.log(mailUtente);

//} 
//else if (mailUtente === mailValide[2]) {
 //   console.log(mailUtente);

//} 
//  else {
//    alert('email non valida');
    
//}

for(let i=0; i < mailValide.length; i++) {
    if (mailValide[i] === mailUtente) {
        canAccess = true;
        console.log(mailUtente)
        break;
    }
}



if (canAccess === true) {
    console.log('puoi accedere');
}

else {
    console.log('Non puoi accedere');
}

