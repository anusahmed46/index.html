function check(){
    var score = 0;
    var q1answer_1 = document.getElementById("q1-a1");
    var q1answer_2 = document.getElementById("q1-a2");
    var q1answer_3 = document.getElementById("q1-a3");
    var rightanswer_4 = document.getElementById("q1-a4");
    if (rightanswer_4.checked == true){
        score++
        alert("q1 answer right");

    }
    else{
        alert("q1 answer wrong");
    }

}




    function check(){
    var score = 0;
    var right_answer_1  = document.getElementById("q2-a1");
    var q2_answer_2 = document.getElementById("q2-a2");
    var q2_answer_3 = document.getElementById("q2-a3");
    var q2_answer_4 = document.getElementById("q2-a4");
    if (right_answer_1.checked == true){
        score++
        alert("q2 answer right");

    }
    else{
        alert("q2 answer wrong");
    }
        alert("your score is " + score++)
}
