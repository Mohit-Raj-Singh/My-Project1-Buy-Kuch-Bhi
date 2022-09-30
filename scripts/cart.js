import navbar from "../components/navbar.js"
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();

let addToCartFromLS = JSON.parse(localStorage.getItem("addToCart")) || [];
let cartContainer = document.getElementById("cartContainer")
function showCart(data) {

    data.forEach((element,index) => {
        let box1 = document.createElement("div");

        let img = document.createElement("img");
        img.src = element.image;
        img.setAttribute("class", "cartPic");

        let name = document.createElement("p");
        name.innerText = element.title;
        name.setAttribute("class", "cartName");

        let price = document.createElement("p");
        price.innerText = `₹${element.price}`;
        price.setAttribute("class", "cartPrice");

        let btn= document.createElement("button");
        btn.innerText="Remove Item";
        btn.setAttribute("id", "remove_product");
        btn.addEventListener("click", function(){
            remove(addToCartFromLS, index);
        })

        box1.append(img, name, price, btn);

        cartContainer.append(box1);
    });

}

showCart(addToCartFromLS);



function remove(addToCartFromLS, index){
    addToCartFromLS.splice(index, 1);

    let newData=JSON.parse(localStorage.getItem("data")) || [];
    

    localStorage.setItem("addToCart", JSON.stringify(addToCartFromLS));

    window.location.reload();

}


function totalPay(cart){
    let sum=0;

    for(let i=0;i<cart.length;i++){
        sum+=cart[i].price;

    }
    let cartTotal=document.getElementById("cart_total");
    sum=sum.toFixed(2);
    cartTotal.innerText=`₹${sum}`;
}

totalPay(addToCartFromLS);