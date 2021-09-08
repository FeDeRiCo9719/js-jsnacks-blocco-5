/*
Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

// dichiaro due array
var array1 = ['a', 'b', 'c', 'd'];
var array2 = [1, 2, 3, 4];

// creo la funzione
function myFunction(arr1, arr2) {

    var arr3 = [];

    for (i=0; i<4; i++) {
        arr3.push(arr1[i]);
        arr3.push(arr2[i]);
    }

    return arr3
}

// programma
var array3 = myFunction(array1, array2);

console.log(array3);