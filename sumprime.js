// find the sum of prime num in a given range

let start =4;
let stop = 30;
let sum = 0;
  for(let num = start;num <= stop;num++){
     if(num>1){
     let isPrime=true;
     for(let i=2;i<num;i++){
         if(num%i==0){
             isPrime=false;
             break;
         }
    }
    if(isPrime){
        sum += num;
    }
}
}
console.log("sum of prime numbers:",sum)