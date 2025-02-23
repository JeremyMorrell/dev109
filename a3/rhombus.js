function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
upRight(pHeight, pColorEven, pColorOdd, pSymbol);
downRight(pHeight, pColorEven, pColorOdd, pSymbol);

}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){ 


.rhombus-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

#upRight, #downRight {
  font-family: monospace;
  text-align: left;
  margin: 0 10px;
  white-space: pre; 
}

body {
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 20px;
}
 
var rLine ="";
for (i=0;i<pHeight;i++){
rLine +="<p>";

for(j=0;j<=i;j++){


if (j%2)

rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else

rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";


}

document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight;i > 0;i--){
rLine +="<p>";

for(j=0;j<i;j++){

if (j%2)

rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else

rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";


}

document.getElementById("downRight").innerHTML = rLine;
}
