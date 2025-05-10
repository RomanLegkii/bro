const spinner = document.querySelector('.spinner');
    
    // Запускаем вращение
    spinner.style.animation = 'spin .7s ease-out forwards';
    
    // После завершения вращения (2 секунды) запускаем подпрыгивание
    setTimeout(() => {
        spinner.style.animation = 'bounce 1.5s ease-in-out infinite'; // Запускаем анимацию подпрыгивания
        spinner.style.transform = 'rotate(1440deg)'; // Фиксируем угол поворота
    }, 1000); // Через 2 секунды после начала вращения

document.body.addEventListener('click', () => {
});
document.querySelector('.load').addEventListener('click', () => {
    document.getElementById('sound').play();
    const main = document.querySelector('.main');
    const load = document.querySelector('.load');

    // Показываем второй экран
    main.style.display = 'grid';
    // Задержка для корректной работы transition
    setTimeout(() => {
        main.style.opacity = '1';
    }, 10);

    // Скрываем кнопку загрузки
    load.style.display = 'none';
});

