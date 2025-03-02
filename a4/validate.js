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

    const email = document.getElementById("Email").value;
    const atPos = email.indexOf("@");
    const dotPos = email.lastIndexOf(".");
    if (email === "" || atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.length) {
        errorMessages = "Please enter a valid email address.";
        document.getElementById("email").innerHTML = errorMessages;
        valid = false;
    } else {
        document.getElementById("email").innerHTML = "";
    }

    const phone = document.getElementById("Phone").value;
    if (isNaN(phone) || phone.length > 15 || phone.length < 10) {
        errorMessages = "Phone number must be numerical and between 10 and 15 digits.";
        document.getElementById("phone").innerHTML = errorMessages;
        valid = false;
    } else {
        document.getElementById("phone").innerHTML = "";
    }

    const username = document.getElementById("Username").value;
    if (username === "" || username.length > 12) {
        errorMessages = "Username is required and cannot exceed 12 characters.";
        document.getElementById("username").innerHTML = errorMessages;
        valid = false;
    } else {
        document.getElementById("username").innerHTML = "";
    }

    const password = document.getElementById("Password").value;
    if (password === "" || password.length > 7 || !/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_])/.test(password)) {
        errorMessages = "Password must be 7 characters long, with at least one uppercase, lowercase, number, and special character.";
        document.getElementById("password").innerHTML = errorMessages;
        valid = false;
    } else {
        document.getElementById("password").innerHTML = "";
    }

    const address = document.getElementById("Address").value;
    if (address === "") {
        errorMessages = "Address is required.";
        document.getElementById("address").innerHTML = errorMessages;
        valid = false;
    } else {
        document.getElementById("address").innerHTML = "";
    }

    const city = document.getElementById("City").value;
    if (city === "") {
        errorMessages = "City is required.";
        document.getElementById("city").innerHTML = errorMessages;
        valid = false;
    } else {
        document.getElementById("city").innerHTML = "";
    }

    const state = document.getElementById("State").value;
    if (state === "") {
        errorMessages = "State is required.";
        document.getElementById("state").innerHTML = errorMessages;
        valid = false;
    } else {
        document.getElementById("state").innerHTML = "";
    }

    const country = document.getElementById("Country").value;
    if (country === "USA") {
        const zipCode = document.getElementById("ZipCode").value;
        if (zipCode === "" || zipCode.length !== 5 || isNaN(zipCode)) {
            errorMessages = "Zip Code must be a 5-digit number.";
            document.getElementById("zipcode").innerHTML = errorMessages;
            valid = false;
        } else {
            document.getElementById("zipcode").innerHTML = "";
        }
    } else {
        document.getElementById("zipcode").innerHTML = "";
    }

    if (!valid) {
        document.getElementById("submiterror").innerHTML = "Please correct the highlighted errors.";
    }

    return valid;
}
