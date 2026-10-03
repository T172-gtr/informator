document.addEventListener("DOMContentLoaded", function() {

    // 1. Логика переключения классов (выезжающая табличка)
    const buttons = document.querySelectorAll('.class-btn');
    const schedules = document.querySelectorAll('.schedule-table-wrapper');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetTable = document.getElementById(targetId);

        // Если кликнули по уже активной кнопке — скрываем её таблицу (эффект "закрыть")
        if (button.classList.contains('active')) {
          button.classList.remove('active');
          if (targetTable) {
            targetTable.classList.remove('active-schedule');
          }
          return; // Прерываем выполнение, дальше код не идет
        }

        // Иначе: скрываем все открытые таблицы и сбрасываем стиль всех кнопок
        buttons.forEach(btn => btn.classList.remove('active'));
        schedules.forEach(schedule => schedule.classList.remove('active-schedule'));

        // Делаем нажатую кнопку активной и показываем нужную таблицу
        button.classList.add('active');
        if (targetTable) {
            targetTable.classList.add('active-schedule');

            // Укрошательство: Плавный скролл к таблице после её появления
            setTimeout(() => {
                targetTable.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
      });
    });

    // 2. Укрошательство: Подсветка текущего дня недели
    const currentDay = new Date().getDay(); // 0 - ВС, 1 - ПН, ..., 5 - ПТ

    // Если сегодня будний день (с понедельника по пятницу)
    if (currentDay >= 1 && currentDay <= 5) {
      // Находим все ячейки, которые относятся к сегодняшнему дню
      const todayCells = document.querySelectorAll(`[data-day="${currentDay}"]`);
      todayCells.forEach(cell => {
        cell.classList.add('current-day-highlight');
      });
    }
});