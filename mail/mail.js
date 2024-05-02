'use strict'


let mailValide = ['esempio1@gmail.com', 'esempio2@gmail.com', 'esempio3@outlook.it'];

const mailUtente = prompt('inserire email');

    if (mailUtente === mailValide[0]) {
    console.log(mailUtente);

} 
else if (mailUtente === mailValide[1]) {
    console.log(mailUtente);

} 
else if (mailUtente === mailValide[2]) {
    console.log(mailUtente);

} 
  else {
    alert('email non valida');
    
}

