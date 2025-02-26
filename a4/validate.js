function isValid() {
   
    document.getElementById('fname').innerHTML = "";

    let formIsValid = true;

   
    const firstName = document.getElementById('FirstName').value;

   
    if (firstName === "" || firstName.length > 20 || !/^[a-zA-Z]+$/.test(firstName)) {
        document.getElementById('fname').innerHTML = "First name is required, must be alphabetical, and cannot exceed 20 characters.";
        formIsValid = false;
    }

    return formIsValid;
}

