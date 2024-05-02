'use strict'

   
let giocatoreUno = Math.trunc(6*Math.random()) +1;
let giocatoreDue = Math.trunc(6*Math.random()) +1;

if (giocatoreUno > giocatoreDue) {
    console.log(giocatoreUno)
    console.log(giocatoreDue)
    console.log('giocatoreUno vince')
}
else if (giocatoreUno < giocatoreDue) {
    console.log(giocatoreUno)
    console.log(giocatoreDue)
    console.log('giocatoreDue vince')
}
else if (giocatoreUno === giocatoreDue) {
    console.log(giocatoreUno)
    console.log(giocatoreDue)
    console.log('pareggio')
}
