let vowels="aeiouAEIOU";

let countVol = (str) => {
    let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
  };
  
console.log(countVol("mkcoder"))