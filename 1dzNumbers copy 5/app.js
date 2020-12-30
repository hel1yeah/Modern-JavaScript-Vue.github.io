// *На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// *будут в верхнем регистре.Использовать for или while.
// let str = 'i am in the easycode';
// let res = '';
// for (let i = 0; i < str.length; i++) {
//   if (i === 0 || str[i - 1] === ' ') {
//     res += str[i].toUpperCase();
//   } else res += str[i]
// }
// console.log(res);

// *Дана строка “tseb eht ma i”.Используя циклы, сделать строку - перевертыш(то есть последняя буква становится первой, предпоследняя - второй итд)
// let str = 'tseb eht ma i';
// let res = '';
// for (let i = str.length - 1; i > -1; i--) {
//   res += str[i]
// }
// console.log(res);

// *Факториал числа - произведение всех натуральных чисел от 1 до n
// *включительно: 3! = 3 * 2 * 1, 5! = 5 * 4 * 3 * 2 * 1. С помощью циклов вычислить факториал числа 10. Использовать for.
// let fuk = 10;
// let res = 1;

// for (let i = 1; i <= fuk; i++) {
//   res *= i;
// }

// console.log(res);


// *На основе строки “JavaScript is a pretty good language” сделать новую строку,
// *где каждое слово начинается с большой буквы, а пробелы удалены.Использовать for.

// let camelCase = 'JavaScript is a pretty good language';
// let resCamelCase = '';
// for (let i = 0; i < camelCase.length; i++) {
//   if (i === 0 || camelCase[i - 1] === ' ') {
//     resCamelCase += camelCase[i].toUpperCase()
//   } else if (camelCase[i] !== ' '){
//     resCamelCase += camelCase[i];
//   }
// }
// console.log(resCamelCase);

// Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.Массив[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let resArr = []
// for (let i = 0; i < arr.length + 1; i++) {
//   if (i % 2 !== 0) {
//     resArr.push(i)
//   }
// }
// console.log(resArr);


// *Дан объект:
// *let list = {
// *  name: ‘denis’,
// *  work: ‘easycode’,
// *  age: 29
// *}
// *Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.Использовать for in.

let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
}

for (const key in list) {
  if (Object.hasOwnProperty.call(list, key)) {
    if (typeof (list[key]) === 'string') {
      list[key] = list[key].toUpperCase();
    }

  }
}

console.log(list);