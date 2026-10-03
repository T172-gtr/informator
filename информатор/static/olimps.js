document.addEventListener('DOMContentLoaded', () => {
  const viewCategories = document.getElementById('view-categories');
  const viewCards = document.getElementById('view-cards');
  const categoryTitle = document.getElementById('category-title');
  const btnBack = document.getElementById('btn-back-categories');
  const categoryLinks = document.querySelectorAll('.main-card-link[data-category]');
  const catGroups = document.querySelectorAll('.cat-group');

  // Открытие категории
  function openCategory(catId, catName) {
    if (!viewCategories || !viewCards) return;

    viewCategories.classList.add('hidden');
    viewCards.classList.remove('hidden');

    if (categoryTitle) {
      categoryTitle.textContent = catName;
    }

    catGroups.forEach(group => {
      if (group.id === catId) {
        group.classList.remove('hidden');
      } else {
        group.classList.add('hidden');
      }
    });
  }

  // Возврат к списку категорий
  function closeCategory() {
    if (!viewCategories || !viewCards) return;

    viewCards.classList.add('hidden');
    viewCategories.classList.remove('hidden');
  }

  // Навешивание кликов на карточки категорий
  categoryLinks.forEach(link => {
    link.addEventListener('click', () => {
      const catId = link.getAttribute('data-category');
      const catName = link.getAttribute('data-title');
      openCategory(catId, catName);
    });
  });

  // Клик по кнопке "Назад"
  if (btnBack) {
    btnBack.addEventListener('click', closeCategory);
  }
});