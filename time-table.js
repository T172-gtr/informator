document.addEventListener('DOMContentLoaded', () => {
  const viewClassesList = document.getElementById('view-classes-list');
  const viewCarousel = document.getElementById('view-carousel');
  const carouselClassTitle = document.getElementById('carouselClassTitle');
  const cardClassLabel = document.getElementById('cardClassLabel');
  const btnBackToClasses = document.getElementById('btnBackToClasses');

  let swiperInstance = null;

  // Определение индекса дня недели (ПН=0 ... ПТ=4)
  function getCurrentDayIndex() {
    const day = new Date().getDay();
    return (day >= 1 && day <= 5) ? day - 1 : 0;
  }

  // Запуск карусели Swiper
  function setupSwiper() {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
    }
    swiperInstance = new Swiper('#swiperContainer', {
      initialSlide: getCurrentDayIndex(),
      centeredSlides: true,
      slidesPerView: 1.22,
      spaceBetween: 14,
      speed: 300,
      navigation: {
        prevEl: '#btnPrev',
        nextEl: '#btnNext',
      },
    });
  }

  // Переход к карусели выбранного класса
  function openClassSchedule(className) {
    if (carouselClassTitle) carouselClassTitle.textContent = `${className} КЛАСС`;
    if (cardClassLabel) cardClassLabel.textContent = `Класс ${className}`;

    viewClassesList.style.display = 'none';
    viewCarousel.style.display = 'block';

    setupSwiper();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Возврат к списку классов
  function openClassesList() {
    viewCarousel.style.display = 'none';
    viewClassesList.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Слушатели клика по кнопкам классов
  document.querySelectorAll('.class-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const className = btn.dataset.class;
      openClassSchedule(className);
    });
  });

  // Возврат к списку классов
  if (btnBackToClasses) {
    btnBackToClasses.addEventListener('click', openClassesList);
  }
});