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
        lunghezza : 20
    },

    {
        varietà : 2,
        peso : 80,
        lunghezza : 27
    },

    {
        varietà : 3,
        peso : 60,
        lunghezza : 20
    },

    {
        varietà : 4,
        peso : 40,
        lunghezza : 27
    },

    {
        varietà : 5,
        peso : 90,
        lunghezza : 20
    },

    {
        varietà : 6,
        peso : 85,
        lunghezza : 27
    },

    {
        varietà : 7,
        peso : 65,
        lunghezza : 20
    },

    {
        varietà : 8,
        peso : 70,
        lunghezza : 27
    },

    {
        varietà : 9,
        peso : 50,
        lunghezza : 20
    },

    {
        varietà : 10,
        peso : 80,
        lunghezza : 27
    },
    
]


// 2.Calcola quanto pesano tutte le zucchine.
var pesoZucchine = 0;

for ( i=0; i<zucchine.length; i++ ) {
    var pesoZucchine = pesoZucchine + (zucchine[i]['peso']);
    console.log(zucchine[i]['peso']);
}


// var pesoZucchine = (zucchine[0]['peso']) + (zucchine[1]['peso']);
console.log(`Le zucchine pesano ${pesoZucchine} gr`);
