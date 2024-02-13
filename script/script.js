/* show navbar */

const menuButton = document.getElementById("menu");
const NavBar = document.querySelector(".responsive");

function showNav() {
    if(NavBar.style.height==="0vh"){
        NavBar.style.height="30vh";
    }else{
        NavBar.style.height="0vh"
    }
}