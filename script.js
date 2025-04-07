// Сюрприз при нажатии на кнопку
document.getElementById('surprise-btn').addEventListener('click', () => {
    const text = document.getElementById('dynamic-text');
    text.innerHTML = "Я люблю тебя больше, чем всё на свете! 💖";
    text.style.fontSize = "24px";
    text.style.color = "#d23669";

    // Воспроизведение музыки (опционально)
    const music = document.getElementById('bg-music');
    music.play();

    // Добавление фото (замени ссылки на свои)
    const photos = [
        "images/photo1.jpg",
        "images/photo2.jpg"
    ];
    
    const photoGrid = document.getElementById('photos');
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        photoGrid.appendChild(img);
    });
});
