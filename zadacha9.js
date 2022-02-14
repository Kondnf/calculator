// Создайте функцию, которая принимает число и возвращает логическое значение, true -если число repdigit(111 или 222 или 555555 или 7777), false - если нет.
function repdigit(el) {
   return el.toString().split("").every((item,_,arr)=>item==arr[0])};
console.log(repdigit([999999999999999]))
