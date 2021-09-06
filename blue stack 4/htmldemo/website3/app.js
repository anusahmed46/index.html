// alert("hello word");

// var a = prompt(2021);
// var b = prompt(1998);
// var c = (b-a);
// document.write(c);

// var a = "maha";
// var b = "mazboot";
// var c = (b+a);
// document.write(c);

// var a = "20";
// var b = 2;
// var c = (a*b);
// alert(c);

// var a = 20;
// var b = a++
// alert(b);

// var a = 20;
// var b = ++a;
// alert(b);

// var a = 20;
// var b = a--;
// alert(b);

// var a = 20;
// var b = --a;
// alert(b);

// var a = 10;
// var b = a++ + ++a - a + a++ - ++a + a;
// alert(b);

// var a = 20;
// b = (a+10);
// alert(b);

// var a = 20 % 2
// alert(a);

// var age = +prompt("enter your age");
// if(age == 23){
//     alert("you are equal");
// }
// else if(age < 23){
//     alert("you are again okay");
// }
// else{
//     alert("you are high");
// }


// var age = +prompt("enter your age");
// var gender = prompt("enter your gender");
// if(age>18 && gender == "male"){
//     alert("you are allowed")
// }
// else{
//     alert("your not allowed");
// }

// var age = +prompt("enter your age");
// var gender = prompt("enter your gender");
// if(age>18 || gender == "male"){
//     alert("you are allowed")
// }
// else{
//     alert("your not allowed");
// } 


// var a = "5"
// if(a === 5){
//     alert("true");
// }
// else{
//     alert("false");
// }

// var a = 20;
// var b = 10;
// var c = 10;
// var d = 20;
// if(a+b === d-c){
//     alert("correct");
// }
// else{
//     alert("not correct");
// }

// var a = 10;
// if(a!==15){
//     alert("correct");
// }
// else{
//     alert("incorrect");
// }

// var percent = +prompt("enter you percent");

// if(percent >= 80 && percent <= 100){
//     alert("A+");
// }
// else if(percent  >= 70 && percent  <= 80){
//     alert("A");
// }
// else if(percent  >= 60 && percent  <= 70){
//     alert("B");
// }
// else if(percent >=  50 && percent  <= 60){
//     alert("D");
// }
// else{
//     alert("you are fail");
// }


// var arr = ["anus","maha","kinza","ahmed"];
// arr[4] = "abba";
// document.write(arr[4]);

// var arr = [];
// arr[0] = "maha";
// arr[1] = "ahmed";
// document.write(arr);


// var arr = ["anus","maha","kinza","ahmed"];
// arr.pop();
// document.write(arr);

// var arr = ["anus","maha","kinza","ahmed"];
// arr.push("laiba");
// document.write(arr);

// var arr = ["anus","maha","kinza","ahmed"];
// arr.shift();
// document.write(arr);

// var arr = ["anus","maha","kinza","ahmed"];
// arr.unshift("mohudidn");
// document.write(arr);

// var arr = ["anus","maha","kinza","ahmed"];
// arr.splice(2,1,"choudary");
// document.write(arr);

// var arr = ["anus","maha","kinza","ahmed","choudary"];
//  copyArr = arr.slice(1,4);
// document.write(arr);
// document.write(copyArr);


// var a = 10;
// var b = a++ + ++a - a--
// //      10  +  12 - 12
// alert(b);

// var a = prompt("enter a value","your value is");
// alert(a);

// var a = 10;
// for( a = 1; a<=10; a++){
//     document.write(a + "<br>");
// }

// var a = 10;
// for( a = 1; a <= 10; --a){
//     document.write(a + "<br>");
// }

// var a = 10;
// for( a = 1; a < 10; a+3){
//     document.write(a);
// }

// var arr = ["anus","ahmed","maha","choudary"];
// for(var a = 0; a < arr.lenght; a++);
// console.log(arr[a])

// var cities = ["karach","lahore","pindi","islamabad"];

// for(var a = 0; a < cities.length; a++){
//     if(cities[a] === "karachi"){
//         alert(cities[a] + "is the big city");
//     }

// else{
//     alert("all is big");
// }
// }

// var a = 10;
// for(a=1; a>0; a++){
//     if(a === 10){
//         break
//     }
//     console.log("hello");
// }

// for(var a = 0; a<10; a++){
//     if(a === 5){
//         break
//     }
//     console.log("hello");
// }

// var a = 20;
// var b = 10;
// for(a=0; a<20; a++){
//     for(b=0; b<10; b++){
//         console.log("pakistan")
//     }
// }

// var fistNames = ["anus","maha","ahmed"];
// var lastNames = ["ahmed","mansoor"];

// for(var a = 0;  a < fistNames.length; a++){
//     for(var b = 0; b < lastNames.length; b++){
//         document.write(firstNames[a] + " " + lastNames[b]);
//     }
// }

// var a= 20;
// var b=0;
// for(a=0; a<20; a++){
//     for(b=0; b<a; b++){
//         document.write("*")
//     }
//     document.write("<br>");
// }

// var word = prompt("enter your word");
// var check = "";

// for(var a = word.lenght - 1; a >= 0; a--){
//     check += word[a];
// }
// if(word === check){
//     console.log(word +  "is palindrome word")
// }
// else{
//     console.log("hence this is not palinfrome word");
// }

// var a = "ANUSAHMED";
// a = a.lowertocase;
// document.write(a);

// var name = "anus ahmed";

// document.write(name.indexof(a));

// var val1 = prompt("enter a first value");
// var sign = prompt("enter your opertor");
// var val2 = prompt("enter a second value");


// console.log(val1+sign+val2)
// if(sign === '+'){
//     alert((+val1)+(+val2))
// }
// else if(sign === '-'){
//     alert(val1-val2)
// }
// else if(sign === '*'){
//     alert(val1*val2)
// }
// else if(sign === '/'){
//     alert(val1/val2)
// }
// else if(sign === '%'){
//     alert(val1/val2*100)
// }

// for(var a =1; a <= 100; a = a+10){
//     for(var b = a; b < a+10; b++){
//         document.write(b + " ");

//     }
//         document.write("<br>")
// }

// var city = prompt('enter your city name')
// city = city.toLowerCase()
// var arr = ['karachi','islambad','pishawar']
// for(var i=0; i<arr.length; i++){
//     if(i === city){
//         alert('city has found')
//     }else{alert('city has not found')}
// }

// var name = prompt("enter your name");
// var arr = ["maha","anus","ahmed"];
// for(var i=0; i<arr.length; i++){
//     if(i === name){
//         alert("name has found")
//     }
//     else{
//         alert("name has not found")
//     }
// }

// var str = "kara  chi";
// var numChars = str.length;
// for(var i = 0; i<numChars; i++){
//     if(str.slice(i,i+2) === "  "){
//         alert("double spaces");
//}
// }


// var a = "anus";
// console.log(a.charAt(1));

// var para = "my name is khan";
// var para1 = para.replace("khan","anus");
// console.log(para1)

// var num = 1.7;
// var round = Math.round(num);
// document.write(num);

// var num = 1.7;
// var round = Math.ceil(num);
// document.write(num);

// var num = 1.7;
// var round = Math.floor(num);
// console.log(num);

// var headsuser = prompt("enter your user name");
// var tailsuser = prompt("enter tails username");
// var toss = Math.random()*2
// var floor = Math.floor(toss)
// if(floor === 0){
//     alert("heads  " +   headsuser   + "  win the toss")
// }else{
//     alert("tails  " +   tailsuser   + "  win the toss")
// }


// Number("2")
// document.write(Number);

// function add(a,b,c){
//     var c = 15;
//     var a = a+b+c;
//     return a;
// }
// var b = add(6,6,6);
// alert(c);


// function first(a,b){
//     return "hello";
// }

// console.log(first(7,7))

// var a  = "anus";
// function maha(){
//     a = "ahmed"
// }

// console.log(a);

// function calc(num1,opr,num2){
//    if(opr === '+'){
//        return num1 + num2
//    }
//    else if(opr === "-"){
//        return num1 + num2
//    }
//    else if(opr === "*"){
//        return num1 + num2
//    }
//    else{
//        return "incorrect opr"
//    }

// }

// var result1 = calc(5,"+",5)
// var result2 = calc(10,"-",5)
// var result3 = calc(5,"$",5)

// console.log(result1)
//
//  console.log(result2)
// console.log(result3)


// function maha(){
    
// }

// console.log(maha())

// var name = "kinza"
// switch(name){
//     case "anus":
//         alert("hello anus")
//         break
//     case "maha":
//         alert("hello maha")
//         break 
//     case "kinza":
//         alert("hello kinza")
//         break
//     case "ahmed":
//         alert("hello ahmed")
//         break
//     default:
//         alert("hello") 
// }

// var b = 0;
// while(b<10){
//     console.log(b);
//     b++;
// }

// var c = 0;
// do{
//     console.log(c)
//     c++;
// }
// while(c<10);


// function maha(greet){
//     alert("greet")
// }

// function clickbtn(){
//     alert("click");
// }

// function getNumber(num){
//     console.log(num)
//     var jani = document.getElementById("jani");



// function readmore(){
//     var text = document.getElementById('text').innerHTML;
//     var paragraph = document.getElementById('para')
//     paragraph.innerHTML = text
// }

//  var name = document.getElementById("name");
//  name.value = "anus" 

//  function getvalue(){
//      alert("test");
//  }

//  function setvalue(){
//      var name = document.getElementById("name")
//      name.value = "kinza"
//  }

// function setvalue(){
//     var para = document.getElementById("para");
//     para.innerHTML = "this is mazboot"
// }

// function bigimage(){
//     var image = document.getElementById("carimage")
//     image.className = "big"
// }

// function smallimage(){
//     var image = document.getElementById("carimage")
//     image.className = "small"

// }


// function addclass(){
//     var para = document.getElementById("para");
//     para.className += " bold blue"

// }

// function getElements(){
//     var element = document.getElementById("p")
//     console.log(element)
// }

// var count = 0;
// var interval;
// function timer(){
//     count++
//     console.log(count)

// }

// interval = setInterval(timer,1000)

// setTimeout(function(){
//     clearInterval(interval)

// },5000)


// function timeOut(){
//     console.log("running...")
// }
// setTimeout(timeOut,3000)

// var min = 0;
// var sec = 0;
// var msec = 0;
// var minHeading = document.getElementById("min");
// var secHeading = document.getElementById("sec");
// var msecHeading = document.getElementById("msec");
// var interval;

// function timer(){
//     msec++
//     msecHeading.innerHTML = msec;
//     if(msec >= 100){
//         sec++
//         secHeading.innerHTML = sec;
//         msec = 0;
//     }else if(sec >= 60){
//         min++
//         minHeading.innerHTML = min;
//         sec = 0;
//     }
// }

// function start(){
// interval = setInterval(timer,10)
// }

// function stop(){
//     clearInterval(interval);
// }

// function reset(){
//     min = 0;
//     sec = 0;
//     msec = 0;
//     minHeading.innerHTML = min;
//     secHeading.innerHTML = sec;
//     msecHeadingm.innerHTML = msec;
//     stop();
// }


// console.l

// function disabledbtn(){
//     var btn = document.getElementById("yes")
//     btn.disabled = true;
// }

var p = document.createElement("p");
var text = document.createTextNode("anus ahmed")
p.appendChild(text);
var main = document.createElementbyid("main")
main.appendChild(p)
console.log(p);