//functions: It is a reusable block of code 
//which perform some action

//python example
//def function_name():
//    statements

//function_name(arguments)

//JS function example

//define the function
function greet(){
    // code to excute
    console.log("Welcome Students")
}
//calling the function
greet()
greet()
greet()

function greeting(name){
    console.log(`Hello ${name}`)
}
//calling function
greeting("Guna Sri")

//Multiple Parameters
function add(a,b){
    console.log(a+b)
}
add(2,3);

//return: send backs the value where the  fuunction i called

//not using the return 
//function sub(a,b){
//    console.log(a-b)
//}
//let result = sub(10,5)
//console.log(result)



function sub(a,b){
    return(a-b)
}
let result = sub(10,5)
console.log(result);

//Task:Write a function for a square of a number 
function square(num){
    return(num*num)
    console.log("Finished")
}
let square1=square(5)
console.log(square1)



function test(){
    return "Hello";
    console.log("This code will never executes")
}let test1=test();
console.log(test1)

//variable scope
let college ="CITY";
function showCollege(){
    console.log(college)
}
showCollege();

//local variable
//function showAge(){
//    let age=22;//local variable
//    console.log(age);
//}
//showAge();
//console.log(age)

//Hoisting:
//JS Moves declarations to the top
//before the execution

console.log(name1)

var name1="Manish";

//how JS sees exactly
//var name;
//console.log(name1)
//name1="Manish"

//let age1=23;
//console.log(age1)

//Hosting with const
//console.log()

//const city="Hyd"

//Hosting with functions
//call
greeting1()

function greeting1(){
    console.log("Hello")
}

//Functions are completely hoisted

//Function Exprssion:
//store inside a variable

//let result1 = greeting1()
// function stored in a variable
let display = function(){
    console.log("Hello Students")
}
//calling the variable
display()

//Hosting with function expression
//test2()
//let test2 = function(){
//    console.log("HI")
//}

//example 2
let calculate_area = function(length,width){
    return length*width;
}
console.log(calculate_area(3,5))

//Task: Create a function that returns largest of two numbers 
let largest = function(num1,num2){
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(largest(5,1))

//create a function expression to calculate area of circle
PI=3.14
let areaOfCircle = function(radius){
    return PI * radius * radius;
}
console.log(areaOfCircle(3))

//Arrays:Collection of orderd elements
// in Java scripit:Array is a collection of multiple value stored in a single variable
//arr=["Manish",3.14,True] in python

let arr=["Apple","Banana","Custard",3.14,true]
        // 0        1         2      3    4   
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

let numbers=[10,20,30,40]
console.log(numbers[numbers.length-1])
//returns length
console.log(numbers.length)
//Modifying the element 
numbers[0]=9
console.log(numbers)

//Treversing
// for i in list:
// print(i)
// Traversal: visiting each and every element 

let fruits=["Apple","Banana","pineapple"]
//using for loop 
for (i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//for ...of loop
for(let fruit of fruits){
    //fruit is storing the current element 
    console.log(fruit)
}

let numbers1=[10,20,30,40,50]
let total=0
for(i=0;i<numbers1.length;i++){
    total+=numbers1[i]
    console.log(total)  
}
//Find largest element
let arr1 = [10, 50, 60, 90, 5, 95];
let largest1 = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > largest1) {
        largest1 = arr1[i];
    }
}
console.log(largest1);

arr1.push(5)
console.log(arr1);
//multiple values
arr1.push(10,20)
console.log(arr1);
//removes the last element
arr1.pop()
console.log(arr1)

//Restoring the removed elements
let removed = arr1.pop();
console.log(removed)

//remove the first element in an arry
let firstremoved = arr1.shift();
console.log(arr1);
console.log(firstremoved);

//add element at the beginning
arr1.unshift(10);
console.log(arr1)

//python slicing
//arr[start:end:step]
//splice() in ---> JS
//used for ---- > 1.adding,2.deleting,3.replacing elements

//Syntax:
//Array.splice(startIndex,delete_index,new_value)


let veggies=["Carrot","Beetroot","Brinjal"]
           //   0         1          2
veggies.splice(1,1)
//1 ---> startindex
//1 ---> deleteindex
console.log(veggies)
//adding elements
veggies.splice(1,0,"Bitter Gaurd")
console.log(veggies)
//replacing elemets
veggies.splice(1,1,"Bootle gaurd")
console.log(veggies)

//slice ---> creates a copy 
//of a portion of array 
// array.slice(start,end)

let nums=[10,20,30,40,50]

let result1 = nums.slice(0,3)
console.log(result1)

//task:arr=[10,20,30,40,50,60]
//create a new array containing element 
//from index 2-4

let arr2 = [10, 20, 30, 40, 50, 60]
let subArray = arr2.slice(2, 5)
console.log(subArray)

//string:A string is a sequence of characters
//closed in ''," ",``
//let name = "Priya"
//let name1 = 'priya'
//let name2 =`priya`

//Indexing in strings:
let str = "Hello"
 //        01234
console.log(str[0])
console.log(str[1])
console.log(str[2])
console.log(str[3])
console.log(str[4])

//string length
console.log(str.length)

str[0]="M"
console.log(str)

//Traverse over the string
for(i=0;i<str.length;i++){
    console.log(str[i])
}

//for ..of
for(let ch of str){
    console.log(ch);
}

let firstName = "GunaSri"
//console.log(firstName.toUppercase());
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());



//trim : it removes the xtra spaces in a string
let hello = " Bye "
console.log(hello.trim());

// includes()
let course = "JavaScript";
console.log(course.includes("Script"));

//startwith
console.log(firstName.startsWith("G"));
//Endswith
console.log(firstName.endsWith("i"));
//Indexof:
console.log(firstName.indexOf("G"));
//lastindexof:
console.log(firstName.lastIndexOf("u"));

//replace():
let str1 = "I Love JavaScript"
console.log(str1.replace("JavaScript","Python"));
console.log(str1)

//ReplaceAll
let str2 = "cat dog cat"
console.log(str2.replaceAll("cat","lion"));

//slice
console.log(course.slice(0,3))

//substring:
let str3 = "Programming"
console.log(str3.substring(3,8))

//split():
let str4 = "HTML,CSS,JS,REACT"
console.log(str4.split(","))

//charAt:
console.log(str4.charAt(0))

//concat()
let first = "Guna"
let last = "Sri"
console.log(first.concat(" ", last))