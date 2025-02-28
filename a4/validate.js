function isValid() {
   
    document.getElementById('fname').innerHTML = "";

    let formIsValid = true;

   
    const firstName = document.getElementById('FirstName').value;

   
    if (firstName === "" || firstName.length > 20 || !/^[a-zA-Z]+$/.test(firstName)) {
        document.getElementById('fname').innerHTML = "First name is required, must be alphabetical, and cannot exceed 20 characters.";
        formIsValid = false;
    }
    const lastName = document.getElementById("LastName").value;
    if (lastName === "" || lastName === null || lastName.length > 20 || !/^[A-Za-z]+$/.test(lastName)) {
        errorMessages = "Last name is required and must be alphabetic, with a maximum of 20 characters.";
        document.getElementById("lname").innerHTML = errorMessages;
        valid = false;
    } else {
        document.getElementById("lname").innerHTML = "";
    }

    return formIsValid;
}

