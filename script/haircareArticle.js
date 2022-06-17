import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();

document.getElementById("bar").addEventListener("click", function(){
    showNav();
})

function showNav(){
    document.getElementById("categories").style.visibility = "visible";
    document.getElementById("logo").style.visibility = "hidden";
    document.getElementById("categories").style.marginTop = "-70px";
    document.getElementById("bar").style.marginTop = "-70px";
}

document.getElementById("logo").addEventListener("click", function(){
    window.location.href = "index.html"
})

