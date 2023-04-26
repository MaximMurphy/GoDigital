// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  //desktop
  console.log("Media Query Matched!");
  setResolution(window.innerWidth, 2100);
} else {
  //mobile
  setResolution(window.innerWidth, 1200);
}
voronoi(25, 2, 10)
  .color(1, 1, 1)
  .brightness(0.05)
  .rotate(() => 0.25 * scrollY)
  .out(o0);
