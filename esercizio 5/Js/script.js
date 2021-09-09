/*
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b”
*/


/*
Function
*/

function myFunction(arr, num1, num2) {

    var newArr = [];

    for ( i=0; i<arr.length; i++ ) {

        if ( i >= num1 && i <= num2 ) {
            newArr.push(arr[i]);
        }

    }

    return newArr
}

// Input
var array = ['a', 'b', 'c', 'd', 'e', 'f'];
var NumA = 2;
var NumB = 5;

// Programma - richiamo la funzione
var NewArray = (myFunction(array, NumA, NumB));

// Output
console.log(NewArray);