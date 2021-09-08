/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC)
*/

// function
function reverseString(string) {
    var supporto = '';
    for (var i = string.length - 1; i >= 0; i--) { // var i =6-1; i
        supporto += string[i];  // "" = "" + ultima lettera di string
    }
    return supporto
}

// parola utente
var parola = prompt('Inserisci una parola');
console.log(parola);

// richiamo la funzione
var parolaAlContrario = reverseString(parola);
alert(parolaAlContrario);
console.log(parolaAlContrario);