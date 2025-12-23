//check a number is divisible by both 3 and 5 or not

num = 40

if(num%3==0 && num%5==0){
    console.log(num,"is divisible by 3 and 5")
}
else{
    console.log(num,"is not divisible by both 3 and 5")
}

//divisible by 3 not by 5

if(num%3==0 && num%5==0){
    console.log(num,"is divisible by 3 and 5")
}
else if(num %3==0 && num%5!=0){
    console.log(num,"divisible by 3 not by 5")
}
else if(num % 5 ==0 && num % 3!=0){
    console.log(num,"divisible by 5 not by 3")
}
else{
    console.log(num,"not by both 3 and 5")
}