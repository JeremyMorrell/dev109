var myImages = [
    "https://www.imms.org/images/dolphin_presentation/dolphin1.jpg",
    "http://cdn3.theeventchronicle.com/wp-content/uploads/2014/09/dolphin-intelligence.jpg",
    "http://www.liveanimalslist.com/mammals/images/dolphin-in-water.jpg",
    "http://i1151.photobucket.com/albums/o632/bowietvc15/Bowietvc15-2/DolphinsWallpaper2.jpg",
    "http://i1151.photobucket.com/albums/o632/bowietvc15/funny%20gifs/animal-art-cute-dolphin-nature-Favimcom-311780.jpg"
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

