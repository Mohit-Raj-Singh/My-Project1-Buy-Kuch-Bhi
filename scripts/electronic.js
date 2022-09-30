// console.log("object");
import navbar from "../components/navbar.js"
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();

let container= document.getElementById("container");   
let addToCart = JSON.parse(localStorage.getItem("addToCart")) || []; 

let data;

async function catchData(){
    try{
        let res= await fetch("https://fakestoreapi.com/products/category/electronics");
        data= await res.json();

        appendProduct(data);
    
        console.log('data : ', data);
    }

    catch(err){
        console.log('err : ', err);
    }




}

catchData();


function appendProduct(data){
    
    container.innerHTML=null;

    data.forEach(function (el, index){
        let div= document.createElement("div");

        let img= document.createElement("img");
        img.setAttribute("class", "productPic");
        img.src=el.image;

        let title= document.createElement("p");
        title.setAttribute("class", "productName");
        title.innerText=el.title;

        let price= document.createElement("p");
        price.setAttribute("class", "productPrice");
        price.innerText=`₹${el.price}`;

        let btn=document.createElement("button");
        btn.setAttribute("class", "productBtn");
        btn.innerText="Add to Cart";
        btn.addEventListener("click", () => {
            addTocartFun(el, index);
        });

        div.append(img, title, price, btn);
        container.append(div);

    });
}

let addTocartFun = (el, index) => {

    let flag = false;
    for (let i = 0; i < addToCart.length; i++) {
        if (addToCart[i].id == el.id) {
            flag = true;
        }
    }
    if (!flag) {
        console.log("!include");
        addToCart.push(el);
        localStorage.setItem("addToCart", JSON.stringify(addToCart));
        // alert("");
    } else {
        alert("already in cart");
    }
};

function sortLH(){
    data= data.sort(function(a,b){
        return a.price-b.price;

    })
     
   appendProduct(data);
}

function sortHL(){
    data= data.sort(function(a,b){
        return b.price-a.price;
        
    })
     
   appendProduct(data);
}


// function filter(){
//     let query= document.getElementById("query").value;

//     let copy_data=data;
//     copy_data=copy_data.filter(function(el){
//         return el.title.toLowerCase().includes(query)
//     });
//     appendProduct(copy_data);
// }