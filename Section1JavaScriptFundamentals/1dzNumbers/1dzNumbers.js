// *! Получить число pi из Math и округлить его до 2 - х знаков после точки
let mathPi = Number(Math.PI.toFixed(2))

// * Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
const mathMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
const mathMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

// todo !Работа с Math.random:
// *!a.Получить случайное число и округлить его до двух // *!цифр после запятой
// *!b.Получить случайное целое число от 0 до X.X - любое произвольное число.
const mathRandom = Number((Math.random() * 10).toFixed(1));
const n = 213;
const randomN = Math.random() * n;

// *!Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду(1.3) ?
const n = 0.6 + 0.7
const fixN = parseFloat(n.toFixed(1))
// *!Получить число из строки ‘100$’
const n = parseFloat('100$')