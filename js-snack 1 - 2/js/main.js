JSNACK 1
Creare un array di oggetti: ogni oggetto descriverà
una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.


var bici = [
  {
    nome: "mountain bike",
    peso: 3
  },
  {
    nome: "river bike",
    peso: 5
  },
  {
    nome: "lake bike",
    peso: 2
  },
];

// creo una variabile dove inserisci la bici punto di partenza
let min = bici[0].peso;

// qui cicla ogni elemento nella variabile bici e dice che se
// il peso dell'elemento e minore della bici minore verra'
// salvato nella var con etichetta min.
bici.forEach((element) => {

  if (element.peso < min) {
    min = element.peso;
  }
});

// filtra gli elementi nella bici e quando trovi un peso uguale
 // a min assegna il valore a bici Piccola
var biciPiccola = bici.filter((element) => element.peso == min);
console.log(`La bici piu piccola e ${biciPiccola[0].nome} e il peso e' di ${biciPiccola[0].peso}`);

// JSNACK 2
// Si scriva una funzione che accetti tre argomenti,
// un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno
// la posizione compresa tra i due numeri
// ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)


const myArray = [1, 2, 3, 4, 5, 6, 7];
var inizio = parseInt(prompt('dammi il valore di partenza'));
var fine = parseInt(prompt('dammi il valore finale'));

var arrayEstratto = estrazioneValori(myArray, inizio, fine);
console.log(arrayEstratto);

function estrazioneValori(array, inizio, fine) {
  return array.slice(inizio, fine);
}

// SECONDA OPZIONE

const myArray = [1, 2, 3, 4, 5, 6, 7];
var inizio = 3;
var fine = 5;

var arrayEstratto = estrazioneValori(myArray, inizio, fine);
console.log(arrayEstratto);

function estrazioneValori(array, inizio, fine) {
  var filteredArray = array.filter(function(element, index, array){
    return index >= inizio && index <= fine;
  });
  return filteredArray;
}
