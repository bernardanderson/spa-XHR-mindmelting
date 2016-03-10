// The iife for that contains the all Predator activities
var Predator = (function() {

// Private variables for herbivores and carnivores
  var privateHerbivores;
  var privateCarnivores;

  return {

// Function to return the private Predator Array
    getHerbivores: function() {
      return privateHerbivores;
    },

// Function to return the private Carnivore Array
    getCarnivores: function() {
      return privateCarnivores;
    },

// Function to request and parse the herbivores json file.  The passed
//  callback function is executed after the json file is loaded
    requestHerbivores: function(whichCallback) {
      var xmlHerbivores = new XMLHttpRequest();
      
      xmlHerbivores.addEventListener("load", function() {
        privateHerbivores = JSON.parse(this.responseText);
        whichCallback(privateHerbivores);
      });

      xmlHerbivores.open("GET", "herbivores.json");
      xmlHerbivores.send();
    },

// Function to request and parse the carnivores json file.  The passed
//  callback function is executed after the json file is loaded
    requestCarnivores: function(whichCallback) {
      var xmlCarnivores = new XMLHttpRequest();

      xmlCarnivores.addEventListener("load", function() {
        privateCarnivores = JSON.parse(this.responseText);
        whichCallback(privateCarnivores);
      });

      xmlCarnivores.open("GET", "carnivores.json");
      xmlCarnivores.send();
    }
  };

})(Predator || {});