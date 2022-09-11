const images = [
    "img/pic-1.jpg",
    "img/pic-2.jpg",
    "img/pic-3.jpg",
    "img/pic-4.jpg",
]
let imagIndex = 0;
const imagElement = document.getElementById('slider-img');

setInterval(() => {
    if (imagIndex >= images.length) {
        imagIndex = 0;
    }
    const imgUrl = images[imagIndex]
    imagElement.setAttribute('src', imgUrl);
    imagIndex++

}, 1000)