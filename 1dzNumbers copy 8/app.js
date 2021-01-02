// let numbers = [1, 2, 3, 4, 5, 6];
// function isEven(x) {
//   return x % 2 === 0;
// }
// let evenNumbers = numbers.filter(isEven);
// //2 4 6
// console.log(evenNumbers);
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5, 6];
// function double(x) {
//   return x * 2;
// }
// let doubleNumbers = numbers.map(double);
// console.log(doubleNumbers);
//2 4 6 8 10 12

// function doWithLoading(fn) {
//   console.log("начало загрузки");
//   let returnValue = fn();
//   console.log("конец загрузки");
//   return returnValue;
// }
// function process() {
//   console.log("загружаем...");
// }
// doWithLoading(process);
// начало загрузки
// загружаем...
// конец загрузки

// 1
// function firstFunc(arr, fn) {
//   let res = 'New value :'
//   for (let i = 0; i < arr.length; i++) {
//     res += fn(arr[i]);
//   }
//   return res
// }
// function handler1(el) {
//   return el[0].toUpperCase() + el.slice(1);
// }
// console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

// function handler2(el) {
//   return el * 10 + ', '
// }
// console.log(firstFunc([10, 20, 30], handler2))

// function handler3(el) {
//   return `${el.name} is ${el.age}, `
// }

// console.log(firstFunc([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], handler3));

// function handler4(el) {
//   return el.split('').reverse().join('') + ', ';
// }
// console.log(firstFunc(['abs', '123'], handler4));