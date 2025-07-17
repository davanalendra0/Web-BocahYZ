document.addEventListener('DOMContentLoaded', () => {
  // ==== Fungsi Emoji Berdasarkan Nilai Slider ====
  function getEmoji(value) {
    if (value < 1.5) return "😢";
    if (value < 2.5) return "😐";
    if (value < 3.5) return "😊";
    if (value < 4.5) return "😄";
    return "🤩";
  }

  // ==== Toggle Menu Navigasi (Mobile) ====
  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => navMenu.classList.remove('active'))
    );
  }

  // ==== Swiper Gallery ====
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

  // ==== Footer Emoji Slider ====
  const footerSlider = document.getElementById('footer-slider');
  const footerEmoji = document.getElementById('footer-emoji');

  if (footerSlider && footerEmoji) {
    // Set emoji awal saat halaman dimuat
    footerEmoji.textContent = getEmoji(parseFloat(footerSlider.value));

    // Ubah emoji saat slider digeser
    footerSlider.addEventListener('input', () => {
      footerEmoji.textContent = getEmoji(parseFloat(footerSlider.value));
    });
  }
});
