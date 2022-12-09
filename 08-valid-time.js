/* 
  Check if the given string is a correct time representation of the 24-hour clock
  13:58 true
  25:21 false
  02:76 false
  Hint
  parseInt()
  split()
*/
function validTime(str) {
  const hoursAndMinutes = str.split(':');
  const isTimeValid = parseInt(hoursAndMinutes[0]) <= 24 && parseInt(hoursAndMinutes[1]) <= 60;
  return isTimeValid;
};

console.log(validTime('13:58'));
console.log(validTime('25:21'));
console.log(validTime('02:76'));