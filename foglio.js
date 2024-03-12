/* TRACCIA 1 */
let array1 =[2, 4, 5, 20, 35, 19];
function media(array) {
    

let media = array.reduce((a, b)=>a+b, 0)/array1.length;
let sottovalori = array.filter( a => a < media);
console.log("la media è: " + media);
console.log("i valori sotto la media sono: " + sottovalori);
}
media(array1);

/* TRACCIA 2 */

let array2 = [5, 2, 10, 40, 28, 7, 18, 99, 77, 31];
function ordine(array) {
let ordinato = array2.sort((a, b) => a - b);
console.log(ordinato);
}
ordine(array2);

/* TRACCIA 3 */
let comando = prompt ("Scrivi una frase");

function compare(array) {
    let spazi = array.replace(/\W/g, "");
    let reverse = array.split("").reverse().join("");
    return (reverse == spazi);
}
console.log(compare(comando));

/* TRACCIA 4 */

let mixArray = [1, true, "hackademy", 100, "Javascript", false, null, "php"];

function  parole(array) {
    let parole =array.filter( a => typeof a =="string" );
    return parole;

}

console.log(parole(mixArray));

/* TRACCIA 5 */

let a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4];
let  b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5];

function operazioni (array1, array2){
    let divisione =[];
   for(let i=0; i<=array1.length; i++){
      divisione.push(array1[i] / array2[i]);
   }
   return divisione;
}
console.log(operazioni(a, b));

function seconda (array1, array2){
    array1.map(a => a.forEach(element => {
        
    }))
}