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
function getNumsList(num, arraylength){
  var nums = [];
  do {
    nums.push(num());
  } while (nums.length < arraylength);
  return nums;
}

$(document).ready(function(){ // quando il dom è pronto ...

  // impostiamo un limite ai numeri partecipanti
  var maxNums = 5;
  // generiamo un array di 5 numeri casuali
  var randomNums = getNumsList(getRandomNum, maxNums);
  alert('Tieni a mente questi ' + maxNums + ' numeri:\n' + randomNums);

  setTimeout(function(){
    // generiamo un array di 5 numeri scelti dall'user
    var userNums = getNumsList(getUserNum, maxNums);
    console.log(userNums);

    var commonNums = []; // dichiariamo array numeri comuni

    // inseriamovi i numeri in comune tra i due precedenti array
    for (var i = 0; i < maxNums; i++) {
      if (randomNums.includes(userNums[i])) {
        commonNums.push(userNums[i]);
      }
    }

    alert(commonNums)

  }, 3000);


});
