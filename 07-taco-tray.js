/*
  Make this function return an array that contains 
  between one and ten taco emojis 🌮
  Use the following JavaScript concepts:
      - Math.random()
      - Math.floor()
      - new Array()
      - Array.fill()
  */

function getRandomNumberOfTacos() {
  let randomNumberUpToTen = Math.floor(Math.random() * 10) ?? 1;
  return new Array(randomNumberUpToTen).fill('🌮', 0);
}

console.log(getRandomNumberOfTacos());
console.log(getRandomNumberOfTacos());
console.log(getRandomNumberOfTacos());