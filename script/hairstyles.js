import footer from "../components/footer.js";
document.getElementById('footer').innerHTML = footer();

import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();

const data = [
    {
      "card href": "https://www.stylecraze.com/articles/should-i-cut-my-bangs/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2018/10/Should-You-Get-Bangs-The-Truth.jpg.webp",
      "truncate_content": "Should I Get Bangs? Things To Consider And Styling Tips",
      "pull": "Anjali Sayee",
      "pull-left href": "https://www.stylecraze.com/author/anjalisayee/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/best-bob-braids-hairstyles/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2018/10/25-Exquisite-Bob-Braids-You-Need-To-Try-Out.jpg.webp",
      "truncate_content": "25 Exquisite Bob Braid Hairstyles & How To Style Them",
      "pull": "Anjali Sayee",
      "pull-left href": "https://www.stylecraze.com/author/anjalisayee/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/stunning-braided-updo-hairstyles-for-black-women/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2015/03/20-Beautiful-Braided-Updos-For-Black-Women-1.jpg.webp",
      "truncate_content": "20 Beautiful Braided Updos For Black Women",
      "pull": "Anjali Sayee",
      "pull-left href": "https://www.stylecraze.com/author/anjalisayee/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/3-simple-techniques-to-get-wavy-long-hair/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2012/12/Techniques-To-Get-Chic-Wavy-Hair.jpg.webp",
      "truncate_content": "10 Easy Ways To Get Wavy Hair At Home",
      "pull": "Arshiya Syeda",
      "pull-left href": "https://www.stylecraze.com/author/arshiya/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/best-hairstyles-for-short-hair/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2013/11/20-Incredible-DIY-Short-Hairstyles.jpg.webp",
      "truncate_content": "20 Incredible DIY Short Hairstyles For Women To Try In 2022",
      "pull": "Anjali Sayee",
      "pull-left href": "https://www.stylecraze.com/author/anjalisayee/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/easy-to-do-braided-hairstyle/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2012/09/45-Stunningly-Easy-Braid-Hairstyles.jpg.webp",
      "truncate_content": "45 Stunningly Easy Braid Hairstyles",
      "pull": "Anjali Sayee",
      "pull-left href": "https://www.stylecraze.com/author/anjalisayee/"
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
  window.location.href = "hairstylesArticle.html";
})