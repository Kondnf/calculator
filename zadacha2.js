function words(arr) {
let res = [];
for(let i = 0; i < arr.length; i++){
    if(!res.includes(arr[i])){
    res.push(arr[i]);
    }
}
return res;
  }
  console.log(words([1,1,1,1,2,2,2,3,4,4,5,6,7,8,9]));
  