
import navbar from "../components/navbar.js"
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();

// function kau_myfunc() {
// let div = document.querySelector("#kau_show-on-hover");
// div.classList.toggle("kau_show");
// console.log("kau_button")
// }
// document.querySelector("#kau_button").addEventListener("click", kau_myfunc)


setTimeout(function () {
    alert("congratulations ! Your order is placed ");
}, 3000)
setTimeout(function () {
    alert("continue shopping...");
    window.location.href = "index.html";
}, 8000);

localStorage.clear("addToCart");