// Navigation toggle

const navBtn = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    mobileNav.classList.remove("toggle");
  });
});

navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("toggle");
});

// Swiper

var mySwiper = new Swiper(".swiper-container", {
  autoHeight: false,
  grabCursor: true,
  slidesPerView: 3,
  autoplay: true,
  loop: true,
  speed: 400,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 150,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 305,
    },
  },
});
