// get the total mark of a subject
// if the marks is greater or equal to 90 --->A 
// mark above 80 and less the 90 --->B 
// mark above 70 and less then or equal to 80 --->B 
// mark above 60 and less then or equal to 70 --->B 
// else failed

let mark = 78;
let grade = "";

if(mark>=90){
    grade = "A";
}
else if(mark>80 && mark<90){
    grade = "B";
}
else if(mark >70 && mark<=80){
    grade = "C";
}
else if(mark >60 && mark<=70){
    grade = "D";
}
else{
    grade = "Failed";
}
console.log("Grade = ",grade)