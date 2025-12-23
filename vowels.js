// write a program to find the EB based on units
//if units < =100 --->rs 1 per unit
//if 101-200 ----> rs 2 per unit
// if 200 or above --->rs 3 per unit

var units = 114

if (units <=100){
    result = units * 1
    console.log(result)
}
else if(units>100 && units<200){
    result=units*2
    console.log(result)
}
else{
    result=units*3
    console.log(result)
}