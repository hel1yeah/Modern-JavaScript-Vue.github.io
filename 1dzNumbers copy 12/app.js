// // Создайте функцию которая бы умела делать:

// // minus(10)(6); // 4

// // minus(5)(6); // -1

// // minus(10)(); // 10

// // minus()(6); // -6

// // minus()(); // 0

// // Подсказка, функция minus должна возвращать другую функцию.

// // function minus(min) {
// //   return function (max) {
// //     return min - max;
// //   }
// // }
// // console.log(minus(5)(6));

// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

// function multiplyMaker(num1 = 2) {
//   let count = 0
//   return function (num2 = 1) {
//     count = num1 *= num2;
//     return count
//   };
// }

// const multiply = multiplyMaker(2)

// console.log(multiply(2));
// console.log(multiply(2));
// console.log(multiply(1));


function FloutStr(string = '') {
  let str = string;

  function numStr() {
    return String(str);
  }
  function getStr() {
    return str;
  }
  function strLength() {
    return str.length;
  }
  function changelingStr() {
    return str.split('').revers().join('');
  }
  return {
    numStr,
    getStr,
    strLength,
    changelingStr,
  };
}


const floutStr = FloutStr();
console.log(floutStr('red'));