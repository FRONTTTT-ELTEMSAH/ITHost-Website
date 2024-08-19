// Swiper Blog slider
var swiper = new Swiper(".slider", {
  pagination: {
    el: ".swiper-pagination",
    daynamicBullests: true,
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
  },
});
