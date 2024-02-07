let a="abaa";
let b=a.toLowerCase().split().reverse().join("");
if(a==b){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome");
}