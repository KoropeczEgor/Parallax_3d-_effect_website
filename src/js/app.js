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
new Swiper(".slider", {
  // direction: "vertical",
  speed: 2400,
  mousewheel: {
    enabled: true,
    sensitivity: 2.4,
  },
  spaceBetween: 18,
  parallax: true,
  freeMode: true,
});
