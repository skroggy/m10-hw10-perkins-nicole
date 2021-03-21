'use strict';

var boilingTemp;
boilingTemp = function boilingTemp() {
  return 212;
};
document.getElementById('boiling-temp').innerHTML = boilingTemp();

var freezingTemp;
freezingTemp = function freezingTemp() {
  return 32;
};
document.getElementById('freezing-temp').innerHTML = freezingTemp();

var waterTemp;
waterTemp = function waterTemp() {
  return 63;
};
document.getElementById('water-temp').innerHTML = waterTemp();

var boiling = document.getElementById("boling");
var frozen = document.getElementById("frozen");
var goodTemp = document.getElementById("good-temp");

setTimeout(function show() {
  if (waterTemp > 212) {
    boiling.classList.remove("hide");
    boiling.classList.add("show");
  } else if (waterTemp < 32) {
    frozen.classList.remove("hide");
    frozen.classList.add("show");
  } else {
    goodTemp.classList.remove("hide");
    goodTemp.classList.add("show");
  }
}, 3000);