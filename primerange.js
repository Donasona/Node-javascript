// check and print all the prime num in a given range

let start = 1
let stop = 50
for(let num = start;num <= stop;num++){
    if(num>1){
        isPrime = true;
        for(let i = 2;i<num ; i++){
            if(num%i==0){
                isPrime = false;
                break;
            }
        }
        if ( isPrime == true){
            console.log(num)
        }
    }
          
}