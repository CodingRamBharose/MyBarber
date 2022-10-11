var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("menubar");
var menu = document.getElementById("menu");

sidenav.style.right = "-200px";

menubtn.onclick = function(){
    if(sidenav.style.right == "-200px"){
        sidenav.style.right = "0";
        menu.src = "images/close.png";
        
    }
    else{
        sidenav.style.right = "-200px";
        menu.src = "images/menu.png";
    }
}