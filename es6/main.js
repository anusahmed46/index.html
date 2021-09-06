// class Students{
//     constructor(name,fName,course,gender){
//         this.myname = name;
//         this.myfName = fName;
//         this.mycourse = course;
//         this.mygender = gender;
//     }

//     school(){
//         console.log(`my name is ${this.myname} and my last name is ${this.myfName} and im studying ${this.mycourse} and im ${this.mygender}`);
//     }
// }

// class Player extends Students{
//     constructor(name,age,game){
// //         super(name,age);
// //         this.name = name;
// //         this.age = age;
// //         this.mygame = game;
// //     }

// // //     play_school(){
// // //         console.log(`my name is ${this.name} and my age is ${this.age} im playing ${this.mygame}`);
// // //     }
// // // }
// // // var st1 = new Students("anus","ahmed","bscs","male");
// // // st1.school();
// // // var st2 = new Player("maha",23,"football")
// // // st2.play_school();


// // class Emplyoe{
// //     constructor(eName,eID,Edep){
// //         this.myEname = eName;
// //         this.myEid = eID;
// //         this.myEdep = Edep;
// //     }

// //     workers(){
// //         console.log(`my name is ${this.myEname} and this is my id ${this.myEid} and my department is ${this.myEdep} `);
// //     }
// // }
// //  class Emplyoe2 extends Emplyoe{
// //      constructor(eName,eID,Edep,Ephno){
// //          super();
// //          this.myEname = eName;
// //          this.myEid = eID;
// //          this.myEdep = Edep;
// //          this.myEphno = Ephno;  
// //      }
// //      workers2(){
// //          console.log(`my name is ${this.myEname} and this is my id ${this.myEid} and my department is ${this.myEdep} please contact me on my number give below ${this.myEphno}`);
// //      }
// //  }
// // var work1 = new Emplyoe("anus",656,"comp sci")
// // work1.workers();
// // var work2 = new Emplyoe2("anus",656,"comp sci",0909890);
// // work2.workers2()

// // class hey{
// //     msg(){
// //         console.log("hey");
// //     }
// // }
// // var a = new hey();
// // a.name = "anus";
// // a.msg();

// // class mydata{
// //     constructor(){
// //         let name;
// //     }
// //     info(){
// //         console.log("hey guys this is " + name );
// //     }
// //     static mystatic(){
// //         console.log("hey guys this is your father mazboot");
// //     }
// // }

// // let biodata = new mydata();
// // biodata.name = "anus";
// // biodata.info();
// // mydata.mystatic()

// // let complete = "true";
// // let prom = new Promise(function(resolve,reject){
// //     if(complete){
// //         resolve("satisfy");
// //     }else{
// //         reject("not satisfy");
// //     }
// // });

// // console.log(prom);


// function prom (complete){
//     return new Promise(function(resolve,reject){
//         console.log("fatching the data plz wait");
//        setTimeout(() => {
//         if(complete){
//             resolve("im pass");
//         }else{
//             reject("im failed");
//         }
//        }, 3000);
//     })
// }

// prom(false).then((result) => {
//     console.log(result)}).catch((error) => {
//         console.log(error)});


// let complete = "true";
// let prom = new Promise(function(resolve,reject){
//     if(complete){
//         resolve("im passed");
//     }
//     reject("im rejected");
// });

// console.log(prom);


// function prom (complete){
//     return new Promise(function(resolve,reject){
//        setTimeout(() => {
//         if(complete){
//             resolve("im cleared");
//         }else{
//             reject("im failed")
//         }
//        }, 3000);
//     })
// }

// prom(false).then((result) => {console.log(result)}).catch((error) => {console.log(error)});



// function prom(a,b){
//     return new Promise(function(resolve,reject){
//         console.log("plaese wait dada ");
//         let c = a/b;
//         setTimeout(() => {
//             if(a/b){
//                 resolve("im student " + c);
//             }else{
//                 reject("im graduated ")
//             }
//         },3000);
//     })
// }

// prom(10,5).then((result) => {
// //     console.log(result)}).catch((error) => {
// //         console.log(error)});

// let p1 = new Promise( function(resolve,reject){
//     setTimeout(() => {
//         console.log("promise solve");
//         resolve(1100)
//     }, 1 * 1000 );
// })


// let p2 = new Promise(function (resolve,reject){
//     setTimeout(() => {
//         console.log("promise solve");
//         resolve(21010)
//     }, 1 * 1000 );
// });

// Promise.all([p1,p2]).then((result) => {
//     console.log("result" + "result")}).catch((error) => {
//         console.log("error " + "error")});

// async function myname (){
//     return "anus ahmed";
// }
// myname().then((result) => {
//     console.log(result)});


// async function test(){
//     console.log("msg1");
//     console.log("msg2");
//     console.log("msg3");
// }
// console.log("msg4");
// console.log("msg5");
// test();


// let name = Symbol["name"];

// let biodata = {
//     course : "bscs",
//     age : 23,
//     [name] : "anus ahmed",
//     uni : "bbsul"
// };

// for(var properties in biodata);
// console.log(properties);

// console.log(biodata.age);
// console.log(biodata[name]);




let num = [500,100,1500];
let iter = num[Symbol.iterator]()
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());








