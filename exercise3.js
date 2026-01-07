//QUESTION 11
let marks = 85;
let grade;
if(marks >= 90) grade = 'A';
else if(marks >= 80) grade = 'B';
else if(marks >= 70) grade = 'C';
else if(marks >= 60) grade = 'D';
else(grade = 'F') 
console.log('Grade', grade);

//QUESTION 12
function areaOfRectangle(length, width) {
    console.log(length * width);}
    areaOfRectangle(5, 10);

function perimeterOfRectangle(length, width) {
    console.log(2 * (length + width));
}
perimeterOfRectangle(5, 10);

//QUESTION 13
let year = 2024;
if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    console.log('It is a leap year');
}
else{
    console.log('It is not a leap year');
}

//QUESTION 14
let number = 47;
if(number % 3 == 0 && number % 5 == 0) {
    console.log(number +' ' + 'is divisible by both 3 and 5');
}
else if(number % 3 == 0) {
    console.log(number +' ' + 'is divisble by 3');
}
else if (number % 5 == 0) {
    console.log(number + ' ' +'is divisible by 5');
}
else{
    console.log(number + ' ' + 'is not divisible by 3 or 5')}


//QUESTION 15
let subject1 = 78;
let subject2 = 85;
let subject3 = 92;
let average = (subject1 + subject2 + subject3) / 3;


 if(average >= 90){
    console.log('Excellent');
 }
 else if(average >= 75){
    console.log('Good');
 }
 else if(average >= 60){
    console.log('Average');
 }
else{
    console.log('Needs improvement')}






