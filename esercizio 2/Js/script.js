/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

// 1.Crea un array di 10 oggetti che rappresentano una zucchina
// zucchina => (varietà, peso e lunghezza)
var zucchine = [
    {
        varietà : 1,
        peso : 50,
        lunghezza : 10
    },

    {
        varietà : 2,
        peso : 80,
        lunghezza : 27
    },

    {
        varietà : 3,
        peso : 60,
        lunghezza : 12
    },

    {
        varietà : 4,
        peso : 40,
        lunghezza : 27
    },

    {
        varietà : 5,
        peso : 90,
        lunghezza : 21
    },

    {
        varietà : 6,
        peso : 85,
        lunghezza : 17
    },

    {
        varietà : 7,
        peso : 65,
        lunghezza : 14
    },

    {
        varietà : 8,
        peso : 70,
        lunghezza : 16
    },

    {
        varietà : 9,
        peso : 50,
        lunghezza : 23
    },

    {
        varietà : 10,
        peso : 80,
        lunghezza : 9
    }, 
]


// 2.Calcola quanto pesano tutte le zucchine.
var pesoZucchine = 0;

for ( i=0; i<zucchine.length; i++ ) {
    var pesoZucchine = pesoZucchine + (zucchine[i]['peso']);
    // console.log(zucchine[i]['peso']);
}

// var pesoZucchine = (zucchine[0]['peso']) + (zucchine[1]['peso']);
// console.log(`Le zucchine pesano ${pesoZucchine} gr`);


// 3.separa in due array secondo la lunghezza (-15cm), (+15cm)
var array1 = [];
var array2 = [];

for ( i=0; i<zucchine.length; i++ ) {

    if ( zucchine[i]['lunghezza'] > 15 ) {
        array1.push( zucchine[i] );

    } else {
        array2.push( zucchine[i] );
    }
}


// 4. peso zucchine per singolo array
// array1
var pesoArray1 = 0;

for ( i=0; i<array1.length; i++ ) {
    var pesoArray1 = pesoArray1 + (array1[i]['peso']);
    // console.log(array1[i]['peso']);
}
console.log("peso array1: " + pesoArray1 + "gr");


// array2
var pesoArray2 = 0;

for ( i=0; i<array2.length; i++ ) {
    var pesoArray2 = pesoArray2 + (array2[i]['peso']);
    // console.log(array2[i]['peso']);
}
console.log("peso array2: " + pesoArray2 + "gr");