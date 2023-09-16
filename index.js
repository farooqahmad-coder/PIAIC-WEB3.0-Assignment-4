// class 1
// var userName:string = "Farooq";
// console.log(userName);
// var num1:number=23
// var num2:number=22
// var num:number=num1+num2;
// console.log(num)
// class 3
// var num:number = 10;
// if(num/2){
// console.log("Number is even")
// }
// var age:number=18;
// if(age>=18){
//     console.log("person is eligible")
// }
// else{
//     console.log("not eligible")
// }
// var num:number=10;
// if(num>0){
//     console.log("number is positive")
// }
// else{
//     console.log("number is negative")
// }
// var section:string="A";
// switch (section) {
//     case "A":{
//         console.log("Class timing is 9 to 1");
//         break;
//     }
//     case "B":{
//         console.log("Class timing is 2 to 5");
//         break;
//     }
//         break;
//     default:
//         break;
// }
// var studentsName:string[]=["farooq","ahmad","waqas","ali"];
// studentsName.length;
// function pushNewItemInArray(studentName:string){
//     studentsName[studentsName.length]=studentName;
// }
// pushNewItemInArray("Haider")
// console.log(studentsName);
// studentsName.splice(2,1,"ahsan")
// console.log(studentsName)
// var todos:string[]=["Create Array","Insert Students names","Remove last student"];
// console.log(todos.length)
// if(todos.length%2==0){
// todos.splice(0,1)
// }
// else{
//     todos.splice(0,2)
// }
// console.log(todos);
// var sum=0;
// var list:number[]=[];
// for(var index=0;index<=100;index++){
//     if(index%2===0){
//         sum=sum+index;
//         list.push(index)
//     }
// }
// console.log(sum)
// console.log(list)
// Map same as original length
// Filter same and less than original length
// foreach returns nothing
// Create array of positive numbers using filter method
// let numbers:number[]=[1,2,3,-2,-4];
// let updatedArray:number[]=numbers.filter(element =>element>0)
//  console.log(updatedArray);
// let numbers:string[]=["ali","waqas","ahmad","farooq"];
// let updatedArray:string[]=numbers.filter((element:string) => {
//      if(element.length > 3){
//         return element;
//     }
// })
//  console.log(updatedArray);
// let numbers:number[]=[1,3,2,7,8];
// let updatedArray=numbers.filter(num =>num%2==0);
//  console.log(updatedArray);
// let numbers:number[]=[1,3,2,7,8];
// let updatedArray=numbers.map((num) => num*2);
// console.log(updatedArray);
// Filter Method
// let names:string[]=["farooq","waqas","ali","hayat"];
// let arr=names.filter((name:string)=>name.length>3)
// console.log(arr)
//  ? ternary operator
// let age=19;
// let output=age>18?"cast vote":"cant cast vote";
// console.log(output)
// item.length>3? item:item.length==5?"lorem":"ipsum";
// let todo=[{id:1,text:"farooq"},{id:2,text:"ali"}]
// let addtodo=()=> {
//     todo.push({id:3,text:"waqas"})
// }
// addtodo()
// console.log(todo)
// Object
// let student1={
//     name:"Farooq",
//     rollNo:2002,
//     session:"evening",
// }
// console.log(student1.rollNo)
// console.log(student1["rollNo"])
// let car{company:string,usedCar:boolean,run:number}={
//     company:"honda",
//     usedCar:false,
//     run:2000,
// }
// console.log(car.company);
//  let car={
//     company:"honda",
//     usedCar:false,
//     run:2000,
// }
// type carType={price:number,color:string}
// class Car{
//     price:number=0;
//     color:string="undefined"
//     constructor(){
//         console.log("constructor")
//     }
//     startCar=()=>{
//         console.log("start car")
//     }
// }
// let carA:carType=new Car()
// carA.color="Red";
// // carA.startCar();
// let carB:carType=new Car()
// console.log(carA,carB)
// type carType={company?:string,usedCar:boolean,run:number}
// let car:carType={
//     company:"honda",
//     usedCar:false,
//     run:2000,
// }
// console.log(car.company);
// let cars:carType[]=[{
//     company:"toyota",
//     usedCar:false,
//     run:2000,
// },
// {
//     company:"honda",
//     usedCar:false,
//     run:2000,
// },
// {
//     company:"Audi",
//     usedCar:false,
//     run:2000,
// },{
//     company:"BMW",
//     usedCar:false,
//     run:2000,
// }]
// for(let i=0;i<cars.length;i++){
//     console.log(cars[i].company)
// }
// console.log(cars[0].company)
// function twoSum(a:number,b:number){
//     return a + b;
// }
// let sum=twoSum(3,5);
// console.log(sum)
// let arr=[{name:"potato",quantity:10},{name:"tomato",quantity:"5"}]
// let arr1=arr.map((data) =>{
//     let arr2=arr.name=="potato"?{name:"potato",quantity:8}:data;
// })
// Reduce Method
// let arr:number[]=[2,4,6,8];
// let arr2=arr.reduce((a,b)=>{
//     return a+b;
// })
// console.log(arr2)
// Removing negative numbers from array
// let numbers:number[]=[1,-2,-3,5,2,-9];
// for(let index=0;index<numbers.length;index++){
//     if(numbers[index]<0){
//         numbers.splice(index,1)
//         index--;
//     }
// }
// console.log(numbers)
// Simple Function
// function sumOfTwo(a:number, b:number){
//     var sum = a + b ;
//     console.log(sum)
// }
// sumOfTwo(2,3);
// Arrow Function
// var sayHell=(name:string,age:number)=>console.log("Hello"+" "+name+" "+age);
// sayHell("Farooq",28)
// sayHell("waqas",17)
// var sayHell=(name:string='farooq',age:number=28)=>console.log("Hello"+" "+name+" "+age);
// sayHell()
// var sayHell=(name:string,age:number)=>name+" "+age
// let say=sayHell("Farooq",28)
// console.log(say)
// var sayHell=(name:string,age:number)=>name+" "+age;
// console.log(sayHell("farooq",28))
// Assignment
// let arr=[2,3,5,6,8,9,10];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         sum=sum+arr[i];
//     }
// }
// console.log(sum)
// let arr=[2,3,5,6,8,9,10];
// let newArr=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)
// let arr=[2,3,5,6,8,9,10];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         arr.splice(arr[i],1)
//     }
// }
// console.log(arr)
// let area= (radius:number)=> radius*radius*3.1416;
// console.log(area(7))
// function area(radius:number){
//     return radius*radius*3.1416;
// }
// console.log(area(7))
// let arr=[2,5,8,10,15,20,7,3];
// let num=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>num){
//         num=arr[i];
//     }
// }
// console.log("Largest number is"+" "+num)
// 1 - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
// let arr = [1, 2, 3, 4, 5, 6,7,8];
// let index = 2;
// let arrValue = 20;
// function createArray(arr:number[], index:number, arrValue:number) {
//     arr.splice(index, 0, arrValue);
//     return arr;
// }
// arr= createArray(arr, index, arrValue);
// console.log(arr);
//3 - Write a program that uses a while loop to print the first 25 integers.
// let num = 0;
// while(num < 26) {
//     console.log(num);
//     num++;
// }
// 4 - Write a program that uses a while loop to print the first 10 even numbers. 
// let integer = 1;
// let increment = 1;
// while (increment < 21) {
//     if (integer % 2 == 0) {
//         console.log(integer);
//         increment++;
//     }
//     integer++;
// }
// 5 - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1);
//     }
// }
// var num = 5;
// var result = factorial(num);
// console.log("Factorial of ".concat(num, " is ").concat(result));
// 6 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array. 
// var numbers = [1, -2, 3, -4, 5, -6];
// var filteredNumbers = numbers.filter(function (number) { return number >= 0; });
// console.log('Original array:', numbers);
// console.log('Array with negative numbers removed:', filteredNumbers);
// 7- Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array. 
// function calculateSum(numbers) {
//     var sum = 0;
//     var i = 0;
//     while (i < numbers.length) {
//         sum += numbers[i];
//         i++;
//     }
//     return sum;
// }
// var numbersArray = [1, 2, 3, 4, 5];
// var sumOfArray = calculateSum(numbersArray);
// console.log("The sum of the numbers is: ".concat(sumOfArray));
// 8 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
// function celsiusToFahrenheit(celsiusTemperatures) {
//     var fahrenheitTemperatures = [];
//     var i = 0;
//     while (i < celsiusTemperatures.length) {
//         var celsius = celsiusTemperatures[i];
//         var fahrenheit = (celsius * 9 / 5) + 32;
//         fahrenheitTemperatures.push(fahrenheit);
//         i++;
//     }
//     return fahrenheitTemperatures;
// }
// var celsiusTemperatures = [0, 10, 20, 30, 40];
// var fahrenheitTemperatures = celsiusToFahrenheit(celsiusTemperatures);
// console.log('Celsius Temperatures:', celsiusTemperatures);
// console.log('Fahrenheit Temperatures:', fahrenheitTemperatures);
// function celsiusToFah(celsius:number){
//     let fah=[];
//     var fahrenheit=(celsius*9/5)+32;
//     return fahrenheit;
// }
// let celsiusArr:number[]=[2,4,6,8,9];
// let fah=celsiusToFah(celsiusArr)
// console.log(fah)
// let arr:number[]=[];
// function insertVal(num1:number,index:number){
// return arr.splice(index,0,num1);
// }
// var num2=insertVal(2,0)
// console.log(num2)
// console.log(arr)
// import sum from "./sum.ts";
// import {d} from "./Sub.ts"
// async function doSome(){
//     console.log("Hello");
// };
// setInterval(doSome,10000);
// setTimeout(doSome,5000);
//  console.log("Farooq");
//  await doSome();
//  let clearInterval;
//  clearInterval=setInterval(function doSome(){
//     console.log("Hello");
// },10000)
// clearInterval;
//  async function doSomething(){
//     console.log("Hello");
// };
// doSomething()
// setTimeout(()=>{
//     console.log("Hello")
// },10000)
// function asyncFunction(resolve:any,reject:any){
// if(false){
//     resolve;
// }
// else{
//     reject;
// }
// }
// var result=new Promise(asyncFunction)
// result.then((success)=>{
//     console.log("success",success)
// })
// .catch((fail)=>{
//     console.log("fail",fail)
// })
// Assignment 16 september
// Question#2
// var person="Farooq";
// console.log("Hello"+" "+person+",Would you like to learn some python")
// Question#3
// var person1="farooq";
// let step1=person1.charAt(0).toUpperCase()
// let step2=person1.substring(1).toLowerCase()
// console.log(person1.toUpperCase())
// console.log(person1.toLowerCase())
// console.log(step1+step2)
// Question#4
// console.log('Albert Einstein once said," A person who never made a mistake never tried anything new."')
// Question#5
// var person="Albert Einstein";
// var qoute='"A person who never made a mistake never tried anything new."';
// console.log(person+" once said,"+" "+qoute)
// Question#7
// var num1=5;
// var num2=3;
// console.log(num1+num2)
// var num3=12;
// var num4=4;
// console.log(num3-num4)
// var num5=48;
// var num6=6;
// console.log(num5/num6)
// var num7=2;
// var num8=4;
// console.log(num7*num8)
// Question#8
// console.log(5+3)
// console.log(11-3)
// console.log(4*2)
// console.log(48/6)
// Question#9
// var num=1;
// console.log("Your favourite number is"+" "+num)
// Question#10  
// var num=1;
// console.log("Your favourite number is"+" "+num)// Farooq Ahmad 28 Showing favourite number
// var person="Albert Einstein";
// var qoute='"A person who never made a mistake never tried anything new."';
// console.log(person+" once said,"+" "+qoute)  // Farooq Ahmad 28 printing famous qoute of a famous person
// Question#11
// var names:string[]=["Farooq","Ali","Waqas"];
// for(var i=0;i<names.length;i++){
//     console.log(names[i])
// }
// Question#12
// var names:string[]=["Farooq","Ali","Waqas"];
// var msg="Good Luck";
// for(var i=0;i<names.length;i++){
//     console.log(names[i]+" "+msg)
// }
// Question#14
// var names=[{name:"Farooq",condition:"living"},{name:"waqas",condition:"living"},{name:"ali",condition:"deceased"}];
// var msg="You are invited";
// for(var i=0;i<names.length;i++){
//     if(names[i].condition=="living"){
//         console.log(names[i].name+" "+msg)
//     }
// }
// Question#15.1
// var names=[{name:"Farooq",condition:"living"},{name:"waqas",condition:"living"},{name:"ali",condition:"deceased"}];
// var msg="You are invited";
// for(var i=0;i<names.length;i++){
//     if(names[i].condition=="living"){
//         console.log(names[i].name+" "+msg)
//     }
//     if(names[i].condition=="deceased"){
// console.log("Ahmad you are invited")
//     }    
// }
// Question#15.2
// var names=[{name:"Farooq",condition:"living"},{name:"waqas",condition:"living"},{name:"ali",condition:"deceased"}];
// var msg="will not be able to come";
// for(var i=0;i<names.length;i++){
//     if(names[i].condition=="deceased"){
//         console.log(names[i].name+" "+msg)
//     }
// }
// Question#16.1
// var names=[{name:"Farooq",condition:"living"},{name:"waqas",condition:"living"},{name:"ali",condition:"living"}];
// var msg="you are invited";
// for(var i=0;i<names.length;i++){
//     if(names[i].condition=="living"){
//         console.log(names[i].name+" "+msg)
//     }
// }
// console.log("I foung a bigger dining table")
// Question#16.2
// var names:string[]=["farooq","ahmad","ali","abdul","azan","sami"];
// names.unshift("waqas")
// console.log(names)
// Question#17.1
// var names:string[]=["farooq","ahmad","ali","azan"];
// if(names.length>2){
//     console.log("I can invite only 2 persons because i did not recieve my table yet ")
// }
// Question#17.2+17.3+17.4
// var names:string[]=["farooq","ahmad","ali","azan"];
// for(var i=0;names.length>2;i++){
//     console.log("I am sorry"+" "+names[i]+" i can not invite you");
//     names.splice(i,1)
// }
// for(var a=0;a<names.length;a++){
//     console.log(names[a]+" Yor still are invited")
// }
// for(var b=0;b<names.length;b--){
//     names.splice(b,1)
//     b++;
// }
// console.log(names)
// Question#19
// var names:string[]=["farooq","ahmad","ali","abdul","azan","sami"];
// console.log("Total number of people i am inviting to dinner is"+" "+names.length)
// Question#20
// var names:string[]=[];
// names.splice(0,0,"Pakistan","Afghanistan","india","america","china","iran")
// console.log(names)
// Question#25
// var alienCol="Green";
// if(alienCol=="Green"){
//     console.log("Player has earned 5 points")
// }
// else{
//     console.log()
// }
// Question#26
// var alienCol="Green";
// if(alienCol=="Green"){
//     console.log("Player has earned 5 points")
// }
// else{
//     console.log("Player has earned 10 points")
// }
// var alienCol="Red";
// if(alienCol=="Green"){
//     console.log("Player has earned 5 points")
// }
// else{
//     console.log("Player has earned 10 points")
// }
// Question#27
// var alienCol:string="Green";
// if(alienCol=="Green"){
//     console.log("Player has earned 5 points")
// }
//  else-if(alienCol=="Red"){
//     console.log("Player has earned 10 points")
// }
//  else-if(alienCol=="yellow"){
//     console.log("Player has earned 15 points")
// }
// else{
//     console.log()
// }
// Question#28
// var age:number=28;
// if (age<2) {
//     console.log("Person is a baby")
// }
// else-if (age==2&&age<4) {
//     console.log("Person is a toddler")
// } 
// else-if (age==4&&age<13) {
//   console.log("Person is a kid")  
// } 
// elsfave-if (age==13&&age<20) {
//     console.log("Person is a teenager")  
//   } 
//   else-if (age==20&&age<65) {
//     console.log("Person is a adult")  
//   } 
//   else{
//     console.log("Person is an elder")  
//   } 
// Question#29
// var favFruit:string[]=["Mango","Banana","Grapes","Apple","Melon"];
// for (let index = 0; index < favFruit.length; index++) {
//     if(favFruit[index]=="Mango") {
//         console.log("You like"+" "+favFruit[index])
//     }
//     else-if(favFruit[index]=="Banana") {
//         console.log("You like"+" "+favFruit[index])
//     }
//     else-if(favFruit[index]=="Grapes") {
//         console.log("You like"+" "+favFruit[index])
//     }
//     else-if(favFruit[index]=="Apple") {
//         console.log("You like"+" "+favFruit[index])
//     }
//     else-if(favFruit[index]=="Melon") {
//         console.log("You like"+" "+favFruit[index])
//     }
//     else{
//         console.log("You like nothing")
//     }   
//}
// Question#30
// var users:string[]=["Admin","Farooq","Ahmad","Ali","Waqas"];
// var userName="Admin";
// if(userName=="Admin"){
//     console.log("Hello Admin")
// }
// else{
//     console.log("Hello Eric")
// }
//Question#32
// var curUsers:string[]=["Farooq","Waqas","Ali","Ahmad","Abdul"];
// var newUsers:string[]=["Farooq","Waqas","Adil","Haider","Habib"];
// for(var index=0;index<curUsers.length;index++){
//     for(var a=0;a<newUsers.length;a++){
//         if(curUsers[index]==newUsers[a]){
//             console.log("You have to enter new user name")
//             break;
//         }
//         else{
//             console.log("user name is available")
//             break;
//         }
//     }
//     break;
// }
// Question#34
// var favPiz:string[]=["Malai boti","Barbq","Fajita"];
// for(var index=0;index<favPiz.length;index++){
//     if(favPiz[index]=="Malai boti"){
//         console.log("I like "+favPiz[index])
//     }
//     if(favPiz[index]=="Barbq"){
//         console.log("I like "+favPiz[index])
//     }
//     if(favPiz[index]=="Fajita"){
//         console.log("I like "+favPiz[index])
//     }
// }
//console.log("I like different flavors of pizza because every flavor has its own taste and i like pizza very much")
// Question#35
function makeShirt(num, msg) {
    return "Your shirt number is" + " " + num + " and your msg to be printed is " + msg;
}
var result = makeShirt(5, "Grow your beard");
console.log(result);
export {};
