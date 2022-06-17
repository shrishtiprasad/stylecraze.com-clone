import footer from "../components/footer.js";
document.getElementById('footer').innerHTML = footer();

import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();


const data = [
    {
      "card href": "https://www.stylecraze.com/articles/ginger-help-in-hair-growth/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2013/11/Does-Ginger-Aid-Hair-Growth-Benefits-Uses-And-More-Banner.jpg.webp",
      "truncate_content": "Does Ginger Aid Hair Growth? Benefits, Uses, And More",
      "pull-left": "By",
      "pull": "Arshiya Syeda",
      "pull-left href": "https://www.stylecraze.com/author/arshiya/",
      "pull-left 3": ""
    },
    {
      "card href": "https://www.stylecraze.com/articles/how-to-hydrate-hair-after-bleaching/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2020/11/How-To-Hydrate-Hair-After-Bleaching-The-Ultimate-Guide.jpg.webp",
      "truncate_content": "How To Hydrate Hair After Bleaching: The Ultimate Guide",
      "pull-left": "Medically Reviewed by",
      "pull": ", MBBS, MBBS",
      "pull-left href": "https://www.stylecraze.com/dc/dr-shruti-chavan/",
      "pull-left 3": "Dr. Shruti Chavan"
    },
    {
      "card href": "https://www.stylecraze.com/articles/how-to-make-gray-hair-shiny/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2021/03/How-To-Make-Gray-Hair-Shine.jpg.webp",
      "truncate_content": "How To Make Gray Hair Shine",
      "pull-left": "Reviewed by",
      "pull": "Tiffany Young",
      "pull-left href": "https://www.stylecraze.com/dc/tiffany-young/",
      "pull-left 3": "Tiffany Young"
    },
    {
      "card href": "https://www.stylecraze.com/articles/psoriasis-and-hair-loss/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2021/03/Psoriasis-Hair-Loss-Causes-And-Treatment.jpg.webp",
      "truncate_content": "Scalp Psoriasis Hair Loss: Causes, Treatment, And Prevention",
      "pull-left": "Medically Reviewed by",
      "pull-left 2": ", PhD, PhD",
      "pull-left href": "https://www.stylecraze.com/dc/dr-sergio-va%C3%B1%C3%B3-galv%C3%A1n/",
      "pull": "Dr. Sergio Vañó Galván"
    },
    {
      "card href": "https://www.stylecraze.com/articles/nettle-for-hair/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2021/02/How-To-Use-Nettle-To-Promote-Hair-Health.jpg.webp",
      "truncate_content": "How To Use Nettle To Promote Hair Health",
      "pull-left": "By",
      "pull-left 2": "Swathi Handoo",
      "pull-left href": "https://www.stylecraze.com/author/swathihandoo/",
      "pull": "Swathi Handoo"
    },
    {
      "card href": "https://www.stylecraze.com/articles/how-long-to-keep-henna-in-hair/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2021/02/How-Long-To-Keep-Henna-On-The-Hair-.jpg.webp",
      "truncate_content": "How Long To Keep Henna On The Hair & The Right Way To Apply",
      "pull-left": "Reviewed by",
      "pull-left 2": ", Cosmetologist, Cosmetologist",
      "pull-left href": "https://www.stylecraze.com/dc/ghanima-abdullah/",
      "pull": "Ghanima Abdullah"
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