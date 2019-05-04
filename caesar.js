const caesar = function(word, shiftFactor) {
  let shiftedWord;
  let shiftedChar;
  let wordLength = word.length;
  let caps;
  let i;
  let extAlph = ['abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split('')]; // Alphabet into an array 3 times

//Check if a-z

//Check if caps
function capCheck(testChar) {
  if (testChar == testChar.toLowerCase()) {
   caps = false; }
     else {
   caps = true; }
   return caps;
    }

//Go through word chars
  for (i = 0; i < wordLength; i++) {
    let testChar = word.charAt(i);
    caps = capCheck(testChar);
    shiftedChar = extAlph[(extAlph.indexOf(testChar) + 26 + shiftFactor)];
    shiftedWord += shiftedChar;
  }

console.log(word, word.length, shiftFactor, shiftedWord, shiftedChar, word.charAt(i), "WORKING");

//Shifts char
//function shiftChar(testChar) {
  //  let preShiftIndex = extAlph.indexOf(testChar) + 26; // Gets index of middle appearance of char
  //  let postShiftIndex = preShiftIndex + shiftFactor;
  //  let shiftedChar = extALph.indexOf
  //}
  return word;
}

module.exports = caesar
