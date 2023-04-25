// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  //desktop
  console.log("Media Query Matched!");
  setResolution(window.innerWidth, 2000);
} else {
  //mobile
  setResolution(window.innerWidth, 1300);
}
osc(1).add(noise(1, 0.05)).color(0, 0, 3).colorama(0.4).out();
