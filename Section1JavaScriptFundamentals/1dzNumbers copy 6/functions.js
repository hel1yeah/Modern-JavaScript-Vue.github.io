// 1
function multiply() {
  if (!arguments.length) return 0;
  let res = 1;

  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }

  return res;
}

console.log(multiply(1, 5, 2, 20))

// 2
function reverseString(str) {
  let string = String(str);
  let res = '';

  for (let i = string.length; i--;) {
    res += string[i];
  }

  return res;
}

console.log(reverseString('test'))
console.log(reverseString(''))
console.log(reverseString(null))
console.log(reverseString(undefined))
console.log(reverseString())

// 3
function getCodeStringFromText(str) {
  let string = String(str);
  let res = '';

  for (let i = 0; i < string.length; i++) {
    res += string[i].charCodeAt() + ' ';
  }

  return res.trim();
}

console.log(getCodeStringFromText('hello'))
console.log(getCodeStringFromText(''))
console.log(getCodeStringFromText(null))
console.log(getCodeStringFromText(undefined))
console.log(getCodeStringFromText(1234))

// 4
function guessTheNumber(num) {
  const number = Number(num);
  if (typeof number !== "number" || isNaN(number)) return new Error("Please provide a valid number");
  if (number < 0 || number > 10) return new Error("Please provide number in range 0 - 10");
  const random = Math.ceil(Math.random() * 10);
  if (random === number) return "You win!";
  return `You are lose, your number is ${number}, the random number is ${random}`;
}

console.log(guessTheNumber(21));
