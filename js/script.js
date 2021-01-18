// funzione generatrice numeri random
function getRandomNum() {
  var num = parseInt(Math.floor((Math.random() * 100) + 1));
  return num;
}

// funzione inserimento di numero
function getUserNum(){
  var num = parseInt(prompt('Inserisci un numero'));
  return num;
}

// funzione verifica requisiti numerci
function isValid(num, nums) {
  if (isNaN(num)) {
    alert ('Attenzione: scrivi soltanto caratteri numerici.')
    return false;
  } else if (nums.includes(num)) {
    alert ('Attenzione: valore già inserito precedentemente.')
    return false;
  } else {
    return num;
  }
}

// funzione generatrice di una lista di numeri validi
function getNumsList(choiceNum, quantinty){
  var nums = [];
  while (nums.length < quantinty) {
    var value = choiceNum(); // value è generato dalla funzione choiceNum
    var num = (isValid(value, nums)); // value diventa num se passa la verifica
    if (num) { // se num è "true"
      nums.push(num); // num viene inserito nel container nums
    }
  } ;
  return nums;
}

$(document).ready(function(){ // quando il dom è pronto ...

  // impostiamo un limite ai numeri partecipanti
  var quantityNums = 5;
  // generiamo un array di 5 numeri casuali
  var randomNums = getNumsList(getRandomNum, quantityNums);
  var randNList = randomNums.join(' ,'); // spaziamo i contenuti
  // annuncio numeri random
  alert('Tieni a mente questi ' + quantityNums + ' numeri:\n' + randNList);
  alert('Tra 30 secondi dovrai riscriverli');

  // parte un timer
  var t = 30; // numero secondi
  var timer = setInterval(function() {
    // font pixel variabili ad ogni secondo
    var font = (t * 20) + 'px';
    if (t === t) {
      $('#timer').css('font-size', font);
    }
    // stampiamo il numero secondi
    $('#timer').text(t);
    t--; // sottraiamo 1 al numero secondi
  }, 960);

  setTimeout(function(){
    // stop timer
    clearInterval(timer);
    // messaggio di avvio gioco
    alert('Ci siamo! Riscrivi gli stessi numeri, uno alla volta');
    // generiamo un array di 5 numeri scelti dall'user
    var userNums = getNumsList(getUserNum, quantityNums);
    var commonNums = []; // dichiariamo array numeri comuni

    // inseriamovi i numeri in comune tra i due precedenti array
    for (var i = 0; i < quantityNums; i++) {
      if (randomNums.includes(userNums[i])) {
        commonNums.push(userNums[i]);
      }
    }

    var commNList = commonNums.join(' ,'); // spaziamo i contenuti
    var points = commonNums.length // numeri ricordati
    // esiti
    if (points === quantityNums) {
      alert('Ottima memoria!\nRicordi tutti i numeri:\n' + commNList);
    } else if (!points) {
      alert('Memoria corta! Non ricordi nessun numero.\nUn pò di fosforo?');
    } else if (points === 1) {
      alert('Non bene. Hai ricordato solo un numero: il ' + commNList);
    } else {
      alert('Mmmh, hai ricordato ' + points + ' numeri:\n' + commNList);
    }
  }, 30000);

});
