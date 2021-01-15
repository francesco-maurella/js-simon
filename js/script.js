// funzione generatrice numeri random
function getRandomNum() {
  var getResult = parseInt(Math.floor((Math.random() * 100) + 1));
  return getResult;
}

// funzione inserimento di numero, verificandone la validità numerica
function getUserNum(){
  do{
    var number = parseInt(prompt('Inserisci un numero'));
    if (isNaN(number)) {
      alert('Ammessi solo caratteri numerici');
    }
  } while (isNaN(number));
  return number;
}

// funzione generatrice di una lista di numeri
function getNumsList(num, quantinty){
  var nums = [];
  do {
    nums.push(num());
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

  // timer
  var t = 30;
  setInterval(function(){
      $('.timer').text(t);
      t--;
    }, 940);

  setTimeout(function(){
    // generiamo un array di 5 numeri scelti dall'user
    var userNums = getNumsList(getUserNum, quantityNums);
    var commonNums = []; // dichiariamo array numeri comuni

    // inseriamovi i numeri in comune tra i due precedenti array
    for (var i = 0; i < quantityNums; i++) {
      if (randomNums.includes(userNums[i])) {
        commonNums.push(userNums[i]);
      }
    }

    var points = commonNums.length // numeri ricordati
    // esito
    if (points === quantityNums) {
      alert('Ottima memoria!\nHai ricordato tutti i numeri:\n' + commonNums);
    } else if (!points) {
      alert('Male! non hai ricordato nessun numero.\nUn pò di fosforo?');
    } else if (points === 1) {
      alert('Non bene. Hai ricordato solo 1 numero: ' + commonNums);
    } else {
      alert('Mmmh, hai ricordato ' + points + ' numeri:\n' + commonNums);
    }
  }, 30000);


});
