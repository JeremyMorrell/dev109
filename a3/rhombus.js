function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
   
    document.getElementById("upLeft").innerHTML = "";
    document.getElementById("upRight").innerHTML = "";
    document.getElementById("downLeft").innerHTML = "";
    document.getElementById("downRight").innerHTML = "";


    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}


function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";

    for (let i = 0; i < pHeight; i++) {
        rLine += "<p>"; 
        for (let j = 0; j <= i; j++) {
          
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>"; 
    }

    document.getElementById("upLeft").innerHTML = rLine;
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";

    for (let i = 0; i < pHeight; i++) {
        rLine += "<p>"; 
        for (let j = 0; j <= i; j++) {
      
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>"; 
    }

    document.getElementById("upRight").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";

    for (let i = pHeight - 1; i >= 0; i--) {
        rLine += "<p>"; 
        for (let j = 0; j <= i; j++) {
           
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>"; 
    }

    document.getElementById("downLeft").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";

    for (let i = pHeight - 1; i >= 0; i--) {
        rLine += "<p>"; 
        for (let j = 0; j <= i; j++) {
            
            if (j % 2 === 0) {
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            } else {
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            }
        }
        rLine += "</p>"; 
    }

    document.getElementById("downRight").innerHTML = rLine;
}
