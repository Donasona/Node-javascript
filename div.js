//print the num divisible by both 3 and 5 from 13 to 105

let i = 13
while(i<=105){
    if(i%3==0 && i%5==0){
        console.log(i)
    }
    i++;
}