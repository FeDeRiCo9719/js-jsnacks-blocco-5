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
]

// 2.Calcola quanto pesano tutte le zucchine.
var pesoZucchine = (zucchine[0]['peso']) + (zucchine[1]['peso']);
console.log(pesoZucchine);
