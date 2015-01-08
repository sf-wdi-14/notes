function squeeze(string) {
  //Array that will store single letters
  var splitString = string.split("");
  var previousLetter = "";
  var singleLettersCollection = splitString.filter(function(letter){
    if(letter != previousLetter){
      previousLetter = letter;
      return letter;
    }
  });
  return singleLettersCollection.join("");
}