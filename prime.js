//prime or not 
// looping , jumbing statement, if condition

// a num which is divisible by 1 and the num itself
//num = 7       1,7
//num = 8       1,2,4,8

let num = 7
if (num>1){
    isPrime = true
    for(let i = 2;i<num;i++){
       if(num%i == 0){
         isPrime = false 
         break
        }
    }
// if(isPrime == true){
//     console.log("num is prime")
// }
    console.log(isPrime == true?"prime num":"not prime num")
}
else{
    console.log("enter a valu greater then one")
}
