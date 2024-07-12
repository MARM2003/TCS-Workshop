let arr1 = [1,2,3];
let arr2 = [4,5,6];
function add(arr){
    let sum=0;
for(var i=0 ; i<arr.length ;i++){
    sum= sum + arr[i];
}
return sum;
}

let a = add(arr1);
let b = add(arr2);
console.log(a+b)