let addToCartFromLS = JSON.parse(localStorage.getItem("addToCart")) || [];
let cartContainer=document.getElementById("cartContainer")
function showCart(data){

data.forEach(element => {
    let box1=document.createElement("div");

    let img=document.createElement("img");
    img.src=element.image;

    let name=document.createElement("p");
name.innerText=element.title;

    let price=document.createElement("p");
    price.innerText=`₹${element.price}`;

    box1.append(img, name, price);

    cartContainer.append(box1);
});

}

showCart(addToCartFromLS);