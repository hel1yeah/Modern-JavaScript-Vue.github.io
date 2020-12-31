// function getArray(num) {
//   let res = [];
//   for (let i = 0; i <= num; i++) {
//     res.push(i)

//   }
//   return res
// }
// console.log(getArray(10));


// function doubleArray(arr) {
//   let newArr = arr.concat(arr);
//   return newArr

// }
// console.log(doubleArray([1, 2, 3]));
// doubleArray([1, 2, 3]) // [1,2,3,1,2,3]


// function changeCollection() {
//   let res = [];
//   for (let i = 0; i < arguments.length; i++) {
//     if (Array.isArray(arguments[i])) {
//       let second = arguments[i].slice();
//       second.shift()
//       res.push(second)
//     }
//   }
//   return res
// }

// console.log(changeCollection([1, 2, 3], ['a', 'd', 'f', 'g']))


// const users = [
//   {
//     "_id": "5e36b779dc76fe3db02adc32",
//     "balance": "$1,955.65",
//     "picture": "http://placehold.it/32x32",
//     "age": 33,
//     "name": "Berg Zimmerman",
//     "gender": "male"
//   },
//   {
//     "_id": "5e36b779d117774176f90e0b",
//     "balance": "$3,776.14",
//     "picture": "http://placehold.it/32x32",
//     "age": 37,
//     "name": "Deann Winters",
//     "gender": "female"
//   },
//   {
//     "_id": "5e36b779daf6e455ec54cf45",
//     "balance": "$3,424.84",
//     "picture": "http://placehold.it/32x32",
//     "age": 36,
//     "name": "Kari Waters",
//     "gender": "female"
//   }
// ]



// function filterUsers(arr, key, value) {
//   let res = [];
//   if (!Array.isArray(arr)) new Error('The first argument should be an array');
//   if (typeof key !== 'string' || key.trim() === '') return new Error('not  valid string');
//   if (value === undefined || value === null) return new Error('not valid value.');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][key] === value) {
//       res.push(arr[i])
//     } else {
//       return new Error('not found vulue in this key');
//     }
//     return res
//   }
// }
// console.log(filterUsers(users, 'age', 36));