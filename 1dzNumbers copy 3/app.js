// let a = 0 || 'string'; // или возвращает  первый что встретится true = string
// let a = 1 && 'string'; // и возвращает последний true (ксли оба параметра тру) = string
// let a = null || 25; // булевый null = false,  или возвращает что встретится первый что встретится true = 25
// let a = null && 25; // булевый null = false, и возвращает первый false = null
// let a = null || 0 || 35; // или возвращает  первый что встретится true = 35
// let a = null && 0 && 35; // булевый null = false, и возвращает первый false

// let a = 12 + 14 + '12' //с начала идёт знак + и он сумирует 2 числа 12 и 14 = 26 потом мы к типу Number добавляем String выполняеться неявное преобразование строк число 26 становиться строкой "26" просиходит конкатинация "26"+"12"=2612 
// let a = 3 + 2 - '1' любая матиматическая операция делает из типа String тип Number (если конечно єто возможно) по єтому ответ равен 4 
// let a = true + 2 // true = 1 при числовом преобразовании , ответ 3
// let a = +'10' + 1 //знак +переделывает строку в число ответ 11 
// let a = undefined + 2 ; //при любый математических операциях с undefined кроме сложения со строкой, ответ NaN
// let a =  null + 2 ; // при мат операциях null = 0 ответ 2
// console.log(true + undefined); //при любый математических операциях с undefined кроме сложения со строкой, результат будет NaN


// let a = 'hidden';

// if (a === 'hidden') {
//   a = 'visible'
// } else a = 'hidden'

// Создать переменную и присвойте ей число.
// Используя if, записать условие:
//   - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10(использовать краткую запись).
// let a = 0;

// if (!a) {
//   a = 1
// } else if (a < 0) {
//   a = 'less then zero';
// } else a = a * 10

// console.log(a);

// Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.

// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
// let car = { 
//   name: 'Lexus', 
//   age: 10, 
//   create: 2008, 
//   needRepair: false 
// }

// if (car.age > 5) {
//   console.log('Need Repair');
//   car.needRepair = true;
// } else car.needRepair = false;

// let item = {
//   name: 'Intel core i7',
//   price: '100$',
//   discount: '15%'
// }
// let parsePrice = parseFloat(item.price),
//   parseDiscount = parseFloat(item.discount)

// if (parsePrice !== NaN && parseDiscount !== NaN) {
//   item.priceWithDiscount = parsePrice - (parsePrice * (parseDiscount / 100))
// } else  console.log(item.price);


// let product = {
//   name: 'Яблоко',
//   price: '10$'
// };

// let min = 10
// let max = 20

// let price = parseFloat(product.price)

// if (price >= min || price === max) {
//   console.log(product.name);
// } else 'товар не найден'

// console.log(price);