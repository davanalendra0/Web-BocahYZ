const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => navMenu.classList.remove('active'))
);

new Swiper('.gallery-slider', {
  loop: true,
  autoplay: {
    delay: 2300,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});