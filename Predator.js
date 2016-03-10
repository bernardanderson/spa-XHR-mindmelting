var Predator = (function() {

  var privateHerbivores;
  var privateCarnivores;

  return {

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

    requestHerbivores: function(whichCallback) {
      var xmlHerbivores = new XMLHttpRequest();
      
      xmlHerbivores.addEventListener("load", function() {
        privateHerbivores = JSON.parse(this.responseText);
        whichCallback(privateHerbivores);
      });

      xmlHerbivores.addEventListener("error", Predator.anXHRError);
      xmlHerbivores.open("GET", "herbivores.json");
      xmlHerbivores.send();
    },

    requestCarnivores: function(whichCallback) {
      var xmlCarnivores = new XMLHttpRequest();

      xmlCarnivores.addEventListener("load", function() {
        privateCarnivores = JSON.parse(this.responseText);
        whichCallback(privateCarnivores);
      });

      xmlCarnivores.addEventListener("error", Predator.anXHRError);
      xmlCarnivores.open("GET", "carnivores.json");
      xmlCarnivores.send();
    }

  };


})(Predator || {});