// 34567->[7,6,5,4,3] со строки перевернуть в массив чисел
let number = 34567;
let newNumber = number.toString().split("").reverse().map((el)=>Number(el));
console.log(newNumber)