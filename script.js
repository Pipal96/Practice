const HeaderButton = document.getElementById("header__button");
const HeaderMenu = document.getElementById("header__menu");

/* HeaderMenu */
HeaderMenu.addEventListener("click", function (e) {
    e.preventDefault();
    HeaderMenu.classList.toggle("header__menu_active");
});

/* HeaderButton */
setInterval(function showAnimationHeader() {
    HeaderButton.classList.add("header__active-button")
}, 3000);