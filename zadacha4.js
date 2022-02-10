function der(item) {
   return item.every((el)=>el % 5 === 0)    
};
console.log(der([5,435,345,123,765,23453,3456]))
// Написать функцию которая возвращает true если элементы кратны 5 в противном случае false

function seven (numb) {
 return numb.some((el)=>el === 7)   
 };
 console.log(seven([4,5,6,7,8,8,4,123,23,423]))
 // Написать функцию которая возвращает true если элементы равны 7 в противном случае false