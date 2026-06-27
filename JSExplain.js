//Conditional Statememts
//1.If statement

let age = 20;
if (age>=18){
    console.log("Eligiable")
}

//2.if else
if(age>=18){
    console.log("Eligiable")
}
else{
    console.log("Not Eligiable")
}
//Else if ladder
let marks = 85
if (marks > 90){
    console.log("Grade A")
}
else if(marks >= 80){
    console.log("Grade B")
}
else if(marks >= 70){
    console.log("Grade C")
}
else if(marks >=60){
    console.log("Grade D")
}
else if(marks >=50){
    console.log("Grade E")
}
else {
    console.log("Fail")
}

//4.Switch case
let day = 2
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day")
}

//for loop:
for (let i = 0; i<=5; i++){
       console.log(i)
}

//print mutiplication of table of 7
// use template literals
// Print multiplication table of 7

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}
   //or
let n = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}
//task2:Do the sum of all odd numbers 
//from 5-50
//let sum = 0;
//for(let i = 5;i<=50;i+2){
//    if (i % 2 !== 0) {
//       sum += i;
//    }
//    console.log(sum)
//}  
// find the factorial of 6 using for loop


//let factorial = 1;
//for (let i = 1; i <= 6; i++) {
//    factorial *= i;

//console.log(factorial);
//}

//while loop 
//let i = 1;
//while(i<=5){
//    console.log(i)
//    i++;
//}

//Do While
//let password;
//do{
 //   password = prompt("Enter the pasword:")
//}while(password != 1234);

//Break: Immediatelyy terminates the loop
//for(let i=1;i<=10;i++){
//   if(i==5){
 //       break;
//    }
 //   console.log(i);
//}
//continue :skips the current iteration
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
//Do the sum of first n numbers
let h = Number(prompt("Enter number:"));
let sum = 0;
for(let i = 1;i<=h;i++){
    sum=sum+i
}
console.log(sum)