/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare,
in base all’età.
*/

// dichiarazione variabili 
const persone = [
    { nome: 'Marco', cognome: 'Cirillo', eta: 20, },
    { nome: 'Franco', cognome: 'Russo', eta: 15, },
    { nome: 'Rosa', cognome: 'Rossi', eta: 10, },
    { nome: 'Rosamaria', cognome: 'Nuoro', eta: 29, },
    { nome: 'Chiara', cognome: 'Rossi', eta: 45, },
    { nome: 'Antonio', cognome: 'Imparato', eta: 27, },
    { nome: 'Luigi', cognome: 'Cuomo', eta: 8, },

];
const personaGuida = [];



// for per scorrere l'arry 
for (let i = 0; i < persone.length; i++) {

    personaGuida.push(persone[i]);
    //if per controllare se la persona è maggiorenne 


    if (personaGuida[i].eta >= 18) {
        personaGuida[i].info = personaGuida[i].nome + ' ' + personaGuida[i].cognome + ' può guidare ';

    }
    // persona minorenne 
    else {
        personaGuida[i].info = personaGuida[i].nome + ' ' + personaGuida[i].cognome + ' non può guidare ';
    }
}

// stampa l'arry 

console.log(personaGuida);

