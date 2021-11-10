let toggleNavStatus = false;
let toggle = function () {
    let Sidebar = document.querySelector(".Side-bar");
    let SidebarUl = document.querySelector(".Side-bar ul");
    let SidebarTitle = document.querySelector(".Side-bar ");
    let SidebarLinks = document.querySelectorAll(".Side-bar a");

    console.log(SidebarTitle);
    if (toggleNavStatus === false) {
        SidebarUl.style.visibility = "visible";
        Sidebar.style.width = "272px";
        SidebarTitle.style.opacity = "0.5";

        let arrayLength = SidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            SidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        Sidebar.style.width = "50px";
        SidebarTitle.style.opacity = "0";

        let arrayLength = SidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            SidebarLinks[i].style.opacity = "0";
        }
        SidebarUl.style.visibility = "visible";
        toggleNavStatus = false;
    }
};
