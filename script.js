const HeaderButton = document.getElementById("header__button");
const HeaderMenu = document.getElementById("header__menu");
const HeaderPopupMenu = document.getElementById("header__popup-menu");
const PopupMenu = document.getElementById("menu__popup");
const BodyPopup = document.querySelector(".body-contaier");

/* HeaderMenu */
HeaderMenu.querySelector("a").addEventListener("click", function (e) {
    e.preventDefault();
    HeaderMenu.classList.add("header__menu_active")
    showMenu();
    showPopupBody();
});

HeaderPopupMenu.querySelector("a").addEventListener("click", function (e) {
    e.preventDefault();
    HeaderMenu.classList.remove("header__menu_active")
    showMenu();
    showPopupBody();
});


function showMenu() {
    PopupMenu.classList.toggle("header__nav-active")
}

function showPopupBody() {
    BodyPopup.classList.toggle("body-contaier-active")
}

/* HeaderButton */
setInterval(function showAnimationHeader() {
    HeaderButton.classList.add("header__active-button")
}, 3000);