function checkNonDecreasing(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

let input1 = [1, 2, 3, 2];
console.log(checkNonDecreasing(input1));
let input2 = [1, 2, 3, 3];
console.log(checkNonDecreasing(input2))