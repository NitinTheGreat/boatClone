const images = document.querySelectorAll('.slide img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentImageIndex = 0;

function showImage(index) {
    images.forEach((img, idx) => {
        img.style.transform = `translateX(-${index * 100}%)`; // Move images horizontally
    });
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Button click event listeners
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Automatic slideshow
setInterval(showNextImage, 4000);


// next things
const slider = document.querySelector('.slider');
        const prev  = document.querySelector('.prev');
        const next  = document.querySelector('.next');
        let slideIndex = 0;

        // Event listeners for navigation buttons
        prev .addEventListener('click', () => {
            slideIndex--;
            updateSlider();
        });

        next .addEventListener('click', () => {
            slideIndex++;
            updateSlider();
        });

        // Function to update slider position
        function updateSlider() {
            slider.style.transform = `translateX(-${slideIndex * 20}%)`;
        }