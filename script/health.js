import footer from "../components/footer.js";
document.getElementById('footer').innerHTML = footer();

import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();

const data = [
    {
      "card href": "https://www.stylecraze.com/articles/benefits-of-moringa-seeds-for-skin-hair-and-health/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2013/09/Benefits-Of-Moringa-Seeds-For-Health-Skin-And-Hair-1.jpg.webp",
      "truncate_content": "Benefits Of Moringa Seeds For Health, Skin, And Hair",
      "pull-left": "Reviewed by , RDN",
      "pull-left 2": ", RDN",
      "pull": "Ariana Fiorita",
      "pull-left href": "https://www.stylecraze.com/dc/ariana-fiorita/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/serious-side-effects-of-tomatoes/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2015/03/243-serious-side-effects-of-tomatoes-500797844.jpg.webp",
      "truncate_content": "10 Side Effects Of Eating Lot of Tomatoes",
      "pull-left": "Reviewed by , RDN",
      "pull-left 2": ", (RDN, PHD, MD)",
      "pull": "Ionut Ignat",
      "pull-left href": "https://www.stylecraze.com/dc/ionut-ignat/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/fenugreek-help-cure-diabetes/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2013/09/How-Does-Fenugreek-Help-Cure-Diabetes-2.jpg.webp",
      "truncate_content": "How To Use Fenugreek Seeds For Diabetes Treatment",
      "pull-left": "Reviewed by , MS, RD, LD",
      "pull-left 2": ", MS, RD, LD",
      "pull": "Cheryl Mussatto",
      "pull-left href": "https://www.stylecraze.com/dc/cheryl-mussatto/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/pecans/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2021/07/10-Potential-Benefits-Of-Pecans-For-Skin-Hair-And-Health.jpg.webp",
      "truncate_content": "10 Potential Benefits Of Pecans For Skin, Hair, And Health",
      "pull-left": "Medically Reviewed by",
      "pull-left 2": ", DIP NT, mBANT, mANP, mGNC  , DIP NT, mBANT, mANP, mGNC",
      "pull": "Kelly Mulhall",
      "pull-left href": "https://www.stylecraze.com/dc/kelly-mulhall/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/benefits-of-fenugreek-sprouts-for-skin-hair-and-health/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2013/09/1287-14-Amazing-Benefits-Of-Fenugreek-Sprouts-For-Skin-Hair-And-Health-shutterstock_73182520.jpg.webp",
      "truncate_content": "14 Amazing Benefits Of Fenugreek Sprouts For Skin, Hair And Health",
      "pull-left": "By",
      "pull-left 2": "Tanya Choudhary",
      "pull": "Tanya Choudhary",
      "pull-left href": "https://www.stylecraze.com/author/tanya-choudhary-2-2-2/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/benefits-of-potato-for-skin-hair-and-health/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2013/09/Potatoes-Benefits-For-Health-Skin-And-Hair.jpg.webp",
      "truncate_content": "24 Health Benefits Of Potatoes, Types, And Recipes",
      "pull-left": "Reviewed by , MS, RDN",
      "pull-left 2": ", MS, RDN",
      "pull": "Alexandra Dusenberry",
      "pull-left href": "https://www.stylecraze.com/dc/alexandra-dusenberry/"
    }
]

data.map(function(elem){

    let div = document.createElement('div');

    let img = document.createElement('img');
    img.src = elem.card;

    let title = document.createElement('p');
    title.innerText = elem.truncate_content;

    let author = document.createElement('p');
    author.innerText = "BY " + elem.pull;
    author.setAttribute("id", "writer");

    div.append(img, title, author);
    document.getElementById('container').append(div);
})

document.getElementById("bar").addEventListener("click", function(){
  showNav();
})

function showNav(){
  // clicked++;
  // console.log(clicked);
  document.getElementById("categories").style.visibility = "visible";
  document.getElementById("logo").style.visibility = "hidden";
  document.getElementById("categories").style.marginTop = "-70px";
  document.getElementById("bar").style.marginTop = "-70px";
}

// if(clicked%2===0){
//   document.getElementById("bar").addEventListener("click", function(){
//     hideNav();
//   })
// }

// function hideNav(){
//   document.getElementById("categories").style.visibility = "hidden";
// }


document.getElementById("makeupHover").addEventListener("click", function(){
  showMakeup();
})
function showMakeup(){
  window.location.href = "makeup.html";
}

document.getElementById("haircareHover").addEventListener("click", function(){
  showHaircare();
})
function showHaircare(){
  window.location.href = "haircare.html";
}

document.getElementById("skincareHover").addEventListener("click", function(){
  showSkincare();
})
function showSkincare(){
  window.location.href = "skincare.html";
}

document.getElementById("hairstylesHover").addEventListener("click", function(){
  showHairstyles();
})
function showHairstyles(){
  window.location.href = "hairstyles.html";
}

document.getElementById("healthHover").addEventListener("click", function(){
  showHealth();
})
function showHealth(){
  window.location.href = "health.html";
}

document.getElementById("newsHover").addEventListener("click", function(){
  showNews();
})
function showNews(){
  window.location.href = "news.html";
}

document.getElementById("logo").addEventListener("click", function(){
  window.location.href = "index.html"
})

document.getElementById("firstArticle").addEventListener("click", function(){
  window.location.href = "haircareArticle.html";
})