var Predator = (function() {

  var privateHerbivores;
  var privateCarnivores;

  return {

    parseHerbivores: function() {
      privateHerbivores = JSON.parse(this.responseText);
    },

    parseCarnivores: function() {
      privateCarnivores = JSON.parse(this.responseText);
    },

    anXHRError: function(xhrFailureEvent) {
      console.log("An error occured while transferring the data");
    },

// Variable to return the private Predator Array
    getHerbivores: function() {
      return privateHerbivores;
    },

// Variable to return the private Carnivore Array
    getCarnivores: function() {
      return privateCarnivores;
    },

    requestHerbivores: function(whichParsing) {
      var xmlHerbivores = new XMLHttpRequest();
      xmlHerbivores.addEventListener("load", Predator[whichParsing]);
      xmlHerbivores.addEventListener("error", Predator.anXHRError);
      xmlHerbivores.open("GET", "herbivores.json");
      xmlHerbivores.send();
    },

    requestCarnivores: function(whichParsing) {
      var xmlCarnivores = new XMLHttpRequest();
      xmlCarnivores.addEventListener("load", Predator[whichParsing]);
      xmlCarnivores.addEventListener("error", Predator.anXHRError);
      xmlCarnivores.open("GET", "carnivores.json");
      xmlCarnivores.send();
    }

  };


})(Predator || {});