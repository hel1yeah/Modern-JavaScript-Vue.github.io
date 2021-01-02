// const tngl = {
//   width: 30,
//   height: 40,
//   a: 0.5,
//   getSquare: function () {
//     return (this.width * this.height) * this.a
//   }
// }

// console.log(tngl.getSquare());

// const price = {
//   price: 100,
//   discount: '15%',
//   getPrice: function () {
//     return this.price
//   },
//   getPriceWithDiscount: function () {
//     let discount = parseFloat(this.discount);
//     let getSale = this.price - (this.price * (discount / 100))
//     console.log(getSale);
//     return getSale

//   },

// }

// price.getPrice(); // 10

// price.getPriceWithDiscount(); // 8.5

// const objHeight = {
//   height: 10,
//   heightUp: function () {
//     return this.height += 1
//   }
// }

// console.log(objHeight.height);
// console.log(objHeight.heightUp());

// const numerator = {
//   value: 1,
//   double: function () { this.value *= 2; return this },
//   plusOne: function () { this.value += 1; return this },
//   minusOne: function () { this.value -= 1; return this },
// }

// console.log(numerator
//   .double()
//   .plusOne()
//   .minusOne());


// const prod = {
//   name: 'apple',
//   price: '1000$',
//   quantity: 34,
//   totalCost: function name() {
//     return Number(parseFloat(this.price)) * this.quantity
//   }
// }
// const prod2 = {
//   name: 'car',
//   price: '122$',
//   quantity: 22,
//   totalCost: function name() {
//     return Number(parseFloat(this.price)) * this.quantity
//   }
// }


// console.log(prod.totalCost.call(prod2));


// let sizes = { width: 5, height: 10 },

//   getSquare = function () { return this.width * this.height };



// console.log(getSquare.call(sizes));

// let element = {
//   height: 25,
//   getHeight: function () { return this.height; }
// };


// let getElementHeight = element.getHeight.bind(element)

// // undefined

// console.log(getElementHeight());