const swiper = new Swiper('.slider', {
  // Navigation arrows
  navigation: {
    nextEl: '.start-page__arrow.swiper-button-next',
    prevEl: '.start-page__arrow.swiper-button-prev',
  },
});

// TABS
const tabItems = document.querySelectorAll('.tabs__item');
const navItems = document.querySelectorAll('.nav__item');

const changeClassActive = (event, selector) => {
  const elements = document.querySelectorAll(`.${selector}`);

  elements.forEach((item) => item.classList.remove('active'));

  event.target.classList.add('active');
};

document.addEventListener('click', (e) => {
  if (e.target.closest('.nav__item')) {
    changeClassActive(e, 'nav__item');

    const nextActiveIndex = [...navItems].findIndex(
      (item) => item === e.target
    );

    if (nextActiveIndex >= 0) {
      tabItems.forEach((item) => item.classList.remove('active'));
      tabItems[nextActiveIndex].classList.add('active');
    }
  }
});
