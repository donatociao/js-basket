// esercizio del pomeriggio (repo: js-basket):
// Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti informazioni,
// facendo attenzione che il numero generato abbia senso:
// - Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per tiri da 3 punti
// Tutti i giocatori verranno visualizzati tramite il loro codice (in una select, una lista, …).
// Una volta cliccato sul codice giocatore,
// nel corpo principale verranno visualizzate le statistiche corrispondenti.

//Genero Lettere Random Giocatore
function letteraRandom() {
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var letter1 = letters[Math.floor(Math.random() * letters.length)].toUpperCase();
  var letter2 = letters[Math.floor(Math.random() * letters.length)].toUpperCase();
  var letter3 = letters[Math.floor(Math.random() * letters.length)].toUpperCase();
  return letter1 + letter2 + letter3;
}

//genero numeri random Giocatore
function numeroRandom() {
  var lettereGiocatore;
  var number1 = [Math.floor(Math.random() * 10)];
  var number2 = [Math.floor(Math.random() * 10)];
  var number3 = [Math.floor(Math.random() * 10)];
  lettereGiocatore = number1 + number2 + number3;
  return lettereGiocatore;
}

//genero codice alfanumerico Giocatore
var code;

//creo array da popolare con 100 giocatori
var giocatori = [];

//creo variabile di appoggio per popolare select
var select;

//inserisco i dati dei 100 giocatori
for (var i = 0; i < 100; i++) {

  //Rappresento dati statistici giocatore con oggetto
  var giocatore = {
    'Codice': "",
    'Punti': "",
    'Rimbalzi': "",
    'Falli': "",
    'Tiri2': "",
    'Tiri3': ""
  }

  //popolo le statistiche del giocatore
  code = letteraRandom() + numeroRandom();
  giocatore.Codice = code;
  giocatore.Punti = Math.floor(Math.random() * 50);
  giocatore.Rimbalzi = ((Math.random() * 15) + 5).toFixed(1);
  giocatore.Falli = ((Math.random() * 6) + 1).toFixed(1);
  giocatore.Tiri2 = Math.floor(Math.random() * 70) + 1;
  giocatore.Tiri3 = Math.floor(Math.random() * 50) + 1;

  if (! giocatori.includes(giocatore[i])) {
    giocatori.push(giocatore);
    select = document.getElementById("giocatori");
    select.options[select.options.length] = new Option(giocatore.Codice);
  }
}
