function isValid() {
    let valid = true; 
    let errorMessages = ""; 


    const firstName = document.getElementById("FirstName").value;
    if (firstName === "" || firstName === null || firstName.length > 20 || !/^[A-Za-z]+$/.test(firstName)) {
        errorMessages = "First name is required and must be alphabetic, with a maximum of 20 characters.";
        document.getElementById("fname").innerHTML = errorMessages;
        valid = false; 
    } else {
        document.getElementById("fname").innerHTML = "";
    }

    const lastName = document.getElementById("LastName").value;
    if (lastName === "" || lastName === null || lastName.length > 20 || !/^[A-Za-z]+$/.test(lastName)) {
        errorMessages = "Last name is required and must be alphabetic, with a maximum of 20 characters.";
        document.getElementById("lname").innerHTML = errorMessages;
        valid = false;
    } else {
        document.getElementById("lname").innerHTML = "";
    }

    return valid;
}


