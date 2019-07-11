//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================


// Load in the required modules
const Diagnostics = require('Diagnostics');
const Weather = require('Weather');
const Materials = require('Materials');
const Textures = require('Textures');

const maxTemp = 25;


// Send a request to get weather information
Weather.getWeather().then(function(weatherJson) {

  // Log the current weather conditions
  Diagnostics.log(weatherJson.tempCelsius);

  const temp = weatherJson.tempCelsius;
  // const temp = 13;

  const catTexture = temp > maxTemp ? Textures.get('cat_glasses') : Textures.get('cat');
  const nyanMaterial = Materials.get('nyan');

  nyanMaterial.diffuse = catTexture;
});