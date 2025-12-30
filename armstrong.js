// a num that equals the sum of its own num
//each raised to the power of the total num of digits in the num
// 153  ---> 1^3 + 5^3 + 3^3
//24 ---> 2^2 + 4^2

let num = 153;
len = String(num).length  //3
let sum = 0;
let temp = num;
while(num>0){
    last_digit = num % 10;
    sum += last_digit**len;
    num = Math.floor(num/10);
}
console.log(sum == temp?"armstrong":"not armstrong")

