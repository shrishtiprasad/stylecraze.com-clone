import footer from "../components/footer.js";
document.getElementById('footer').innerHTML = footer();

import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();

const data = [
    {
      "card href": "https://www.stylecraze.com/articles/shirts-to-wear-with-leggings/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2019/04/17-Shirts-That-Go-Well-With-Leggings.jpg.webp",
      "truncate_content": "17 Stylish Tops And Shirts To Wear With Leggings",
      "pull": "Pratima Ati",
      "pull-left href": "https://www.stylecraze.com/author/pratimaincnut-com/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/top-fashion-magazines/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2019/02/Banner.jpg",
      "truncate_content": "Top 13 Fashion Magazines In The World",
      "pull": "Pratima Ati",
      "pull-left href": "https://www.stylecraze.com/author/pratimaincnut-com/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/boutiques-in-bangalore/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2017/10/Top-10-Boutiques-In-Bangalore.jpg",
      "truncate_content": "Top 10 Boutiques In Bangalore",
      "pull": "Pratima Ati",
      "pull-left href": "https://www.stylecraze.com/author/pratimaincnut-com/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/best-love-tattoo-designs/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2019/12/35-Best-Love-Tattoo-Designs-That-Showcase-Your-Love.jpg.webp",
      "truncate_content": "35 Best Love Tattoo Designs That Showcase Your Love",
      "pull": "Jyotsana Rao",
      "pull-left href": "https://www.stylecraze.com/author/jyotsanarao/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/reception-dress-for-indian-bride/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2019/04/20-Best-Reception-Dress-For-Indian-Brides.jpg.webp",
      "truncate_content": "20 Best Reception Dress For Indian Brides",
      "pull": "Pratima Ati",
      "pull-left href": "https://www.stylecraze.com/author/pratimaincnut-com/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/best-fashion-blogs/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2018/05/Best-Fashion-Bloggers-You-Should-Follow-This-Year.jpg.webp",
      "truncate_content": "15 Best Fashion Bloggers You Should Follow This Year",
      "pull": "Pratima Ati",
      "pull-left href": "https://www.stylecraze.com/author/pratimaincnut-com/"
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