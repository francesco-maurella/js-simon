// funzione generatrice di una lista di numeri random
function getRandomNums(countlimit, arraylength){
  var num;
  var nums = [];
  do {
    num = parseInt(Math.floor((Math.random() * countlimit) + 1));
    nums.push(num);
  } while (nums.length < arraylength);
  return nums;
}

// funzione inserimento di numero, verificandone la validità numerica
function getUserNum(){
  do{
    var number = parseInt(prompt('Inserisci un numero'));
    if (isNaN(number)) {
      alert('Ammessi solo caratteri numerici');
    }
  } while (!isNaN(number));
  return number;
}

$(document).ready(function(){

  // impostiamo un limite ai numeri partecipanti
  var maxNums = 5;
  // generiamo un array di 5 numeri casuali
  var randomNums = getRandomNums(100, maxNums);

  console.log(randomNums);

});
