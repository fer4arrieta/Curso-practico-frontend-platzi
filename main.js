const menuemail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
const menuhamicon = document.querySelector(".menu");
const menucarritoicon = document.querySelector(".navbar-shopping-cart");
const productdetailcloseicon = document.querySelector(".product-detail-close");
const mobilemenu = document.querySelector(".mobile-menu");
const shoppingcartcontainer = document.querySelector("#shoppingcartcontainer");
const productdetailcontainer = document.querySelector("#productdetail");
const cardscontainer = document.querySelector(".cards-container");

menuemail.addEventListener('click', toggledesktopmenu);
menuhamicon.addEventListener('click', togglemobilemenu);
menucarritoicon.addEventListener('click', toggleCarritoshoppingcartcontainer);
productdetailcloseicon.addEventListener('click', closeproductdetailasaid);

function toggledesktopmenu() {
    const isshoppingcartcontainerclose = shoppingcartcontainer.classList.contains("inactive");

    if (!isshoppingcartcontainerclose) {
        shoppingcartcontainer.classList.add("inactive")
    }
    desktopmenu.classList.toggle("inactive");
}

function togglemobilemenu () {
    const isshoppingcartcontainerclose = shoppingcartcontainer.classList.contains("inactive");

    if (!isshoppingcartcontainerclose) {
        shoppingcartcontainer.classList.add("inactive")
    }

    closeproductdetailasaid();
    mobilemenu.classList.toggle("inactive");
}

function toggleCarritoshoppingcartcontainer () {
    const ismobilemenuclose = mobilemenu.classList.contains("inactive");

    if (!ismobilemenuclose) {
        mobilemenu.classList.add("inactive")
    }

    const isproductdetailclose = productdetailcontainer.classList.contains("inactive");

    if (!isproductdetailclose) {
        productdetailcontainer.classList.add("inactive")
    }


    const ismobiledesktopmenuclose = desktopmenu.classList.contains("inactive");

    if (!ismobiledesktopmenuclose) {
        desktopmenu.classList.add("inactive")
    }
    shoppingcartcontainer.classList.toggle ("inactive");
}

function openproductdetailasaid() {
    shoppingcartcontainer.classList.add('inactive')
    productdetailcontainer.classList.remove('inactive')
}

function closeproductdetailasaid () {
    productdetailcontainer.classList.add('inactive')
}


const productlist = [];
productlist.push({
    name: "Bike",
    price:120,
    Image:'https://st2.depositphotos.com/1766687/11043/i/450/depositphotos_110438290-stock-photo-bicycle-tyre-on-a-white.jpg'

});productlist.push({
    name: "TV",
    price:420,
    Image:'https://media.istockphoto.com/photos/modern-curved-4k-ultrahd-tv-picture-id638043774?k=20&m=638043774&s=612x612&w=0&h=B51ZGI1WsMG1bYmjATM8pCU31gTZGj4MvnIJ45qqsr8='

});productlist.push({
    name: "Laptop",
    price:800,
    Image:'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com//642900_330506_04_front_zoom.jpg'

});productlist.push({
    name: "Iphone",
    price:980,
    Image:'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2021/09/14/16316447906591.jpg'

});productlist.push({
    name: "AppleWatch",
    price:350,
    Image:'https://thumbs.dreamstime.com/b/nuevo-reloj-pulgadas-de-apple-en-un-fondo-blanco-134996321.jpg'

});productlist.push({
    name: "Car BMW",
    price:53000,
    Image:'https://s1.1zoom.me/big3/699/345264-admin.jpg'

});

for (product of productlist) {
    const productcard =  document.createElement("div");
    productcard.classList.add("product-card");

    const productimg = document.createElement("img");
    productimg.setAttribute('src',product.Image);
    productimg.addEventListener('click',openproductdetailasaid)

    const productinfo =  document.createElement("div");
    productinfo.classList.add("product-info");

    const productinfodiv =  document.createElement("div");

    const productprice =  document.createElement("p");
    productprice.innerText = "$" + product.price;

    const productname =  document.createElement("p");
    productname.innerText = product.name;

    productinfodiv.appendChild(productprice);
    productinfodiv.appendChild(productname);

    const productinfofigure =  document.createElement("figure");
    const productimgcard =  document.createElement("img");
    productimgcard.setAttribute('src','./iconos/bt_add_to_cart.svg')

    productinfofigure.appendChild(productimgcard);

    productinfo.appendChild(productinfodiv);
    productinfo.appendChild(productinfofigure);

    productcard.appendChild(productimg);
    productcard.appendChild(productinfo);

    cardscontainer.appendChild(productcard);
}