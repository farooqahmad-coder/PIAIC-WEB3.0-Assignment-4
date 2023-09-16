

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
//         console.log("I like "+favPiz[index]);
//     };
//     if(favPiz[index]=="Barbq"){
//         console.log("I like "+favPiz[index]);
//     }
//     if(favPiz[index]=="Fajita"){
//         console.log("I like "+favPiz[index]);
//     }
// }
//console.log("I like different flavors of pizza because every flavor has its own taste and i like pizza very much")

// Question#35
// function makeShirt(num:number,msg:string){
// return "Your shirt number is"+" "+num+" and your msg to be printed is "+msg;
// }
// var result=makeShirt(5,"Grow your beard");
// console.log(result);




  




