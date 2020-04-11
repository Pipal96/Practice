const HeaderButton = document.getElementById("header__button");
const HeaderMenu = document.getElementById("header__menu");
const HeaderPopupMenu = document.getElementById("header__popup-menu");
const PopupMenu = document.getElementById("menu__popup");
const BodyPopup = document.querySelector(".body-contaier");
const PopupLine = document.getElementById("block-one__horizon-line");
/* INPUT */
const InputRangeOne = document.getElementById("range-one");
const InputRangeValueOne = document.getElementById("input-range-value-one");

const InputRangeTwo = document.getElementById("range-two");
const InputRangeValueTwo = document.getElementById("input-range-value-two");

const InputRangeThree = document.getElementById("range-three");
const InputRangeValueThree = document.getElementById("input-range-value-three");

const InputRangeFour = document.getElementById("range-four");
const InputRangeValueFour = document.getElementById("input-range-value-four");

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


/* BLOCK-ONE */


/* window.addEventListener("scroll", function (e) {
    console.log(document.documentElement.scrollTop)
    console.log(PopupLine.getBoundingClientRect())
}) */

/* BLOCK-FOUR */


InputRangeValueOne.innerHTML = InputRangeOne.value;

InputRangeOne.oninput = function () {
    InputRangeValueOne.innerHTML = InputRangeOne.value;
}

InputRangeValueTwo.innerHTML = InputRangeTwo.value;

InputRangeTwo.oninput = function () {
    InputRangeValueTwo.innerHTML = InputRangeTwo.value;
}

InputRangeValueThree.innerHTML = InputRangeThree.value;

InputRangeThree.oninput = function () {
    InputRangeValueThree.innerHTML = InputRangeThree.value;
}

InputRangeValueFour.innerHTML = InputRangeFour.value;

InputRangeFour.oninput = function () {
    InputRangeValueFour.innerHTML = InputRangeFour.value;
}