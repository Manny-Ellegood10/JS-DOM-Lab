
function convertToc() {
  let fahrenheit = document.getElementById("inputKG").value; 
  let celsiusTemp = (fahrenheit - 32) * (5/9);
  return document.getElementById("celsConverted").innerHTML = `${celsiusTemp} C`;
}

function convertTof() { 
  let fahrenheit = document.getElementById("inputKG").value; 
  return document.getElementById("fahConverted").innerHTML = `${fahrenheit} F`;
}

// K=((℉-32)/1.8)+273.15
function convertTok() {
  let fahrenheit = document.getElementById("inputKG").value;  
  let kelvin = ((fahrenheit - 32)/1.8) + 273.15;
  return document.getElementById("kelConverted").innerHTML = `${kelvin} K`;

}

function convertTor() {
  let fahrenheit = document.getElementById("inputKG").value; 
  let rankine = (fahrenheit * 1) + 459.67;
  return document.getElementById("ranConverted").innerHTML = `${rankine.toFixed(2)} R`;
}

function convertAll () {

  (convertTof() & convertToc() & convertTok()
  & convertTor());

}
