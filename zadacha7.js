// Напишите функицю которая удаляет все false значения из массива.
let vseNumber = [0,1,false,"",2, 3];
let otricNumber = vseNumber.filter(function(el) {
    return Boolean(el) !== false
})
console.log(otricNumber);
// return Boolean(el) !== true возвращает неверные false[0,false,""]
// return boolean(el) !== false возвращает верные true [1,2,3]