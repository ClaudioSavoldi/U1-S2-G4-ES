console.log("-------------------------------------------------------Esercizio1");
/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function areaRettangolo(l1, l2) {
  const risultatoArea = l1 * l2;
  return risultatoArea;
}
console.log("l`area del rettangolo è: ", areaRettangolo(5, 5));

console.log("-------------------------------------------------------Esercizio2");
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(n1, n2) {
  let crazySumResult = 0;
  if (n1 === n2) {
    crazySumResult = (n1 + n2) * 3;
  } else {
    crazySumResult = n1 + n2;
  }
  return crazySumResult;
}
console.log("il risultato di crazySum è:", crazySum(3, 5));
console.log("il risultato di crazySum è:", crazySum(3, 3));

console.log("-------------------------------------------------------Esercizio3");
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n1) {
  let crazyDiffRersult = 0;
  if (n1 > 19) {
    crazyDiffRersult = Math.abs((n1 - 19) * 3);
  } else {
    crazyDiffRersult = Math.abs(n1 - 19);
  }
  return crazyDiffRersult;
}
console.log("il risultato di crazyDiff è:", crazyDiff(3));
console.log("il risultato di crazyDiff è:", crazyDiff(20));

console.log("-------------------------------------------------------Esercizio4");
/* ESERCIZIO 4
Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if ((20 < n && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(101));
console.log(boundary(400));
console.log(boundary(50));

console.log("-------------------------------------------------------Esercizio5");
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
  let stringEpic = stringa;
  if (typeof stringa !== "string") {
    return "errore, inserisci una stringa";
  }
  if (stringa.toUpperCase().startsWith("EPICODE")) {
    return stringEpic;
  } else {
    stringEpic = "EPICODE" + " " + stringEpic;
    return stringEpic;
  }
}
console.log(epify("IS BETTER"));
console.log(epify("epicode È FANTASTICO"));
console.log(epify(23));

console.log("-------------------------------------------------------Esercizio6");
/* ESERCIZIO 6
Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
  if (typeof n !== "number" || n <= 0) {
    return "errore, inserisci numero positivo";
  }
  if (n % 3 === 0 || n % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(check3and7(21));
console.log(check3and7(20));
console.log(check3and7("ciao"));

console.log("-------------------------------------------------------Esercizio7");
/* ESERCIZIO 7
Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
  let stringaNew = stringa.split("").reverse().join("");
  return stringaNew;
}
console.log(reverseString("EPICODE"));
console.log(reverseString("CLAUDIO"));

console.log("-------------------------------------------------------Esercizio8");
/* ESERCIZIO 8
Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(stringa) {
  let stringaArr = stringa.split(" ");
  console.log(stringaArr);
  for (i = 0; i < stringaArr.length; i++) {
    let parola = stringaArr[i];
    stringaArr[i] = parola.charAt(0).toUpperCase() + parola.slice(1);
  }
  return stringaArr.join(" ");
}
console.log(upperFirst("ciao a tutti"));

console.log("-------------------------------------------------------Esercizio9");
/* ESERCIZIO 9
Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa) {
  let newStringa = stringa.slice(1, -1);
  return newStringa;
}
console.log(cutString("superman"));

console.log("-------------------------------------------------------Esercizio10");
/* ESERCIZIO 10
Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  let randomArr = [];

  for (i = 0; i < n; i++) {
    let randomN = Math.floor(Math.random() * 11);
    randomArr.push(randomN);
  }
  return randomArr;
}

console.log(giveMeRandom(15));
