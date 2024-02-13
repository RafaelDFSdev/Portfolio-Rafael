const menuButton = document.getElementById("menu");
const NavBar = document.querySelector(".responsive");

function showNav() {
    const computedStyle = window.getComputedStyle(NavBar); 
    const height = parseFloat(computedStyle.height); 

    if(height === 0) { 
        NavBar.style.height = "30vh";
    } else {
        NavBar.style.height = "0"; 
    }
}