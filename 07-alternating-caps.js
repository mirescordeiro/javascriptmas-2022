/* Alternating Caps 
  Write a function that takes in a string of letters
  and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
  let letters = str.split('');
  let capitalizeOddLetters = letters.map((letter,index) => index%2==1 ? letter.toUpperCase() : letter);
  return capitalizeOddLetters.join('');
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));