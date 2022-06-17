import footer from "../components/footer.js";
document.getElementById('footer').innerHTML = footer();

import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();


const data = [
    {
      "card href": "https://www.stylecraze.com/articles/makeup-tips-to-cover-varicose-veins-spider-veins/",
      "img-responsive src": "https://cdn2.stylecraze.com/wp-content/uploads/2021/01/noimage700x450.jpg.webp",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2015/07/5-Simple-Makeup-Tips-To-Cover-Varicose-Veins-Spider-Veins.jpg.webp",
      "truncate_content": "5 Simple Makeups To Cover Varicose Veins (Spider Veins)",
      "pull": "Nisha Baghadia",
      "pull-left href": "https://www.stylecraze.com/author/baghadia/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/best-makeup-ideas-for-your-gold-dress/",
      "img-responsive src": "https://cdn2.stylecraze.com/wp-content/uploads/2015/07/45-2-Best-Makeup-Ideas-For-Your-Gold-Dress-ss.jpg",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2015/07/45-2-Best-Makeup-Ideas-For-Your-Gold-Dress-ss.jpg",
      "truncate_content": "2 Best Makeup Ideas For Your Gold Dress",
      "pull": "Jyotsana Rao",
      "pull-left href": "https://www.stylecraze.com/author/jyotsanarao/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/amazing-ombre-nail-art-tutorial-with-detailed-steps-pictures/",
      "img-responsive src": "https://cdn2.stylecraze.com/wp-content/uploads/2021/01/noimage700x450.jpg.webp",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2014/02/How-To-Do-Ombre-Nails-Easily-At-Home-And-5-Design-Ideas.jpg.webp",
      "truncate_content": "How To Do Ombre Nails Like A Pro: Tutorial With Pictures",
      "pull": "Esha Saxena",
      "pull-left href": "https://www.stylecraze.com/author/eshasaxena/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/prom-makeup-ideas/",
      "img-responsive src": "https://cdn2.stylecraze.com/wp-content/uploads/2021/01/noimage700x450.jpg.webp",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2022/04/Amazing-Prom-Makeup-Ideas-And-Tips-To-Follow-In-2022.jpg.webp",
      "truncate_content": "Amazing Prom Makeup Ideas And Tips To Follow In022",
      "pull": "Sushmita Barman",
      "pull-left href": "https://www.stylecraze.com/author/sushmita_2021/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/black-girl-makeup/",
      "img-responsive src": "https://cdn2.stylecraze.com/wp-content/uploads/2021/01/noimage700x450.jpg.webp",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2021/09/Black-Girl-Makeup-Tips-A-Z-Makeup-Ideas-For-Black-Girls-Explained.jpg.webp",
      "truncate_content": "Black Girl Makeup Ideas For Different Occasions",
      "pull": "Sushmita Barman",
      "pull-left href": "https://www.stylecraze.com/author/sushmita_2021/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/how-to-do-nail-art-at-home/",
      "img-responsive src": "https://cdn2.stylecraze.com/wp-content/uploads/2021/01/noimage700x450.jpg.webp",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2012/12/957-403149736-orginal.jpg.webp",
      "truncate_content": "10 Best And Easy Nail Art Designs To Try At Home In 2022",
      "pull": "Shalini Roy",
      "pull-left href": "https://www.stylecraze.com/author/shaliniroy/"
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

document.getElementById("firstArticle").addEventListener("click", function(){
  window.location.href = "https://www.stylecraze.com/articles/office-makeup-the-right-way/";
})

document.getElementById("firstArticle").addEventListener("click", function(){
  window.location.href = "./articles/makeupArticle.html";
})