// Напишиет функцию, которая принимает число как аргумент. Если бы передали число больше 1, должна вернуться 1, в ином случае факториал числа
function numbers(el) {
  let sum = 0;
  if (el >= 1) {
    return 1;
  } else {
    for (let i = 0; i <= Math.abs(el); i++) {
      sum += i;
    }
    return -sum;
  }
}

console.log(numbers([-4]));

// // стрелочная
const numbers = (el) => {
  let sum = 0;
  if (el >= 1) {
    return 1;
  } else {
    for (let i = 0; i <= Math.abs(el); i++) {
      sum += i;
    }
    return -sum;
  }
};

console.log(numbers([-4]));

