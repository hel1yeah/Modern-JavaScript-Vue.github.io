// Получить первую и последнюю буквы строки

const firstLeter = string[0]

const lastLeter = string[string.length - 1]

console.log(firstLeter, lastLeter)

// Сделать первую и последнюю буквы в верхнем регистре

let newString = string.replace(string[0], string[0].toUpperCase())

newString = newString.replace(string[string.length - 1], string[string.length - 1].toUpperCase())

console.log(newString)

// Найти положение слова ‘string’ в строке

const indexString = string.indexOf('string')

console.log(indexString)

// Найти положение второго пробела(“вручную” ничего не считать)

const indexOfSecondSpace = string.lastIndexOf(' ')

console.log(indexOfSecondSpace)

// Получить строку с 5 - го символа длиной 4 буквы

const string4Leter = string.substr(5, 4)

console.log(string4Leter)

// Получить строку с 5 - го по 9 - й символы

const stringLeter = string.substring(5, 9)

console.log(stringLeter)

// Получить новую строку из исходной путем удаления последних 6 - и символов(то есть исходная строка без последних 6и символов)



const stringWithoutLastSixLeters = string.substring(0, string.length - 6)

console.log(stringWithoutLastSixLeters)

// Из двух переменных a = 20 и b = 16 получить переменную string, в которой будет содержаться текст “2016”


a = 20
b = 16
const numString = String(a) + String(b)

console.log(numString)