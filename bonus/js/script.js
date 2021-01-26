// funzione generatrice numeri random
function getRandomNum(max) {
  var num = parseInt(Math.floor((Math.random() * max) + 1));
  return num;
}

// funzione inserimento di numero
function getUserNum(index){
  var num = parseInt($('.input-num').eq(index).val());
  return num;
}

// funzione verifica requisiti numerci
function isValid(num, nums) {
  if (isNaN(num)) {
    alert ('Attenzione: scrivi soltanto caratteri numerici.')
    return false;
  } else if (nums.includes(num)) {
    alert ('Attenzione: non inserire più di 2 volte lo stesso valore')
    return false;
  } else {
    return num;
  }
}

// funzione inserimento numeri in HTML
function innerNums(quantity, array){
  for (var i = 0; i < quantity; i++) {
    $('.number').eq(i).text(array[i]);
  }
}

$(document).ready(function(){ // quando il dom è pronto ...

  // impostiamo un limite ai numeri partecipanti
  var quantityNums = 5;
  // generiamo un array di 5 numeri casuali
  var randomNums = [];
  do {
    var value = getRandomNum(100) ; // value è generato dalla funzione randomica
    if (!randomNums.includes(value)) { // se il numero non è un duplicato
      randomNums.push(value); // num viene inserito nel container nums
    }
  } while (randomNums.length < quantityNums);

  // annuncio numeri random
  $('.comic-baloon').text('Tieni a mente questi ' + quantityNums + ' numeri');

  setTimeout(function(){
    innerNums(quantityNums, randomNums); // Inseriamo lista numeri randomici
  }, 1000);

  setTimeout(function(){
    $('.comic-baloon').text('Tra 30 secondi dovrai riscriverli');
  }, 3000);

  setTimeout(function(){
    $('.comic-baloon').text('Inizia il conto alla rovescia');
    $('.number').text('?');

    // parte un timer
    var t = 30; // numero secondi

    var timer = setInterval(function() {
      // font variabile ultimi secondi
      if (t <= 5) {
        $('#timer').css('color', 'red');
      }
      // stampiamo il numero secondi
      $('#timer').text(t);
      if (t === 0) {
        clearInterval(timer); // stop timer
        $('#timer').html('<button class="submit">CONFERMA</button>');
      } else {
        t--; // sottraiamo 1 al numero secondi
      }
    }, 1000);
  }, 8000);

  setTimeout(function(){
    // messaggio di avvio gioco
    $('.comic-baloon').text('Ci siamo! Riscrivi gli stessi numeri, nelle sfere sottostanti');

    var userNums = []; // dichiariamo array numeri user
    var commonNums = []; // dichiariamo array numeri comuni

    $('.number').html('<input type="text" value="" class="input-num" maxlength="2">');

    $('.submit').click(function(){
      // generiamo un array di numeri scelti dall'user
      var i = 0;
      do {
        value = getUserNum(i); // value è generato dalla funzione
        var num = (isValid(value, userNums)); // value diventa num se passa la verifica
        if (num) { // se num è "true"
          userNums.push(num); // num viene inserito nel container userNums
          i++;
        } else {
          userNums = [];
          break; // altrimenti il ciclo si interrompe e l'array è vuoto
        }
      } while (userNums.length < quantityNums);

      if (userNums.length === quantityNums) {

        innerNums(quantityNums, randomNums); // Inseriamo lista numeri randomici
        $('.number').css('opacity', 0.5); // con effetto opacità al 50%

        // inseriamovi i numeri in comune tra i due precedenti array
        for (var i = 0; i < quantityNums; i++) {
          if (randomNums.includes(userNums[i])) {
          var indexCommon = randomNums.indexOf(userNums[i]); // recuperiamo index del numero in comune
          $('.number').eq(indexCommon).css('opacity', 1); // i numeri comuni avranno opacità superiore
          commonNums.push(userNums[i]);
          }
        }

        var points = commonNums.length // punteggio

        // esiti
        if (points === quantityNums) {
          $('.comic-baloon').text('Ottima memoria!\nRicordi tutti i numeri');
        } else if (!points) {
          $('.comic-baloon').text('Memoria corta! Non ricordi nessun numero.\nUn pò di fosforo?');
        } else if (points === 1) {
          $('.comic-baloon').text('Non bene. Hai ricordato solo un numero');
        } else {
          $('.comic-baloon').text('Mmmh, hai ricordato ' + points + ' numeri.');
        }

        $('.submit').click(function(){
          location.reload();
        });

        $('.submit').text('RIGIOCA');
      }
    })
  }, 39500);

});
