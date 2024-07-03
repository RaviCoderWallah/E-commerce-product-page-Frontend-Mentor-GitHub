const cartSmallImagesContainer = document.querySelector(".cart__small-image");
const largeProductImage = document.querySelector(".cart__main-large-image img");

cartSmallImagesContainer.addEventListener("click", (e) => {
    if (e.target !== cartSmallImagesContainer) {
        [...cartSmallImagesContainer.children].forEach(image => {

            image.classList.remove("background-fill");
            e.target.classList.add("background-fill");

            let imgSrc = e.target.childNodes[1].src;
            largeProductImage.src = imgSrc.replace("-thumbnail", "");

            largeProductImage.addEventListener("click", () => {
                popUpProduct(largeProductImage.src);
            });

            addTOCartBox(imgSrc);

        });
    }
});


const minusCartButton = document.getElementById('add-cart__number-minus');
const plusCartButton = document.getElementById("add-cart__number-plus");
const resultProductNumberText = document.getElementById("add-cart_number-text");



let productNumberCart = parseInt(localStorage.getItem("Product Number")) || 0;
localStorage.setItem("Product Number", productNumberCart);


let productNumber = 0;

minusCartButton.addEventListener("click", () => {
    if (productNumber > 0) productNumber--;
    resultProductNumberText.innerText = productNumber;

    localStorage.setItem("Product Number", productNumber);
});

plusCartButton.addEventListener("click", () => {
    productNumber++;
    resultProductNumberText.innerText = productNumber;

    localStorage.setItem("Product Number", productNumber);
});


resultProductNumberText.innerText = productNumber;

const addCartButton = document.querySelector("#add-cart__btn");
addCartButton.addEventListener("click", () => {

    const cartLogo = document.querySelector(".cart-logo");
    const cartNavigation = document.querySelector(".cart-navigation");
    cartLogo.addEventListener("click", () => {
        if (productNumber !== 0) {
            cartNavigation.classList.remove("empty");
            cartNavigation.classList.add("filled");

            const finalAmoutElement = document.querySelector("#final-amount-para");
            const productAmount = parseInt(document.querySelector("#product-amount").innerText);

            let finalAmount = Math.trunc(productAmount * productNumber);
            finalAmoutElement.innerHTML = `${productAmount} * ${productNumber} <strong id="product-amount">$${finalAmount}</strong>`;

        } else {

            cartNavigation.classList.remove("filled");
            cartNavigation.classList.add("empty");

        }
    });

    cartLogo.classList.add("cart-filled");
    let productNumberElement = document.getElementById("product-number-element");
    productNumberElement.innerText = productNumber;
});


const cartLogo = document.querySelector(".cart-logo");
const cartNavigation = document.querySelector(".cart-navigation");


cartLogo.addEventListener("click", (e) => {
    if (productNumberCart !== 0) {
        cartNavigation.classList.remove("empty");
        cartNavigation.classList.add("filled");

        const finalAmoutElement = document.querySelector("#final-amount-para");
        const productAmount = parseInt(document.querySelector("#product-amount").innerText);

        let finalAmount = Math.trunc(productAmount * productNumberCart);
        finalAmoutElement.innerHTML = `${productAmount} * ${productNumberCart} : <strong id="product-amount">$${finalAmount}</strong>`;

        cartNavigation.classList.remove("display-none");
    } else {

        cartNavigation.classList.remove("filled");
        cartNavigation.classList.add("empty");
    }
});


cartLogo.classList.add("cart-filled");
let productNumberElement = document.getElementById("product-number-element");
productNumberElement.innerText = productNumberCart;



function addTOCartBox(imgSrc) {
    const cartImage = document.querySelector(".cart-items__image img");
    cartImage.src = imgSrc;
}

// responsive header 
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", () => {
    const responsiveSidebar = document.querySelector(".responsive-sidebar");
    responsiveSidebar.classList.add("menu-toogle");
     
    const closeMenuIcon = document.querySelector(".responsive-sidebar .close-icon");
    closeMenuIcon.addEventListener("click", () => {
        responsiveSidebar.classList.remove("menu-toogle");
    })
});


const closeCartBox = document.querySelector(".cart-heading .close-icon");
closeCartBox.addEventListener("click", () => {
    cartNavigation.classList.add("display-none");
});