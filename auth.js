// REGISTER

function register(){

    let user = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        password: document.getElementById("password").value

    };


    if(user.email === "" || user.password === ""){

        alert("Please fill all details");

        return;

    }


    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );


    alert("Registration Successful");


    window.location="login.html";

}





// LOGIN

function login(){


    let email =
    document.getElementById("loginEmail").value;


    let password =
    document.getElementById("loginPassword").value;



    let user =
    JSON.parse(localStorage.getItem("user"));



    if(user && 
       user.email === email &&
       user.password === password){



        // Create login session

        localStorage.setItem(
            "loggedIn",
            "true"
        );


        alert("Login Successful");


        window.location="index.html";


    }

    else{


        alert("Invalid Email or Password");


    }


}







// LOGOUT

function logout(){


    localStorage.removeItem("loggedIn");


    alert("Logged out successfully");


    window.location="login.html";


}