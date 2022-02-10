// Дан массиф с числами .Написать функию которая возвращает этого массива только отрицательные числа
let vseNumber = [1,2,-3,-5,10,-20];
let otricNumber = vseNumber.filter(function(el) {
    return el <= 0
})
console.log(otricNumber);
// Дан массив со строками. Написать функию которая возвращает массив с элементами длина которых более 3

let vseNumber = ["vsem", "vsfdem", "vsemfdgsd", "vse", "asd","we",""];
let otricNumber = vseNumber.filter(function(el) {
    return el.length <= 3
})
console.log(otricNumber);