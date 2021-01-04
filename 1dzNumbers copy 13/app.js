// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
// func(‘a’, ‘b’, ‘c’, ‘d’) →
// { first: ‘a’, other: [‘b’, ‘c’, ‘d’] }

// function func(firts, ...other) {
//   let arr = []
//   arr.push(firts)
//   arr.push(other)
// }

// func(1, 2, 4, 5, 7, 8, 9)
// Организовать функцию getInfo, которая принимает объект вида
// { name: ..., info: { employees: [...], partners: […] } }
// и выводит в консоль имя(если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

// const organisation = {
//   name: 'Google',
//   info: { employees: [‘Vlad’, ‘Olga’], 
//   partners: ['Microsoft', 'Facebook', 'Xing'] }
// };

// getInfo(organisation); 
// Name: Google
// Partners: Microsoft Facebook

// const organisation = {
//   name: 'Google',
//   info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
// };

// function getInfo({ name = 'Unknow', info: { partners: [first = 'none', second = 'none'] = [] } = {} } = {}) {
//   console.log(`Name: ${name}`);
//   console.log(`Partners: ${first}, ${second}`);
// }

// getInfo(organisation);
