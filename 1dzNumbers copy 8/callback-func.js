// 1
function firstFunc(arr, fn) {
  let res = 'New value: ';

  for (let i = 0; i < arr.length; i++) {
    res += fn(arr[i]);
  }

  return res.trim();
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
  return Number(el) * 10 + ', ';
}

console.log(firstFunc([10, 20, 30], handler2))

function handler3(el) {
  return `${el.name} is ${el.age}, `
}

console.log(firstFunc([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], handler3));

function handler4(el) {
  return el.split('').reverse().join('') + ', ';
}

console.log(firstFunc(['abs', '123'], handler4));

// 2
function every(arr, fn) {
  if (!Array.isArray(arr)) return new Error('The first argument expected as array');
  if (!fn || typeof fn !== 'function') return new Error('The second argument expected as function');

  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      return false;
    }
  }

  return true;
}

console.log(every([1, 2], function (el) {
  return typeof el === 'number';
}))