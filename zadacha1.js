let divisibleBy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 40, 66, -4867];
let divisibleBya = divisibleBy.filter(function (item) {
  return item % 2 == 0;
});
console.log(divisibleBya);
//возвращает с масива числа которые делятся на 2 без остатка
function numrs(ch, mn) {
  return ch.filter((l) => l % mn == 0);
}
console.log(
  numrs([2, 5, 6, 34, 6, 3, 6, 3, 6, 7, 8, 345, 3, 5, 345, 34, 345, 345], 4)
);
