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
  do {
    var value = choiceNum(); // value è generato dalla funzione choiceNum
    var num = (isValid(value, nums)); // value diventa num se passa la verifica
    if (num) { // se num è "true"
      nums.push(num); // num viene inserito nel container nums
    }
  } while (nums.length < quantinty);
  return nums;
}


$(document).ready(function(){ // quando il dom è pronto ...

  // impostiamo un limite ai numeri partecipanti
  var quantityNums = 5;
  // generiamo un array di 5 numeri casuali
  var randomNums = getNumsList(getRandomNum, quantityNums);
  // annuncio numeri random
  alert('Tieni a mente questi ' + quantityNums + ' numeri:\n' + randomNums);
  alert('Tra 30 secondi dovrai riscriverli');

  // parte un timer
  var t = 30; // numero secondi
  $('.timer').css({ // stili html timer
    'display' : 'flex',
    'align-items' : 'center',
    'justify-content' : 'center'});

  var timer = setInterval(function() {
    // font pixel variabili ad ogni secondo
    var fontT = (t * 20) + 'px'
    if (t === t) {
      $('.timer').css('font-size', fontT);
    }
    // stampiamo il numero secondi
    $('.timer').text(t);
    t--; // sottraiamo 1 al numero secondi
    }, 940);

  setTimeout(function(){
    // stop timer
    clearInterval(timer);
    // messaggio di avvio gioco
    alert('Ora riscrivi gli stessi numeri, uno alla volta');
    // generiamo un array di 5 numeri scelti dall'user
    var userNums = getNumsList(getUserNum, quantityNums);
    var commonNums = []; // dichiariamo array numeri comuni
    console.log(userNums);

    // inseriamovi i numeri in comune tra i due precedenti array
    for (var i = 0; i < quantityNums; i++) {
      if (randomNums.includes(userNums[i])) {
        commonNums.push(userNums[i]);
      }
    }
    console.log(commonNums);

    var points = commonNums.length // numeri ricordati
    // esito
    if (points === quantityNums) {
      alert('Ottima memoria!\nHai ricordato tutti i numeri:\n' + commonNums);
    } else if (!points) {
      alert('Male! non hai ricordato nessun numero.\nUn pò di fosforo?');
    } else if (points === 1) {
      alert('Non bene. Hai ricordato solo un numero: il ' + commonNums);
    } else {
      alert('Mmmh, hai ricordato ' + points + ' numeri:\n' + commonNums);
    }
  }, 30000);

});
