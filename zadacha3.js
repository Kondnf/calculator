function numbers(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  for (let i = min; i < max; i++) {
    if (!arr.includes(i)) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(numbers([17, 16, 15, 10, 11, 12]));

//   создайте функцию, которая возвращает сумму пропавших чисел из массива которую можно задать
