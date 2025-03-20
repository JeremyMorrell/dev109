function validateForm() {
    const name = document.forms["myContact"]["name"].value;
    const email = document.forms["myContact"]["email"].value;
    const comment = document.forms["myContact"]["comment"].value;

    if (name == "" || email == "" || comment == "") {
        alert("All fields must be filled out.");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true; 
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    
    // Autoplay music
    audio.autoplay = true;

    // Loop the audio
    audio.loop = true;

    // Play the audio when the page loads
    audio.play();
});


