// // *Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1, 2, 3) = 6(1 * 2 * 3)

// // function multiply() {
// //   let res = 0;
// //   if (arguments.length === 0) return 0;
// //   for (let i = 0; i < arguments.length; i++) res *= arguments[i];
// //   return res
// // }
// // console.log(multiply());
// // multiply(2, 4, 5, 6);
// // multiply();

// // *Создать функцию, которая принимает строку и возвращает строку - перевертыш: reverseString(‘test’) // “tset”.
// // 

// // function reverseString(str) {
// //   let res = ''
// //   for (let i = str.length - 1; i > 0; i--) {
// //     res += str[i];
// //   }
// //   return res
// // }
// // reverseString('Hi geys')

// // console.log(reverseString('Hi geys'));

// //* Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод - значение символа:
// // getCodeStringFromText(‘hello’) // “104 101 108 108 111” 

// // function getCodeStringFromText(str) {
// //   let res = '';
// //   for (let index = 0; index < str.length; index++) {
// //     res += str[index].charCodeAt(0) + ' ';
// //   }
// //   return res
// // }
// // console.log(getCodeStringFromText("hello"));
// // ;

// //*Создать функцию угадай число.Она принимает число от 1 - 10(обязательно проверить что число не больше 10 и не меньше 0).Генерирует рандомное число от 1 - 10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”.Числа в строке указаны как пример вы подставляете реальные числа.
// // num < 0 || num > 10 ? new Error('Please provide number in range 0 - 10') : '';
// function guessTheNumber(num) {
//   let rnd = Math.round(Math.random() * 10);
//   if (num < 0 || num > 10) {
//     return new Error('Please provide number in range 0 - 10');
//   } else if (isNaN(num)) {
//     return new Error('Please provide a valid number');
//   } else if (num === rnd) {
//     return 'You Win!!'
//   } else if (num !== rnd) {
//     return `You are lose, your number is ${num}, the random number is ${rnd}`
//   }
// }

// console.log(guessTheNumber(3));
