/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.
*/



'use strict';
// dichiarazioni variabili 
const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'tigre', famiglia: 'canidi', classe: 'mammiferi' },

]
// array vuoto per la lista 
const animaliMammiferi = [];
const mammiferi = 'mammiferi';

//ciclo for per scorrere l'array
for (let i = 0; i < animali.length; i++) {

    // if per confrontare la classe dell'ogetto e si pusha 
    if (animali[i].classe === mammiferi) {
        animaliMammiferi.push(animali[i]);
    }
}

//stampa la lista  
console.log(animaliMammiferi);