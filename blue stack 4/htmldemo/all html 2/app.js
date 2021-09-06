function login(){
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(world === "username" && pass === "123"){
        location.pathname("pagehtml")
    }
    else{
        window.alert("login failed")

    }
    
}