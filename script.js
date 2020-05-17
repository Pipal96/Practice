const HeaderButton = document.getElementById("header__button");
const Modal = document.getElementById("modal");
const CloseModal = document.getElementById("close-modal");
const ModalOverlay = document.getElementById("modal-overlay");
const CloseButton = document.getElementById("close-button");

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

const InputRangeFive = document.getElementById("range-five");
const InputRangeValueFive = document.getElementById("input-range-value-five");

const InputRangeSix = document.getElementById("range-six");
const InputRangeValueSix = document.getElementById("input-range-value-six");

const InputRangeSeven = document.getElementById("range-seven");
const InputRangeValueSeven = document.getElementById("input-range-value-seven");

const InputRangeEight = document.getElementById("range-eight");
const InputRangeValueEight = document.getElementById("input-range-value-eight");

const InputRangeNine = document.getElementById("range-nine");
const InputRangeValueNine = document.getElementById("input-range-value-nine");

/* HeaderMenu */
HeaderMenu.querySelector("a").addEventListener("click", function (e) {
    e.preventDefault();
    HeaderMenu.classList.add("header__menu_active")
    showMenu();
    showPopupBody();
});

HeaderPopupMenu.querySelector("a").addEventListener("click", closeMenu);

function closeMenu(e) {
    e.preventDefault();
    HeaderMenu.classList.remove("header__menu_active")
    showMenu();
    showPopupBody();
}


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

HeaderButton.addEventListener("click", function (e) {

    e.preventDefault();
    Modal.classList.remove("modal-close");
    ModalOverlay.classList.remove("modal-close")
})
CloseButton.addEventListener("click", function (e) {
    e.preventDefault();
    Modal.classList.add("modal-close");
    ModalOverlay.classList.add("modal-close")
});
ModalOverlay.addEventListener("click", function (e) {
    e.preventDefault();
    Modal.classList.add("modal-close");
    ModalOverlay.classList.add("modal-close")
});

/* HEADER-NAVBAR */

const NavBar = document.getElementById("nav-bar");
for (let a of NavBar.querySelectorAll('a[href*="#"')) {
    a.addEventListener("click", function (e) {
        closeMenu(e);
        const BLOCKid = a.getAttribute('href');
        document.querySelector(BLOCKid).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}




/* BLOCK-ONE */
/* let isScrolling = false;
window.addEventListener("scroll", function (e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function (e) {
            dealWithScrolling(e);
            isScrolling == false;
        })
    }
    isScrolling == true;
})

function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();
    let top = el.getBoundingClientRect().top;
    let bottom = el.getBoundingClientRect().bottom;
    let heigth = el.getBoundingClientRect().heigth;
    return ((top + history >= 0) && (heigth + window.innerHeight >= 0))
}

function isFullyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight))
}

function dealWithScrolling(e) {

} */

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

InputRangeValueFive.innerHTML = InputRangeFive.value;

InputRangeFive.oninput = function () {
    InputRangeValueFive.innerHTML = InputRangeFive.value;
}

InputRangeValueSix.innerHTML = InputRangeSix.value;

InputRangeSix.oninput = function () {
    InputRangeValueSix.innerHTML = InputRangeSix.value;
}

InputRangeValueSeven.innerHTML = InputRangeSeven.value;

InputRangeSeven.oninput = function () {
    InputRangeValueSeven.innerHTML = InputRangeSeven.value;
}

InputRangeValueEight.innerHTML = InputRangeEight.value;

InputRangeEight.oninput = function () {
    InputRangeValueEight.innerHTML = InputRangeEight.value;
}

InputRangeValueNine.innerHTML = InputRangeNine.value;

InputRangeNine.oninput = function () {
    InputRangeValueNine.innerHTML = InputRangeNine.value;
}

/* UP-BUTTON */
const UP_BUTTON = document.getElementById("button-up");
UP_BUTTON.addEventListener("click", function (event) {
    event.preventDefault();
    const BLOCKid = UP_BUTTON.getAttribute("href");
    document.querySelector(BLOCKid).scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

function showButtonUp(parameter) {
    
}

/* BLOCK MODAL */