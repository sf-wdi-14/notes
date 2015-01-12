function squeeze(string) {
  //Array that will store single letters
  var splitString = string.split(""); //splits the string into an array of letters
  var previousLetter = ""; //variable declaration in the function's namespace
  var singleLettersCollection = splitString.filter(function(letter){
    if(letter != previousLetter){ //tests if the letter is a duplicate
      previousLetter = letter; //update previous letter value
      return letter; //adds letter to singleLettersCollection
    }
  });
  return singleLettersCollection.join(""); //joins the array back into a string
}