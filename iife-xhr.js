// Displays the carnivore object in the DOM div.
function showCarnivores(carnivoreObject) {

  var carnivoresOutputDiv = document.getElementById("carnivore-output");
  var carnivoresOutputDivString = "<p>Here are you carnivores: ";

  for (var i = 0; i < carnivoreObject.carnivores.length; i++) {
    carnivoresOutputDivString += `/ ${carnivoreObject.carnivores[i]} / `;
  };

  carnivoresOutputDiv.innerHTML = carnivoresOutputDivString + "</p>";
}

// Displays the herbivore object in the DOM div.
function showHerbivores(herbivoreObject) {

  var herbivoresOutputDiv = document.getElementById("herbivore-output");
  var herbivoresOutputDivString = "<p>Here are you herbivores: ";

  for (var i = 0; i < herbivoreObject.herbivores.length; i++) {
    herbivoresOutputDivString += `/ ${herbivoreObject.herbivores[i]} / `;
  };

  herbivoresOutputDiv.innerHTML = herbivoresOutputDivString + "</p>";
}

Predator.requestHerbivores(showHerbivores);
Predator.requestCarnivores(showCarnivores);