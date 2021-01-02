const sum = (...params) => {
  if (!params.length) return 0;
  return params.reduce((prev, next) => prev + next);
}



sum(1, 2, 3, 4); // 10
sum(); // 0


const convertToObject = (num) => ({

  value: num,
  isOdd: Boolean(num % 2)

})
console.log(convertToObject);

