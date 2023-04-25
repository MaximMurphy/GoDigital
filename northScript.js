// create new instance
var hydra = new Hydra({ detectAudio: false });

// checking for screen size
const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  //desktop
  console.log("Media Query Matched!");
  setResolution(window.innerWidth, 2100);
} else {
  //mobile
  setResolution(window.innerWidth, 1100);
}
osc(20, 0.01, 1.1)
  .kaleid(5)
  .color(1, 0.35, 0.25)
  .invert()
  .rotate(0, 0.1)
  .modulate(o0, () => scrollY * 0.001)
  .scale(1.01)
  .out(o0);
