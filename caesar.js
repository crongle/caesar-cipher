//Check if a-Z
function azCheck(testChar) {
  if (testChar.search(/[a-zA-z]/) == -1) {
    return false;
  }
}

//Check if caps
function capCheck(testChar) {
  if (testChar == testChar.toLowerCase()) {
   caps = false; }
     else {
   caps = true; }
   return caps;
    }
    
//Main funtion
const caesar = function(word, shiftFactor) {
  let shiftedWord = "";
  let shiftedChar = "";
  let wordLength = word.length;
  let caps;
  let i;
  let extAlph =  Array.from("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"); // Alphabet into an array 3 times

  if (shiftFactor > 26) { //Adjusts for larger shift factors which would loop through multiple alphabet wraps
    shiftFactor = shiftFactor % 26;
  }

  for (i = 0; i < wordLength; i++) { //Main test loop
    let testChar = word.charAt(i);
    caps = capCheck(testChar);
    testChar = testChar.toLowerCase();

    if (azCheck(testChar) == false) { //If testChar is not a letter of the alphabet then it is not altered and the for loop skips to next iteration
      shiftedWord = shiftedWord + testChar;
      continue;
    }
    let indexNo = (extAlph.indexOf(testChar) + 26 + shiftFactor); //Finds cipher value from array
    shiftedChar = extAlph[indexNo];

    if (caps == true) { // Recapitalises chars as needed
      shiftedChar = shiftedChar.toUpperCase()
    }
    shiftedWord = shiftedWord + shiftedChar;
  }

  return shiftedWord; // Returns ciphered string
}

module.exports = caesar
