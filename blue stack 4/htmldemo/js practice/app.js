// var a = 3;
// var b = 5;
// var c = a+b;
// alert(c);

// var a = 3;
// var b = 5;
// var c = a*b;
// alert(c);

// var a = 3;
// var b = 5;
// var c = a-b;
// alert(c);

// var a = 3;
// var b = 5;
// var c = a/b;
// alert(c);

// var a = 3;
// var b = 5;
// var c = a%b;
// alert(c);

// var a = 5;
// var b = a++ + ++a - a-- - --a;
// alert(b);

// var a = 600;
// var b = "total cost of ticket to a movie is "  + a*5;
// alert(b);

// var a = 4;
// var i = 0; 
// for(i=a; i< 4 + "*" +"1" +"=" 4; a++);
// console.log(i)

// var a = prompt("price of item 1 is 650");
// var b = prompt("quanatity of item 1 is 3");
// var c = prompt("price of item 2 is 100");
// var d = prompt("quantity of item 2 is 7");
// var e = prompt("shipping charges 100");

// var f = (a + b*3 + c*100 + d*7 + e);
// alert("f");

// var a = +prompt("enter total marks");
// var b = +prompt("enter the obtained marks");
// var c = ((a / b) * 100);
// alert(c);

// var a = "10 dollars";  //10 dollar is = 1048;
// var b = "25 riyals";   //25 riyals is = 700;
// var c = 1048 + 700;
// document.write("total currency in pkr "  + c );

// var a = 5 * 10 / 2;
// document.write(a);

// var a = +prompt("enter age");
// alert("enter current age   "  +  a );
// var b = prompt("enter dob");
// alert("enter the date of birth  "  +  b);
// var c =  a - b;
// alert("your current age is   "  +  c);

// var a = 2;
// var b = 1;
// var c = --a;
// var d = --a - --b;
// var e = --a - --b + ++b;
// var f = --a - --b + ++b + b--;
// var res = --a - --b + ++b + b--;
// console.log(res);

// var num = prompt("Enter Number", "0") //prompt user to enter the number
// var num = parseInt(num); //parse the num to number
// var i = 0;
// document.write('<table border="1" cellspacing="0">');
// for (i = 1; i < 10; i++) {
//   document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>")

// var num = prompt("enter number");
// var num = parseInt(num);
// var i = 0;
// document.write('<table border = "1" cellspacing = "0">')
// for(i = 1; i < 10; i++){
//     document.write( + num + "x" + i + "=" + num * i + "</tr><td>")
// }


// var a = prompt("enter sub name 1");
// var b = prompt("enter sub name 2");
// var c = prompt("enter sub name 3");
// var tm1 = 100;
// var tm2 = 100;
// var tm3 = 100;
// var tm = +prompt("enter total marsk");
// var obm1 = +prompt("enter the marks1 you get")
// var obm2 = +prompt("enter the marks2 you get")
// var obm2 = +prompt("enter the marks3 you get")
// var otm = +prompt("enter obtained marks")
// document.write('<table border = "1" cellspacing = "0">')

// var per = (otm  / tm) * 100;
// document.write(per);

// var cityName = prompt("enter the city name");
// alert("welcome to the city of lights  ");

// var gender = prompt("enter yours gender");
// if(gender === "male"){
//     alert("good morning sir");
// }
// else{
//     alert("good morning madam");
// }

// var signal = prompt("colour of traffic signal")
// if(colour === "red"){
//     alert("must stop");
// }
// if(colour === "yellow"){
//     alert("ready to move");
// }
// else(colour === "green"){
//     alert("move on");
// }

// var fuel = +prompt("enter remaining fuel");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car")
// }
// else{
//     alert("your fuel is okay")
// }

// var a = +prompt("guess the number")

// if(a === 7){
//         alert("bingo your num is correct")
// }
// else{
//     alert("close to the secret number")
// }


// var number = +prompt("enter the number")
// if(number / 3){
//     alert("the number is divisible by 3")
// }
// else{
//     alert( "not divisible by 3")
// }

// var a = +prompt("enter the number")
// if(a === ){
//     alert("your number is even")
// }
// else{
//     alert("your number is odd")
// }

// program to check if the number is even or odd
// take input from the user

// const number = prompt("Enter a number: ");

// //check if the number is even
// if(number % 2 == 0) {
//     console.log("The number is even.");
// }

// // if the number is odd
// else {
//     console.log("The number is odd.");
// }

// var number = prompt("enter the number");
// if(number %2 == 0){
//     console.log("the num is even")
// }
// else {
//     console.log("the number is odd")
// }

// var T = prompt("enter the temperature1");
// if(T > 40){
//     console.log("it is too hot outside");
// }
// else if(T > 30){
//     console.log("The Weather today is Normal")
// }
// else if(T > 20){
//     console.log("todays weather is cool")
// }
// else if(T > 10){
//     console.log( "OMG! Today weather is so cool")
// }
// else {
//     console.log("incorrect data")
// }

// // program for a simple calculator

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);

// var number1 = +prompt("enter first number");
// var operator = prompt("enter operator( + , - , / , *):");
// var number2 = +prompt("enter second number");

// if(operator == "+"){
//     result = number1 + number2;
// }
// else if(operator == "-"){
//     result = number1 - number2;
// }
// else if(operator == "/"){
//     result = number1 / number2;
// }
// else {
//     result = number1 * number2;
// }

// // console.log(`${number1} ${operator} ${number2} = ${result}`);
// console.log('${number1} ${operator} ${number2} = ${result}');

// var a = prompt("enter the integar")
// if(a == 10 || a == 20){
//     console.log("integar is larger")
// }
// else if(a == 5 && a == 5){
//     console.log("integar is same")
// }
// else{
//     console.log("integar is incorrect")
// }

// var a = +prompt("enter the number")
// if(a > 0){
//     console.log( "number is positive")
// }
// else if(a < 0){
//     console.log( "number is negative")
// }
// else{
//     console.log("number is zero")
// }

// var correctPass = 123456;
// var userPass = +prompt("enter the pass");


// if(userPass == ""){
//     console.log("please enter your password")
// }
// else if(userPass === correctPass){
//     console.log("Correct! The password you entered matches the original password")
// }
// else{
//     console.log("incorrect password")
// }

// var  greeting ;
// var hour = 13;
// if (hour < 18){
//     greeting = "Good day";
//     console.log("greeting good day");
// }
// greeting = "Good day";
// else{
//     console.log("good evening")
// }

// var time = +prompt("enter the time you want");
// if(time < "2400" || time++){
//     console.log("it 12 am ")
// }
// else if(time < "1200" || time++){
//     console.log("it 12  pm")
// }
// else {
//     console.log("your watch is expired")
// }

// var date = new Date("February 04, 2011 19:00:00");
// var options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   hour12: true
// };
// var timeString = date.toLocaleString('en-US', options);
// console.log(timeString);


// var a = [];
// var b = [];
// var d = 8;
// var q = ["SSC", "HSC", "BCS","BS", "BCOM", "MS","PhD","MPHIL"]
// for(var i=0; i<=q; i++){
//     document.write(length.q)
// }

// var arr1 = ["maha","anus","ahmed"];
// var arr2 = 500;

// if(arr1 === "maha" || (500/200) * 100){
//     console.log("socre")
// }


// var a = [];
// var b = [
//     [1,3,5,4],
//     [2,4,3,1],
//     [5,7,4,8],
//     [5,6,3,2],
// ];

// console.log(b)

// var a = 0;
// for(a = 1; a<=10; a++){
//     console.log(a)
// }

// var a = prompt("enter the number");
// for(var b=1; b <=10; b++){
//     var result = b * a;
//     console.log('${a} * ${b}  = ${result}')
// }

// program to generate a multiplication table

// take input from the user
// const number = parseInt(prompt('Enter an integer: '));

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     //  multiply i with number
//     const result = i * number;

//     // display the result
//    console.log(`${number} * ${i} = ${result}`);
// }

// var number = parseInt(prompt("enter the number"));
// var range = parseInt(prompt("enter the range"));

// for(var a = 1; a<=Range; a++){
//     var result = a * number;
//     // console.log("${number} *${a} =${result}");
//     console.log(`${number} * ${a} = ${result}`);
// }

/* program to generate a multiplication table
upto a range */

// take number input from the user
// const number = parseInt(prompt('Enter an integer: '));

// // take range input from the user
// const range = parseInt(prompt('Enter a range: '));

// //creating a multiplication table
// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }

// var fruit = new arr("apple", "banana", "mango", "orange", "strawberry");
// var len = fruit.length;

// for(var i=0; i<length; i++){
//     console.log(fruit[i]);
// }
    
// var arr = new Array("Apple", "Orange", "Mango", "Banana", "Guava");

// var len = fruits.length;	//no. of elements of the array

// //print elements of the array
// for (var i = 0; i < len; i++) {
// 	console.log(fruits[i]);
// }


// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var f = a.indexOf;
// var b = prompt("enter the food name");

// for(var i = 0; i < f; i++){
//     console.log(i + "cake has been found");
// }

// var firtsName = prompt("enter the name");
// var lastName = prompt("enter the last name");

// var fullName = firtsName  +   lastName;
// console.log(fullName);

// var a = prompt("enter the phone");

// console.log("my favourit phone is  "  +  String.length);


// var a = "pakistani";
// var b = indexof("n")

// console.log(b)

// var a = +prompt("enter the number");
// console.log(Math.random(a));


// var a = +prompt("enter the number");
// console.log(Math.round(a));

// var a = +prompt("enter the number");
// console.log(Math.floor(a));


// var a = +prompt("enter the number");
// console.log(Math.ceil(a));

// var a = +prompt("enter the number");
// console.log("the absoloute value of  " +  Math.abs(a));

// var a = +prompt("enter the number");
// var b = +prompt("enter the number");
// console.log("random dice value  "  +  Math.abs(a));
// console.log("random dice value  "  + Math.abs(b));

// var a = "head";
// var b = "tail";

// console.log("random coin value  "  +  Math.random(a))
// console.log("random coin value  "  + Math.random(b))

// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     console.log("0 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     console.log("1 <br> Random Coin Value: Tails")
// }

// var randomNum ;
// randomNum = Math.ceil(Math.random() * 100);
// document.write("Random number between 1 and 100: " + randomNum);


// var randomNum = Math.ceil(Math.random() * 100);
// console.log("random number between 1 and 100:  "  + randomNum);

// var a = +prompt("enter your weight in kilograms");
// var weight = Math.floor(Math.ceil()  * 2.2046);

// console.log(weight);

// var randomNum = prompt("enter secret number");
// var secretNum = Math.random() * 10;

// console.log("congratulation you got secret number  "  +  secretNum);

// var date = new Date();
// console.log(date);

// var date = new Date();
// var month = ["jan","feb","march","apr","may","june","july","august","sep","oct","nov","dec"];
// var n = month[date.getMonth()];
// console.log(n);


//  var date = new Date();
//  var weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
//  var n = weekday[date.getDay()];
//  console.log("today is  " + n)

// var today = "";
// if(today === "saturday" || "sunday"){
//     console.log("its fun day");
// }
// else{
//     console.log("its not fun day");
// }
// var days = "16";
// if(days < "16"){
//     console.log("first fifteen days of the month");
// }
// else{
//     console.log("last days of the month");
// }

// var a = new Date();
// console.log(a);

// var b = a.setMinutes(a.getMinutes());
// console.log(b);

// var c = a.setMilliseconds(a.getMilliseconds());
// console.log(c);

// var a = new Date();
// var time = "";
// if(time >=12){
//     console.log("its am");
// }
// else if(time <= 12){
//     console.log("its pm");
// }
// else {
//     console.log("your watch is expired");
// }

// var a = new Date();
// var b = a.setDate(a.getDay());
// alert(" 1st Ramadan was on June 18, 2015 " +  a , b);


// //new Date(year, month, day, hours, minutes, seconds, milliseconds)
// var a = new Date(1776, 6, 4, 12, 30, 0, 0);

// // Timestamp method
// var b = new Date(-6106015800000);

// // Date string method
// var c = new Date("January 31 1980 12:30");

// console.log(a,b,c)

// var a = new Date(07-03-2021);
// var b = new Date(03-07-1998);

// console.log(b-a);

    // var dob = new Date("03/07/1998");
    // //calculate month difference from current date in time
    // var month_diff = Date.now() - dob.getTime();
    
    // //convert the calculated difference in date format
    // var age_dt = new Date(month_diff); 
    
    // //extract year from date    
    // var year = age_dt.getUTCFullYear();
    
    // //now calculate the age of the user
    // var age = Math.abs(year - 1970);
    
    // //display the calculated age
    // document.write("Age of the date entered: " + age + " years");


// var consumerName = "anus ahmed";
// var date = new Date();
// var month = date.getMonth();
// var unit = Math.floor(639);
// var charges = Math.ceil(457);

// var netamount = unit * charges;
// var latepayment = 650;
// var grossamt = netamount + latepayment;

// console.log(consumerName , date , month , unit , charges , netamount , grossamt );


// function date(){
//     var a = new Date();
//     var b = a.getTime();
//     console.log(a , b)
// }
// date()

// function fullName(){
//     var firstName = "anus";
//     var secondName = " ahmed"
//     console.log(firstName  +     secondName );
// }
// fullName()


// var a = +prompt("enter the number")
// var b = +prompt("enter the number 2")

// function add(){
//     return a+b;
// }
// add()


// var number1 = prompt("enter any number");
// var operator = prompt("enter opeartor");
// var number2 = prompt("enter  any number 2");


// function calc (){
//     return {
//          result = number1 + operator + number2;
         
//     }

// }

// calc();

// function sumOfSquares(num) {
//     var i;

//     for (i=0,i<=num,i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
// }
// console.log("sum")

// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);


// var element;
// element = document;
// console.log(element);


// var element;
// // element = document.all;
// element.document.all[8];
// console.log(element);



// var element;
// element = document.head;
// console.log(element);


// var element;
// element = document.body;
// console.log(element);


// var element;
// element = document.links;
// console.log(element);


// var element;
// element = document.images;
// console.log(element);


// var element;
// element = document.doctype;
// console.log(element);


// var element;
// element = document.getElementsByClassName("jani")[0];
// console.log(element);


// var element;
// element = document.getElementById("main").getAttributeNode("id").value;
// console.log(element);



// var element;
// element = document.getElementById("main").attributes;
// console.log(element);

// var element;
// element = document.getElementById("main").innerHTML = "this is my name"
// console.log(element);

// var element;
// element = document.getElementsByClassName("maha").innerHTML = "this is my name"
// element = document.getElementsByClassName("maha").attributes[1].value = "kinza"
// element = document.getElementsByClassName("maha").getAttribute("id");

// console.log(element);


// var element;
// element = document.querySelector("#main").innerHTML = "this is my name"
// element = document.querySelector(".list")
// console.log(element);

// var element;
// document.querySelector("#nav").classList = "maha"
// document.querySelector("#nav").classList;
// console.log(element);


// var arr = [10,20,30,40,50];
// console.log(arr);

// var arr = new Array (10,"anus","sara",true,null);
// for(a= 0; a<=4; a++){
//     console.log( arr[a]);
// }


// var arr = new Array(3);

// for(var a = 0; a<3; a++){
//     arr[a] = prompt("enter the value  ");
// }
// console.log(arr);

// var arr = [
//     ["anus" , 656, "male" ,"bscs"],
//     ["maha" , 682, "female" , "bscs"],
//     ["kinza", 677, "female", "bscs"],
//     ["ahmed" , 650,"male" ,"bscs"]
// ];
// document.write("<table border = '1px'>")
// for(var a = 0; a<4; a++){
//     document.write("<tr>");
//     for(var b = 0; b < 4; b++){
//         document.write("<td>" + arr[a][b] + "</td>");
//     }
//     document.write("</tr>");

//     document.write("</table");

//     document.write("<br>")
// }

// var arr = ["anus","maha","kinza","ahmed"];
// // document.write(arr + "<br>");
// // var b = arr.slice(1,4);
// arr.push("jani","bhai")
// console.log(arr)

// var arr = ["anus","maha","kinza","ahmed"];
// arr.unshift("jani");
// console.log(arr);

// var arr = ["anus","maha","kinza","ahmed"];
// arr.shift();
// console.log(arr);


// var arr = ["anus","maha","kinza","ahmed"];
// arr.splice(1 , 1)
// console.log(arr);


// var arr = ["anus" , "maha", "kinza" , "ahmed"];
// document.write(arr + "<br>");
// arr[1] = "choudary";
// document.write(arr + "<br>");
// arr[2] = "anas bhai";
// document.write(arr + "<br>")
// arr[3] = "laiba bhabi";
// document.write(arr + "<br>")
// delete arr[1];
// document.write(arr + "<br>")

// document.write(arr[1] + "<br>")

// var arr = ["maha","kinza","ahmed","huma"];
// document.write(arr + "<br>");
// arr.sort()
// document.write(arr + "<br>")


// document.write(arr + "<br>");
// arr.reverse();
// document.write(arr + "<br>")

// var arr = ["maha","kinza","ahmed","huma","maha"];
// document.write(arr + "<br>");
// var b = arr.indexOf("abba", 3);
// document.write(b + "<br>");

// var arr = ["maha","kinza","ahmed","huma","maha"];
// document.write(arr + "<br>");
// var b = arr.lastIndexOf("huma", 2)
// document.write(b + "<br>");

// var arr = ["maha","kinza","ahmed","huma","maha"];
// var b = arr.includes("AHMED");
// document.write(b)


// var ages = [10,16,17,19,0];
// document.write(ages + "<br>")
// var b = ages.filter(checkAdult);
// document.write(b + "<br>")
// function checkAdult(age){
//     return age>=18;
// }

// var arr = ["anus","maha","kinza","ahmed"];
// var b = arr.toString();
// document.write(arr)

// var arr = ["anus","maha","kinza","ahmed"];
//  var b = arr.fill("abba");
//  document.write(arr)


// var arr = ["anus","maha","kinza","ahmed"]
// arr.forEach(function(value ,index){
//     document.write(index + " : " + value + "<br>")
// })

// var a = { 
//     name : "anus",
//     fname : "raees ahmed",
//     rollno : 656,
//     dep : "bscs",
//     favMovies : ["dhoom","sholay","hum"].

//     salary : function(){
//         return 25000;
//     }
       
// }
// console.log(a );
// console.log(a.salary());


// var person = new Object();
// person.fname = "anus";
// person.sname = "ahmed";
// person.age = 22;

// console.log(person.age)

// var arr = [
//     {naam : "anus", age : 12},
//     {naam : "raees ahmed" ,age: 55},
//     {name: "bscs", year : 2023},
// ];

// console.log(arr);
// for(a=0; a<arr.length; a++){
//     document.write(arr[a].naam + " " + arr[a].age  + "<br>")
// }

// const a = [10,20,30,40];
// a[1] = 40;
// a[2] = 60;
// a[3] = 70;
// console.log(a)

// const a = {
//     name : "anus",
//     age : 22
// };

// a.name = "maha";
// console.log(a)

// function hello(){
//     console.log("mazbooti important hai")
// }
// function hey(){
//     console.log("kiya kaam hai")
// }
//  function laiba(){
//      console.log("kala paad")
// }

// function huda(){
//     console.log("cheez khila")
// }

// huda();
// laiba();
// hey();
// hello();

// function sum(a,b){
//     var c = a+b;
//     console.log("this is sum "  + c)
// }

// sum(4,6);

// function name(fname = "anus " , lname = "raees ahmed"){
//     console.log("hello " + fname + lname);
// }
// name("maha ", "mansoor")

// function name(fname , lname){
//     console.log("hello " + fname + lname);
// }
// name("maha ", "mansoor")



// fuction hello(math,sci,eng){
//     var s = math + sci + eng;
//     return s;

// }

// function per(tt){
//     var per = tt/300 * 100;
//     document.write(per);

// }
// var total = hello(55,67,98);
// per(total);

// function ret(){
//     var a = 10 + 20 + 30;
//     return a;
//     console.log(a)
// }

// ret()


// function jani(){
//     document.write("hello");
// }

// var a = 10;
// document.write("<ul>")
// while (a>=1){
//     document.write("<li>" + a + "hello mona " + "</li>");
//     a = a - 1;
// }
// document.write("</ul>")

// var a = 1;
// while (a<=50){
//     document.write("hello jani" + "<br>");   
//     a = a+10; 
// }

// var a = 1;
// do {
//     document.write("hello jani" + " <br>")
//     a++;
// }while (a<=10)

// var element;
// element = document.getElementById("head");
// console.log(element)


// var element;
// element = document.getElementById("head");
// console.log(element);

// var element;
// element = document.doctype
// console.log(element)

// var element;
// element = document.URL
// console.log(element)


// var element;
// element = document.domain;
// console.log(element);


// var element;
// element = document.getElementsByClassName("form")[1]
// console.log(element)


// var element;
// element = document.getElementsByTagName("p")[0]
// console.log(element)

// var element;
// document.querySelector("#head").innerHTML = "<h1>wow</h1>";
// element = document.querySelectorAll("#head h1");
// console.log(element);

// var element;
// document.querySelector("#head").
// console.log(element);

// var a = document.getElementById("head").children[0].
// console.log(a);

// var a = document.getElementById("form").previousElementSibling
// console.log(a)

// var a = document.createTextNode("p")
// console.log(a)

// var a = document.createTextNode("hey");

// var b = document.createTextNode("this is comment");

// document.getElementById("head").appendChild()
// a.appendChild(b);
// console.log(a);
// console.log(b);

// var newElement = document.createElement("h2");
// var newText = document.createTextNode("this is just text");

// newElement.appendChild(newText);


// var target = document.getElementById("head");
// var newElement = "<h2>this is heading</h2>";
// target.insertAdjacentHTML("beforeend",newElement);

// var target = document.getElementById("head");
// var newText = "this is heading";
// target.insertAdjacentText("afterend",newText);


// var newElement = document.createElement("li");
// var newText = document.createTextNode("WOW NEW TEXT");
// newElement.appendChild(newText);
// var target = document.getElementById("list");
// var oldElement = target.children[10];

// target.removeChild(oldElement)


// var target = document.getElementById("list1").children[0];
// var copyElement = target.cloneNode(true);

// console.log(copyElement)
// document.getElementById("list2").appendChild(copyElement);

// var pelement = document.getElementsById("head");
// var target =  document.getElementById("abc");

// var find = pelement.contains(target);

// console.log(find);

// var target = document.getElementById("head");

// var find = target.hasAttribute("class");

// console.log(find);

// var target = document.getElementById("head");

// var find = target.hasChildNodes();

// console.log(find);

// var target1 = document.getElementById("list1").children[0]

// var target2 = document.getElementById("list2").children[0]
// var equal = target1.isEqualNode(target2);

// console.log(equal)

// function focus(element){
//     element.style.background = "lime";
// }


// var a = 0
// setInterval(anim,1000)

// function anim(){
//     a = a + 10;
//     var target = document.getElementById("head")
//     target.id = a + 'px';
// }

// var iheight = window.innerHeight;
// console.log(iheight);

// var oheight = window.outerHeight;
// console.log(oheight);

// function open(){
// window.open();
// }
// open()

// var a = "hello";
// var a = "world";
// a = "duniya"

// console.log(a);

// let a = "hello";
// a = "world";
// console.log(a);

// const a = "hello";
// console.log(a);

// if(1 == 1){
//     const a = "hello";
//     console.log(a);
// }
// console.log(a);

// for(const a = 0; a <= 10; a++){
//     document.write(a + "<br>")
// }
// console.log(a)


// let a = "hello world";
// document.write("jani " + a);

// let a = "hello world";
// let marks = 350;
// document.write(`jani ${a} yours marks ${marks}`);


// let fName = "anus";
// let lname = "ahmed";

// function fullname(fName,lname){
//     return `${fName} ${lname}`;
// }

// let hello = `hello ${fullname(fName,lname)}`;
// document.write(hello);

// let welcome = (name,age) => {`hello and welcome ${name} - ${age}`;
// }
// console.log(welcome("anus ahmed", 25))

// function sum(name,course, ...args){
//     document.write(`hello ${name} : of ${course}`);
//     let sum = 0;
//     for(var i in args){
//         sum += args[i];
//     }
//     document.write(sum + "<br>");

// }
// sum("anus ahmed","bscs",20,30,40);
// sum("maha","ba",20,30,40,50);
// sum(20,30)


// function sum(names,...args){
//     console.log(arguments);
// }
// document.write(`hello ${NAME}:`);

// let sum = 0;
// for(let i in args){
//     sum += args[i];
// }
// document.write(sum);
// }

// var arr = [20,30,40];

// sum("hello anus",...arr);

// var arr1 = [10,20,30,40];
// var arr2 = [100,200];
// var arr3 = [1000,...arr1, ...arr2,121]

// console.log(arr3)

// let name = "yahoo baba";

// let obj = {
//     name,
//     course,
// };

// console.log(obj);

// let  n = "student";

// var obj = {
//     [n + "name"] : "anus ahmed",
//     course : "bscs"
// };
// console.log(obj);
// console.log(obj.name);

// let n = "my";

// var obj = {
//     [n + "office"] : "worker",
//     other : "maha",
//     function student(age,){

//     }
// };

// console.log(obj);
// console.log(obj.detail);

// let user = ["anus", 23, "pindi"];
// let [name,age,city] = user;

// console.log[name];
// console.log[age];
// console.log[age];


// let user = ["anus", 23, "laiba"];

// let [name, ...args] = user;
// console.log(name);
// console.log(args);


// let users = ["anus",23];

// let[name,age] = users;

// console.log(name);

// let user = {
//     name : "anus ahmed",
//     city : "karachi"
// };



// let {name : n,age : a ,city : c} = user;
// console.log(n);
// console.log(a);
// console.log(c);

// class student{
//     constructor(name,age){
//         this.studentname = name;
//         this.studentage = age;
//         console.log("this is contructor function")
//     }

//     hello(){
//         console.log(`hello ${this.studentname}  your age is ${this.studentage}`);
//     }

//     static staticMethod(){
//         console.log("hello jani")
//     }

// }

// let a = new student("anus ahmed",23);
// a.hello();
// student.staticMethod();


// class employee{
//     constructor(name){
//         this.empname = name;
//         console.log("constructor : employees" + name);
//     }
//     info(){
//         console.log("hello "  + this.empname);
//     }
// }

// class manager extends employee{
//     info(){
//         super.info();
//         console.log("mano "  + this.empname);
//     }
    


// }

// let a = new manager("anus ahmed");
// a.info();

// let condition = false;

// let prom = new Promise(function(resolve,reject){
//     if(condition){
//         resolve("this is ahmed");
//     }else{
//         reject("this is anus");
//     }
// });

// console.log(prom);

// prom.then(reject);

// prom.catch(resolve);

// let obj = {
//     name : "anus",
//     course : "bscs",
//     rollNo : 656
// }

// let {name,course,rollNo} = obj;

// console.log(name)

// let arr = ["anus","maha","ahmed"];

// let [name1,name2,name3] = arr

// console.log(name4)

// let foo = function(){
//     console.log("hello world")
// }

// foo()

// let foo = () => {
//     return "anus";
// }
// console.log("hello")

// let arr = [{name : "anus",age:29},{name:"maha",age:22,}];
// let filter = arr.filter((a)=> console.log(a))


// let name = "anus";
// let search = "a"
// if(name.startsWith(search)){
//     console.log(name);
// }

// let arr = [2,1,4,5];
// console.log(arr);
// let multiply = arr.map(a => a*2)
// console.log(multiply);

// let arr = [{name :"anus"},{name:"maha"}];
// console.log(arr);
// let multiply = arr.map(a => a.name = "mohuddin");
// console.log(multiply);

class Student {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}

class School extends Student {
    constructor(name , email , School){
        super(name,email)
        this.School = School
        

    }
}

let Student1 = new School("anus", "anusahmed@gmail.com" ,"mh");
console.log(Student1);