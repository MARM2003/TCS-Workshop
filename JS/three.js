let arr1 = [1, 2, 3, 4];
let even = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0) {
        even.push(arr1[i]);
    }
}
console.log(even);
