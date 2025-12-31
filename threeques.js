
// calculate the count of even and odd num 
// sum of all elements in the array 
// create a new array which contains only the unique elements from the above array 

// 1.
let number = [12,5,8,20,7,7,5,15,8,20]
let evencount =0
let oddcount =0
for(i=0;i<number.length;i++){
    if(number[i]%2==0){
        evencount++;
    }else{
        oddcount++
    }
}
console.log("evencount:",evencount)
console.log("oddcount:",oddcount)

// 2.

let sum=0;
for(let i=0;i<number.length;i++){
    sum+=number[i];
}
console.log("sum of all number:",sum)

// 3.

let unique= []
for(i=0;i<number.length;i++){
    if(!unique.includes(number[i])){
        unique.push(number[i])
    }
}
console.log(unique)


