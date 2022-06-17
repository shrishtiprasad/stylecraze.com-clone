import footer from "../components/footer.js";
document.getElementById('footer').innerHTML = footer();

import header from "../components/header.js";
document.getElementById('header').innerHTML = header();

//-----------------------|| 1st -> makeuphover  ||---------------------

document.getElementById("makeupHover").addEventListener("mouseenter", function(){
    makeupHover();
})
document.getElementById("makeupDiv").addEventListener("mouseenter", function(){
    makeupHover();
})
function makeupHover() {
    document.getElementById("makeupDiv").style.visibility = "visible";
}

document.getElementById("makeupHover").addEventListener("mouseleave", function(){
    makeupHover2();
})
document.getElementById("makeupDiv").addEventListener("mouseleave", function(){
    makeupHover2();
})
function makeupHover2(){
    document.getElementById("makeupDiv").style.visibility = "hidden";
}


//-----------------------|| 2nd -> haircarehover  ||----------------------

document.getElementById("haircareHover").addEventListener("mouseenter", function(){
    haircareHover();
})
document.getElementById("haircareDiv").addEventListener("mouseenter", function(){
    haircareHover();
})
function haircareHover() {
    document.getElementById("haircareDiv").style.visibility = "visible";
}

document.getElementById("haircareHover").addEventListener("mouseleave", function(){
    haircareHover2();
})
document.getElementById("haircareDiv").addEventListener("mouseleave", function(){
    haircareHover2();
})
function haircareHover2(){
    document.getElementById("haircareDiv").style.visibility = "hidden";
}


//---------------------|| 3rd -> skincarehover  ||-------------------------

document.getElementById("skincareHover").addEventListener("mouseenter", function(){
    skincareHover();
})
document.getElementById("skincareDiv").addEventListener("mouseenter", function(){
    skincareHover();
})
function skincareHover() {
    document.getElementById("skincareDiv").style.visibility = "visible";
}

document.getElementById("skincareHover").addEventListener("mouseleave", function(){
    skincareHover2();
})
document.getElementById("skincareDiv").addEventListener("mouseleave", function(){
    skincareHover2();
})
function skincareHover2(){
    document.getElementById("skincareDiv").style.visibility = "hidden";
}


// -----------------||  4th -> hairstyleshover  ||---------------------------

document.getElementById("hairstylesHover").addEventListener("mouseenter", function(){
    hairstylesHover();
})
document.getElementById("hairstylesDiv").addEventListener("mouseenter", function(){
    hairstylesHover();
})
function hairstylesHover() {
    document.getElementById("hairstylesDiv").style.visibility = "visible";
}

document.getElementById("hairstylesHover").addEventListener("mouseleave", function(){
    hairstylesHover2();
})
document.getElementById("hairstylesDiv").addEventListener("mouseleave", function(){
    hairstylesHover2();
})
function hairstylesHover2(){
    document.getElementById("hairstylesDiv").style.visibility = "hidden";
}


// -----------------||  5th -> healthhover  ||---------------------------

document.getElementById("healthHover").addEventListener("mouseenter", function(){
    healthHover();
})
document.getElementById("healthDiv").addEventListener("mouseenter", function(){
    healthHover();
})
function healthHover() {
    document.getElementById("healthDiv").style.visibility = "visible";
}

document.getElementById("healthHover").addEventListener("mouseleave", function(){
    healthHover2();
})
document.getElementById("healthDiv").addEventListener("mouseleave", function(){
    healthHover2();
})
function healthHover2(){
    document.getElementById("healthDiv").style.visibility = "hidden";
}


// -----------------||  6th -> newshover  ||---------------------------

document.getElementById("newsHover").addEventListener("mouseenter", function(){
    newsHover();
})
document.getElementById("newsDiv").addEventListener("mouseenter", function(){
    newsHover();
})
function newsHover() {
    document.getElementById("newsDiv").style.visibility = "visible";
}

document.getElementById("newsHover").addEventListener("mouseleave", function(){
    newsHover2();
})
document.getElementById("newsDiv").addEventListener("mouseleave", function(){
    newsHover2();
})
function newsHover2(){
    document.getElementById("newsDiv").style.visibility = "hidden";
}


// -----------------||  7th -> abouthover  ||---------------------------

document.getElementById("aboutHover").addEventListener("mouseenter", function(){
    aboutHover();
})
document.getElementById("aboutDiv").addEventListener("mouseenter", function(){
    aboutHover();
})
function aboutHover() {
    document.getElementById("aboutDiv").style.visibility = "visible";
}

document.getElementById("aboutHover").addEventListener("mouseleave", function(){
    aboutHover2();
})
document.getElementById("aboutDiv").addEventListener("mouseleave", function(){
    aboutHover2();
})
function aboutHover2(){
    document.getElementById("aboutDiv").style.visibility = "hidden";
}


//-------------------- categories linking  -------------------------

document.getElementById("makeupHover").addEventListener("click", function(){
    showMakeup();
})
document.getElementById("makeupTitle").addEventListener("click", function(){
    showMakeup();
})
function showMakeup(){
    window.location.href = "makeup.html";
}

document.getElementById("haircareHover").addEventListener("click", function(){
    showHaircare();
})
document.getElementById("haircareTitle").addEventListener("click", function(){
    showHaircare();
})
function showHaircare(){
    window.location.href = "haircare.html";
}

document.getElementById("skincareHover").addEventListener("click", function(){
    showSkincare();
})
document.getElementById("skincareTitle").addEventListener("click", function(){
    showSkincare();
})
function showSkincare(){
    window.location.href = "skincare.html";
}

document.getElementById("hairstylesHover").addEventListener("click", function(){
    showHairstyles();
})
document.getElementById("hairstyleTitle").addEventListener("click", function(){
    showHairstyles();
})
function showHairstyles(){
    window.location.href = "hairstyles.html";
}

document.getElementById("healthHover").addEventListener("click", function(){
    showHealth();
})
document.getElementById("healthTitle").addEventListener("click", function(){
    showHealth();
})
function showHealth(){
    window.location.href = "health.html";
}

document.getElementById("newsHover").addEventListener("click", function(){
    showNews();
})
document.getElementById("newsTitle").addEventListener("click", function(){
    showNews();
})
function showNews(){
    window.location.href = "news.html";
}


//---------------articles----------------

document.getElementById("sunglasses").addEventListener("click", function(){
    window.location.href = "https://www.stylecraze.com/articles/sunglasses-and-face-shapes-guide/";
})

document.getElementById("color").addEventListener("click", function(){
    window.location.href = "https://www.stylecraze.com/articles/how-to-match-the-colors-of-your-clothes/";
})

document.getElementById("nails").addEventListener("click", function(){
    window.location.href = "https://www.stylecraze.com/articles/amazing-ombre-nail-art-tutorial-with-detailed-steps-pictures/";
})

document.getElementById("meet").addEventListener("click", function(){
    window.location.href = "https://www.stylecraze.com/medical-team/";
})

document.getElementById("makeupArticle").addEventListener("click", function(){
    window.location.href = "https://www.stylecraze.com/articles/101-make-up-tips-and-tricks/";
})

document.getElementById("haircareArticle").addEventListener("click", function(){
    window.location.href = "https://www.stylecraze.com/articles/12-tips-for-getting-healthy-hair/";
})

document.getElementById("hairstyleArticle").addEventListener("click", function(){
    window.location.href = "https://www.stylecraze.com/articles/galaxy-hair-color-styles/";
})

document.getElementById("skincareArticle").addEventListener("click", function(){
    window.location.href = "https://www.stylecraze.com/articles/how-to-get-paint-off-skin/";
})

document.getElementById("healthArticle").addEventListener("click", function(){
    window.location.href = "https://www.stylecraze.com/articles/5-fruits-for-glowing-skin/";
})