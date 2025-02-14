function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    // Clear any previous rhombus
    document.getElementById("upLeft").innerHTML = "";
    document.getElementById("upRight").innerHTML = "";
    document.getElementById("downLeft").innerHTML = "";
    document.getElementById("downRight").innerHTML = "";

    // Create each part of the rhombus
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}

// Function to create the top-left part of the rhombus
function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";

    for (let i = 0; i < pHeight; i++) {
        rLine += "<p>"; // Start a new row
        for (let j = 0; j <= i; j++) {
            // Determine color based on whether the position is even or odd
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>"; // End the row
    }

    // Display the top-left part of the rhombus
    document.getElementById("upLeft").innerHTML = rLine;
}

// Function to create the top-right part of the rhombus (mirrored triangle)
function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";

    for (let i = 0; i < pHeight; i++) {
        rLine += "<p>"; // Start a new row
        for (let j = 0; j <= i; j++) {
            // Determine color based on whether the position is even or odd
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>"; // End the row
    }

    // Display the top-right part of the rhombus
    document.getElementById("upRight").innerHTML = rLine;
}

// Function to create the bottom-left part of the rhombus (shrinking triangle)
function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";

    for (let i = pHeight - 1; i >= 0; i--) {
        rLine += "<p>"; // Start a new row
        for (let j = 0; j <= i; j++) {
            // Determine color based on whether the position is even or odd
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>"; // End the row
    }

    // Display the bottom-left part of the rhombus
    document.getElementById("downLeft").innerHTML = rLine;
}

// Function to create the bottom-right part of the rhombus (mirrored shrinking triangle)
function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";

    for (let i = pHeight - 1; i >= 0; i--) {
        rLine += "<p>"; // Start a new row
        for (let j = 0; j <= i; j++) {
            // Determine color based on whether the position is even or odd
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>"; // End the row
    }

    // Display the bottom-right part of the rhombus
    document.getElementById("downRight").innerHTML = rLine;
}
