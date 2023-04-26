// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  //desktop
  console.log("Media Query Matched!");
  setResolution(window.innerWidth, 2100);
} else {
  //mobile
  setResolution(window.innerWidth, 1275);
}
voronoi(25, 1, 12)
  .pixelate(200, 200)
  .color(1, 1, 1)
  .brightness(0.05)
  .scrollY(() => 0.1 * scrollY)
  .out(o0);
