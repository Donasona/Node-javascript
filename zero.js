// move all zero from the array to the end
num = [1,3,0,7,6,9,0]
let result =[]
for(let i=0;i<num.length;i++){
    if(num[i]!=0){
        result.push(num[i])
    }
}
while(result.length<num.length){
    result.push(0)
}
console.log(result) 