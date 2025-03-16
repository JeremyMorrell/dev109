var myImages = [
    "./images/IMG_1828.JPG",
    "./images/IMG_1830.JPG",
    "./images/IMG_1961.JPG",
    "./images/IMG_1990.JPG",
    "./images/IMG_1994.JPG"
];

var captionImages = ["Laugh", "Love", "Lunch", "Happiness", "Family"];

var index = 0;

// Update image and caption
function updateImage() {
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt = captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}

// Next button functionality
function next() {
    index = (index + 1) % myImages.length;
    updateImage();
}

// Previous button functionality
function back() {
    index = (index - 1 + myImages.length) % myImages.length;
    updateImage();
}

// Automatic slideshow functionality
function autoSlide() {
    if (document.getElementById("auto").checked) {
        next();
    }
}

// Set interval for automatic slideshow
setInterval(autoSlide, 4000);

// Attach event listeners to buttons
document.getElementById("next").addEventListener("click", next);
document.getElementById("previous").addEventListener("click", back);

