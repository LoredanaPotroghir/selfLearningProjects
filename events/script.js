let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuStatus = false;

function menuToggle() {
    if (menuStatus == false) {
        menu.style.marginLeft = "0px";
        menuStatus = true;
    } else if (menuStatus == true) {
        menu.style.marginLeft = "-345px";
        menuStatus = false;
    }
}
menuBtn.onclick = menuToggle;
