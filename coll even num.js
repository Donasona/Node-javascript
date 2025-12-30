//find the even num from a given range and display them in a given array

let start=3;
let stop=20;
let evennum=[]
for(let i=start;i<=stop;i++){
    if(i%2==0){
      evennum.push(i)
    }
}
console.log(evennum)