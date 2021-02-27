// console.log(document.head);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.firstElementChild);
// console.log(document.body.firstElementChild.children);

// let div = document.body.firstElementChild
// let notFirstLast = [...div.children].filter(item => item !== div.firstElementChild && item !== div.lastElementChild)
// console.log('not First Last child', notFirstLast);

// Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

// function isParent(parent, child) {
//   if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) return;
//   console.log(parent);
//   console.log(child.parentElement);
//   if (child.parentElement === parent) {
//     console.log('red');
//   }

// }

// isParent(document.body.children[0], document.querySelector('article'));

// function isParent(parent, child) {
//   if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement))
//     return;
//   let isParent = false;
//   let currentParent = child.parentElement;

//   while (currentParent) {
//     isParent = currentParent === parent;
//     if (isParent) {
//       break;
//     }
//     currentParent = currentParent.parentElement;
//   }
//   return isParent;
// }

// console.log(
//   isParent(document.querySelector('ul'), document.querySelector('mark'))
// );

// const noUlLinks = [...document.links].filter(a => !a.closest('ul'));
// console.log(noUlLinks);


// function afterBefore(item) {
//   let before = item.nextElementSibling ;
//   let after = item.previousElementSibling ;
//   console.log(before, after);
// }
// console.log(afterBefore(document.querySelector("ul")));

