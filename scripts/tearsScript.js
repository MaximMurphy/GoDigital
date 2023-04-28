// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

//checking for screen size
if (window.matchMedia("(min-width: 950px)").matches) {
  //bigger screens
  setResolution(window.innerWidth, 2300);
} else if (window.matchMedia("(min-width: 701px)").matches) {
  //desktop
  setResolution(window.innerWidth, 2200);
} else {
  //mobile
  setResolution(window.innerWidth, 1350);
}

voronoi(25, 1, 12)
  .pixelate(200, 200)
  .color(1, 1, 1)
  .brightness(0.05)
  .scrollY(() => 0.1 * scrollY)
  .out(o0);
