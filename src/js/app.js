"use strict";

//layers
document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -0.003}deg;
        --move-y: ${(e.clientX - window.innerHeight / 2) * -0.003}deg;
        `,
  });
});

//Slider
const sliderWitcher = new Swiper(".slider__witcher", {
  speed: 2400,
  mousewheel: {
    enabled: true,
    sensitivity: 2.4,
  },
  spaceBetween: 18,
  parallax: true,
  freeMode: true,
});

// slider main

const sliderMain = new Swiper(".slider__main", {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
});

const sliderBg = new Swiper(".slider__bg", {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5,
});

sliderMain.controller.control = sliderBg;

document.querySelectorAll(".slider__main__item").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});

let desc = document.querySelector(".description__main");
sliderMain.on("slideChange", (e) => {
  sliderMain.activeIndex > 0
    ? desc.classList.add("hidden")
    : desc.classList.remove("hidden");
});
