function showCarnivores(carnivores) {
  console.log(carnivores);

}

function showHerbivores(herbivores) {
  console.log(herbivores);
}

Predator.requestHerbivores(showHerbivores);
Predator.requestCarnivores(showCarnivores);