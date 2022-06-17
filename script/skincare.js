import footer from "../components/footer.js";
document.getElementById('footer').innerHTML = footer();

import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();


const data = [
    {
      "card href": "https://www.stylecraze.com/articles/effective-homemade-moisturizers-for-dry-skin/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2013/12/10-Simple-Homemade-Moisturizers-For-Dry-Skin.jpg.webp",
      "truncate_content": "10 Simple Homemade Moisturizers For Dry Skin",
      "pull-left": "Medically Reviewed by",
      "pull-left 2": ", MD, FAAD, MD, FAAD",
      "pull": "Dr. Vindhya L Veerula",
      "pull-left href": "https://www.stylecraze.com/dc/dr-vindhya-l-veerula/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/things-to-consider-when-choosing-a-sunscreen/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2013/12/How-To-Choose-Sunscreen.jpg.webp",
      "truncate_content": "How To Choose Sunscreen",
      "pull-left": "Medically Reviewed by",
      "pull-left 2": ", MBBS, DDV, MD , MBBS, DDV, MD",
      "pull": "Dr. Rinky Kapoor",
      "pull-left href": "https://www.stylecraze.com/dc/dr-rinky-kapoor/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/aloe-vera-help-in-treating-acne-pimples/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2013/12/Aloe-Vera-For-Acne-9-Ways-To-Use-Aloe-Vera-For-Acne-And-Pimples.jpg.webp",
      "truncate_content": "Aloe Vera For Acne: 9 Ways To Use Aloe Vera For Pimples",
      "pull-left": "Medically Reviewed by",
      "pull-left 2": ", BAMS, Ayurveda Specialist, BAMS",
      "pull": "Vd. Naveen Sharma",
      "pull-left href": "https://www.stylecraze.com/dc/vd-naveen-sharma/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/nutritious-foods-to-fight-aging/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2013/12/35-Best-Anti-Aging-Foods-For-Younger-looking-Skin.jpg.webp",
      "truncate_content": "Top 35 Anti-Aging Foods That Keep Your Skin Youthful",
      "pull-left": "Reviewed by , MS, RDN",
      "pull-left 2": ", MS, RDN",
      "pull-left ": "Alexandra Dusenberry",
      "pull-left href": "https://www.stylecraze.com/dc/alexandra-dusenberry/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/how-to-prevent-and-remove-pimplesacne-21-effective-methods/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2013/02/How-To-Prevent-Pimples-And-Acne-Naturally-Tips-And-Home-Remedies.jpg.webp",
      "truncate_content": "13 Tips And Remedies To Prevent Acne And Pimples Naturally",
      "pull-left": "Medically Reviewed by",
      "pull-left 2": ", MD, MD",
      "pull": "Cara Downey",
      "pull-left href": "https://www.stylecraze.com/dc/cara-downey/"
    },
    {
      "card href": "https://www.stylecraze.com/articles/4-papaya-face-pack-tutorials-with-pictures-and-steps/",
      "card": "https://cdn2.stylecraze.com/wp-content/uploads/2013/01/7-Papaya-Face-Packs-For-Glowing-Fair-And-Smooth-Skin-1.jpg.webp",
      "truncate_content": "10 Papaya Face Packs For Glowing, Fair, And Smooth Skin",
      "pull-left": "By",
      "pull-left 2": "Ramona Sinha",
      "pull": "Ramona Sinha",
      "pull-left href": "https://www.stylecraze.com/author/ramonasinha/"
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
  window.location.href = "skincareArticle.html";
})