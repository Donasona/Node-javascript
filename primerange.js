// check and print all the prime num in a given range

// let start = 1
// let stop = 50
// for(let num = start;num <= stop;num++){
//     if(num>1){
//         isPrime = true;
//         for(let i = 2;i<num ; i++){
//             if(num%i==0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if ( isPrime == true){
//             console.log(num)
//         }
//     }
          
// }

// identify the total num of prime num in a given range
// identify the largest prime num in the geven range

// 1.
// let start = 1
// let stop = 50
// let count = 0;
//  for(let num = start;num <= stop;num++){
//     if(num>1){
//     let isPrime=true;
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime == true){
//         count++;
//     }
//     }

//  }
//  console.log("total prime num:",count)

 2.
let start = 1
let stop = 50
let largest = 0;
 for(let num = start;num <= stop;num++){
    if(num>1){
    let isPrime=true;
    for(i=2;i<num;i++){
        if(num%i==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime == true){
            largest=num;    
    }
    }

 }
 console.log("largest prime num:",largest)

