const all = document.querySelector(".case__filters--all");
const brand = document.querySelector(".case__filters--branding");
const design = document.querySelector(".case__filters--design");
const ecommerce = document.querySelector(".case__filters--ecommerce");
const singleImageWrapper = document.querySelectorAll(".case__images--wrapper");
const singleImage = document.querySelectorAll(".case__images--single");
const singleImageMain = document.querySelectorAll(".case__images--main");
const content = document.querySelectorAll(".case__content");

const textFilter = document.querySelectorAll(".text__main");
const textNumber = document.querySelectorAll(".text__abs");

const titleImage = document.querySelectorAll(".title__image");
const textImage = document.querySelectorAll(".text__image");

all.addEventListener("click", (event) => {
  console.log("clicked");

  textFilter.forEach((text,index) => {
    text.classList.remove("active");
    textNumber[index].classList.remove("active");
  })

  textFilter[0].classList.add("active");
  textNumber[0].classList.add("active");
  singleImageWrapper[0].style.display = "block";
  singleImageWrapper[1].style.display = "block";
  singleImageWrapper[2].style.display = "block";
  singleImageWrapper[3].style.display = "block";
  singleImageWrapper[3].style.marginTop = "-100px";
  singleImageWrapper[3].style.gridColumnStart = "3";
})

brand.addEventListener("click", (event) => {
  console.log("clicked");
  textFilter.forEach((text,index) => {
    text.classList.remove("active");
    textNumber[index].classList.remove("active");
  })

  textFilter[1].classList.add("active");
  textNumber[1].classList.add("active");

  singleImageWrapper[0].style.display = "none";
  singleImageWrapper[1].style.display = "none";
  singleImageWrapper[2].style.display = "block";
  singleImageWrapper[3].style.display = "block";
  singleImageWrapper[3].style.marginTop = "0px";
  singleImageWrapper[3].style.gridColumnStart = "2";
})

design.addEventListener("click", (event) => {
  console.log("clicked");

  console.log("clicked");
  textFilter.forEach((text,index) => {
    text.classList.remove("active");
    textNumber[index].classList.remove("active");
  })

  textFilter[2].classList.add("active");
  textNumber[2].classList.add("active");


  singleImageWrapper[0].style.display = "block";
  singleImageWrapper[1].style.display = "none";
  singleImageWrapper[2].style.display = "none";
  singleImageWrapper[3].style.display = "block";
  singleImageWrapper[3].classList.add("active-image");
  singleImageWrapper[3].style.marginTop = "0px";
  singleImageWrapper[3].style.gridColumnStart = "2";
})

ecommerce.addEventListener("click", (event) => {
  console.log("clicked");

  console.log("clicked");
  textFilter.forEach((text,index) => {
    text.classList.remove("active");
    textNumber[index].classList.remove("active");
  })

  textFilter[3].classList.add("active");
  textNumber[3].classList.add("active");


  singleImageWrapper[0].style.display = "block";
  singleImageWrapper[1].style.display = "block";
  singleImageWrapper[2].style.display = "none";
  singleImageWrapper[3].style.display = "none";
})

singleImage.forEach((image,index) => {
  image.addEventListener("mouseover", () => {
    console.log("hovering");
    image.style.transform = "scale(1.1)";
    image.style.transition = "all .7s ease";
    content[index].classList.add("height");
    titleImage[index].style.opacity = "1";
    titleImage[index].style.transition = "opacity .7s ease-in-out";
    textImage[index].style.opacity = "1";
    textImage[index].style.transition = "opacity .7s ease-in-out";
  })
})

singleImage.forEach((image,index) => {
  image.addEventListener("mouseout", () => {
    console.log("leaving");
    image.style.transform = "scale(1)";
    content[index].classList.remove("height");
    titleImage[index].style.opacity = "0";
    textImage[index].style.opacity = "0";
  })
})

content.forEach((image,index) => {
  image.addEventListener("mouseover", () => {
    console.log("hovering");
    content[index].classList.add("height");
    titleImage[index].style.opacity = "1";
    titleImage[index].style.transition = "opacity .7s ease-in-out";
    textImage[index].style.opacity = "1";
    textImage[index].style.transition = "opacity .7s ease-in-out";
  })
})

content.forEach((image,index) => {
  image.addEventListener("mouseout", () => {
    console.log("leaving");
    content[index].classList.remove("height");
    titleImage[index].style.opacity = "0";
    textImage[index].style.opacity = "0";
  })
})


const cards = document.querySelectorAll(".cards__wrap");
const cardsImage = document.querySelectorAll(".cards__img--main");
const title = document.querySelectorAll(".title__cards");
const text = document.querySelectorAll(".text__cards");

cards.forEach((card,index) => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "translateY(-10px)";
    card.style.transition = "transform .5s ease-in-out";
    cardsImage[index].style.transform = "scale(1.1)";
    cardsImage[index].style.transition = "transform .5s ease-in-out";
    title[index].style.color = "orange";
    title[index].style.transition = "color .5s ease-in-out";
  })
})

cards.forEach((card,index) => {
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px)";
    card.style.transition = "transform .5s ease-in-out";
    cardsImage[index].style.transform = "scale(1)";
    cardsImage[index].style.transition = "transform .5s ease-in-out";
    title[index].style.color = "black";
    title[index].style.transition = "color .5s ease-in-out";
  })
})
