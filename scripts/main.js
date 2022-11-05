const cart = document.getElementById("cart");
const cartOverlay = document.getElementById("cart-overlay");
var cartIsOpen = true;

cart.addEventListener("click", function() {toggleCart()});

function toggleCart()
{
    if (cartIsOpen == false)
    {
        cartOverlay.style.visibility = "visible";
        cartIsOpen = true;
        return;
    } else {
        cartOverlay.style.visibility = "hidden"
        cartIsOpen = false;
        return;
    }
}