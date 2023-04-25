// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");
// Check if the media query is true
if (mediaQuery.matches) {
  // Then log the following message to the console
  console.log("Media Query Matched!");
  setResolution(window.innerWidth, 2100);
} else {
  setResolution(window.innerWidth, 1100);
}
voronoi(25, 2, 10)
  .color(1, 1, 1)
  .brightness(0.05)
  .rotate(() => 0.25 * scrollY)
  .out(o0);
