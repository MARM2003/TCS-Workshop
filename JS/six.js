let arr=[1,2,3,4,5,6,7,8,9]
function find(i){
    for(let a=0; a<arr.length; a++){
        if(arr[a]==i){
            console.log(`found ${i} on ${a}`)
        }
    }
}
find(9);