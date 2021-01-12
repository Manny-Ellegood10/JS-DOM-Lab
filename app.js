
function convertToc() {
  let fahrenheit = parseFloat(document.getElementById("inputKG").value); 
  let celsiusTemp = (fahrenheit - 32) * (5/9);
  return document.getElementById("celsConverted").innerHTML = `${celsiusTemp.toFixed(2)} C`;
}

// Celsius Formulas
function celsToF() {
  let celsiusTemp = document.getElementById("inputKG").value;
  let fahrenheit = (celsiusTemp * 9/5) + 32;
  return document.getElementById("fahConverted").innerHTML = `${fahrenheit.toFixed(2)} F`; 
  
}
function celsToK() {
  let celsiusTemp = parseFloat(document.getElementById("inputKG").value);
  let kelvinTemp =  (celsiusTemp * 1) + 273.15;
  return document.getElementById("kelConverted").innerHTML = `${kelvinTemp} K`;
}

function celsToR() {
  let celsiusTemp = parseFloat(document.getElementById("inputKG").value);
  let rankineTemp =  (celsiusTemp + 273.15) * (9/5);
  return document.getElementById("ranConverted").innerHTML = `${rankineTemp.toFixed(2)} R`;
}

function ConvertCelsToAll () {
  celsToR() & celsToF() & celsToK();
}

// Rankine Formulas
function rankToF() {
  let rankTemp = parseFloat(document.getElementById("inputKG").value);
  let fahrenheit = (rankTemp * 1) - 459.67;
   document.getElementById("fahConverted").innerHTML = `${fahrenheit.toFixed(2)} F`;
}

function rankToC() {
  let rankTemp = parseFloat(document.getElementById("inputKG").value);
  let celsiusTemp = (rankTemp - 491.67) * 5/9; 
   document.getElementById("celsConverted").innerHTML = `${celsiusTemp.toFixed(2)} C`;
}

function rankToK() {
  let rankTemp = parseFloat(document.getElementById("inputKG").value);
  let kelvinTemp = rankTemp * 5/9; 
   document.getElementById("kelConverted").innerHTML = `${kelvinTemp.toFixed(2)} K`;
}

function ConvertRankToAll () {
  rankToK() & rankToC() & rankToF();
}

// Kelvin Formulas 
function kelToF() {
  let kelvinTemp = parseFloat(document.getElementById("inputKG").value);
  let fahrenheit = (kelvinTemp * 9/5) - 459.67;
  (document.getElementById("fahConverted").innerHTML = `${fahrenheit.toFixed(2)} F`);

}

function kelToC() {
  let kelvinTemp = parseFloat(document.getElementById("inputKG").value);
  let celsiusTemp = (kelvinTemp * 1) - 273.15; 
  return document.getElementById("celsConverted").innerHTML = `${celsiusTemp.toFixed(2)} C`;

}

function kelToR() {
  let kelvinTemp = parseFloat(document.getElementById("inputKG").value);
  let rankineTemp =  kelvinTemp * 9/5;
  return document.getElementById("ranConverted").innerHTML = `${rankineTemp.toFixed(2)} R`;

}

function ConvertKelToAll() {
  kelToR() & kelToC() & kelToF();
}

function convertTof() { 
  let fahrenheit = parseFloat(document.getElementById("inputKG").value); 
  return document.getElementById("fahConverted").innerHTML = `${fahrenheit} F`;
}

// K=((℉-32)/1.8)+273.15
function convertTok() {
  let fahrenheit = parseFloat(document.getElementById("inputKG").value);  
  let kelvin = ((fahrenheit - 32)/1.8) + 273.15;
  return document.getElementById("kelConverted").innerHTML = `${kelvin.toFixed(2)} K`;

}

function convertTor() {
  let fahrenheit = parseFloat(document.getElementById("inputKG").value); 
  let rankine = (fahrenheit * 1) + 459.67;
  return document.getElementById("ranConverted").innerHTML = `${rankine.toFixed(2)} R`;
}

function convertAll() {

  var userChosenConversion = document.getElementById("temp").value;
  console.log({userChosenConversion})
  switch(userChosenConversion) {
    case "Fahrenheit":
      
  (convertTof() & convertToc() & convertTok()
  & convertTor());
      break;
    case "Celsius":
  (ConvertCelsToAll());
      break;
    case "Kelvin":
  (ConvertKelToAll());
      break;
    case "Rankine":
   (ConvertRankToAll ());  
  }  
}
