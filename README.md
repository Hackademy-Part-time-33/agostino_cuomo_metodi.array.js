@Hack-Part-Time 33 Ecco un selfwork per chi vuole gia' scaldarsi:
Traccia 1:
Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:
Esempio:
let numbers = [3, 5, 10, 2, 8];
Output: media = 5.6, valori minori = [3, 5, 2]

Variante:
Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.

Traccia 2:
Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
Esempio:
Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]
Variante:
Prova ad ordinali in modo crescente.

Traccia 3:
Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
Primo step: eliminare gli spazi e i segni di punteggiatura:
Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")
Esempio:
Input: “i topi non avevano nipoti”
Output: true

Traccia 4: 
Scrivere una funzione che permetta di filtrare soltanto le parole all’interno di un array:
let mixArray = [1, true, ‘hackademy’, 100, ‘Javascript’, false, null, ‘php’]
il risultato dovra’ dare, let filtered = [‘hackademy’, ‘Javascript’, ‘php’]

Suggerimento: provate a filtrare in base al tipo di dato (operatore typeof)

Traccia 5:
 Scrivi una funzione che dati 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare, una delle seguenti operazioni: 
addizione
sottrazione
moltiplicazione
divisione
Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.
Esempio: Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]
 
