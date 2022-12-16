// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 4,
//     spaceBetween: 15,
//     slidesPerGroup: 1,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints:{
//       0: {
//           slidesPerView: 2,
//       },
//       550: {
//           slidesPerView: 2,
//       },
//       650: {
//           slidesPerView: 2,
//       },
//       800: {
//         slidesPerView: 3,
//     },
//       950: {
//           slidesPerView: 3,
//       },
//       1150: {
//         slidesPerView: 4,
//     }
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


//   // dropdowm navbar js 

  const tabsBox = document.querySelector(".tabs-box"),
  allTabs = tabsBox.querySelectorAll(".tab"),
  arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = (scrollVal) => {
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
  arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
      // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
      let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -150 : 150;
      handleIcons(scrollWidth);
  });
});

allTabs.forEach(tab => {
  tab.addEventListener("click", () => {
      tabsBox.querySelector(".active").classList.remove("active");
      tab.classList.add("active");
  });
});

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons(tabsBox.scrollLeft)
}

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


// var swiper1 = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 14,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints:{
//     0: {
//         slidesPerView: 2,
//     },
//     550: {
//         slidesPerView: 2,
//     },
//     650: {
//         slidesPerView: 2,
//     },
//     800: {
//       slidesPerView: 3,
//   },
//     950: {
//         slidesPerView: 3,
//     },
//     1150: {
//       slidesPerView: 4,
//   }
//   },
// });

// nav dropdown menu 

window.onclick = function(event){
  if(!event.target.matches('.tab'))
  var dd = document.getElementsByClassName('container');

  for(var i = 0; i < dd.length; i++){
    var x = dd[i];

    if(x.style.display = "block"){
      x.style.display = "none";
    }
  }
}


function myNewIn() {
  let zero = document.getElementById("newIn");
  if (zero.style.display === "block") {
    zero.style.display = "none";
  } else {
    zero.style.display = "block";
  }
}

function myBestSeller() {
  let one = document.getElementById("best-seller");
  if (one.style.display === "block") {
    one.style.display = "none";
  } else {
    one.style.display = "block";
  }
}


function myClothing() {
  let two = document.getElementById("clothing");
  if (two.style.display === "block") {
    two.style.display = "none";
  } else {
    two.style.display = "block";
  }
}

function myWinter() {
  let three = document.getElementById("winter");
  if (three.style.display === "block") {
    three.style.display = "none";
  } else {
    three.style.display = "block";
  }
}

function myBedroom() {
  let bedroom = document.getElementById("bedroom");
  if (bedroom.style.display === "block") {
    bedroom.style.display = "none";
  } else {
    bedroom.style.display = "block";
  }
}

function myDinKit() {
  let dinkit = document.getElementById("dinning-kitchen");
  if (dinkit.style.display === "block") {
    dinkit.style.display = "none";
  } else {
    dinkit.style.display = "block";
  }
}

function myDecor() {
  let decor = document.getElementById("decor");
  if (decor.style.display === "block") {
    decor.style.display = "none";
  } else {
    decor.style.display = "block";
  }
}

function myBathroom() {
  let bathroom = document.getElementById("bathroom");
  if (bathroom.style.display === "block") {
    bathroom.style.display = "none";
  } else {
    bathroom.style.display = "block";
  }
}

function myTravel() {
  let travel = document.getElementById("travel");
  if (travel.style.display === "block") {
    travel.style.display = "none";
  } else {
    travel.style.display = "block";
  }
}

function myLingeria() {
  let four = document.getElementById("ling-kint");
  if (four.style.display === "block") {
    four.style.display = "none";
  } else {
    four.style.display = "block";
  }
}

function myPremium() {
  let five = document.getElementById("premium");
  if (five.style.display === "block") {
    five.style.display = "none";
  } else {
    five.style.display = "block";
  }
}

function myPlusSize() {
  let six = document.getElementById("plus-size");
  if (six.style.display === "block") {
    six.style.display = "none";
  } else {
    six.style.display = "block";
  }
}

function myBaby() {
  let baby = document.getElementById("baby");
  if (baby.style.display === "block") {
    baby.style.display = "none";
  } else {
    baby.style.display = "block";
  }
}

function myJunior() {
  let junior = document.getElementById("junior");
  if (junior.style.display === "block") {
    junior.style.display = "none";
  } else {
    junior.style.display = "block";
  }
}

function mySenior() {
  let senior = document.getElementById("senior");
  if (senior.style.display === "block") {
    senior.style.display = "none";
  } else {
    senior.style.display = "block";
  }
}

function myCollection() {
  let collection = document.getElementById("collection");
  if (collection.style.display === "block") {
    collection.style.display = "none";
  } else {
    collection.style.display = "block";
  }
}


function myShoes() {
  let seven = document.getElementById("shoes");
  if (seven.style.display === "block") {
    seven.style.display = "none";
  } else {
    seven.style.display = "block";
  }
}

function myAccessories() {
  let eight = document.getElementById("accessories");
  if (eight.style.display === "block") {
    eight.style.display = "none";
  } else {
    eight.style.display = "block";
  }
}

function myFragrance() {
  let nine = document.getElementById("fragrance");
  if (nine.style.display === "block") {
    nine.style.display = "none";
  } else {
    nine.style.display = "block";
  }
}

function myHotOffer() {
  let ten = document.getElementById("hotOffer");
  if (ten.style.display === "block") {
    ten.style.display = "none";
  } else {
    ten.style.display = "block";
  }
}

// add to wishlist slider 

var swiper = new Swiper(".mySwiper", {
  // cssMode: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints:{
          0: {
              slidesPerView: 2,
              spaceBetween: 5,
          },
          550: {
              slidesPerView: 2,
          },
          650: {
              slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
        },
          950: {
              slidesPerView: 3,
          },
          1150: {
            slidesPerView: 4,
        }
        },
  mousewheel: true,
  keyboard: true,
});

// read content 

function readMore() {
  let ten = document.getElementById("all-content");
  if (ten.style.display === "block") {
    ten.style.display = "none";
  } else {
    ten.style.display = "block";
  }
}
