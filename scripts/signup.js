console.log("object");
let userDetails=JSON.parse(localStorage.getItem("user")) || [];
import navbar from "../components/navbar.js"
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();

let form = document.querySelector("#form").addEventListener("submit" , signUp );

function trySign(n, e, m, p) {
    this.name = n;
    this.email = e;
    this.mbl = m;
    this.pwd = p;
}



function signUp(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mbl = document.getElementById("number").value;
    let pwd = document.getElementById("password").value;


    console.log(name, email, mbl, pwd);


    let user1=  new trySign(name, email, mbl, pwd);
    console.log('user1 :>> ', user1);

    if( !name ||  !email || !mbl || !pwd){
        alert("Please type Input");
        return;
    }

    userDetails.push(user1);

    localStorage.setItem("user", JSON.stringify(userDetails));

    alert("OTP has sent to your mobile");

    window.location.href="otp.html";

}

