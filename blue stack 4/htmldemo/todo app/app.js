// var list = document.getElementById("list")
    



// function addapp(){
//     var todo_item = document.getElementById("todo_item");

//     var li = document.createElement('li');
//     var litext = document.createTextNode(todo_item.value);
//     li.appendChild(litext);
    
//     var delbtn = document.createElement("button");
//     var addbtn = document.createTextNode("DElETE");
//     delbtn.appendChild(deltext)

//     li.appendChild(delbtn)

//     list.appendChild(li);

//     todo_item.value = ""
//     console.log(li);
//    }

// var webcourse = {
//     t1 : "alimughal",
//     t2 : "ghous",
//     t3 : "basit"
// }

// var arr = ["ali","ghous","basit"]

// var myQuestion = [
//     {
//         question : "what is your name",
//         answer : {
//             a : "ali",
//             b : "ghous",
//             c : "basit"
//         },
//         correctAnswer : "c"
//     },

function Course(t1,t2,t3){
    this.t1 = t1;
    this.t2 = t2;
    this.t3 = t3;
}

var xyz = new Course("ali","ghous","basit");
console.log(xyz);