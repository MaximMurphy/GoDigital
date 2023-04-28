// create new instance
var hydra = new Hydra({ detectAudio: false });

// checking for screen size
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

osc(20, 0.01, 1.1)
  .kaleid(5)
  .color(1, 0.35, 0.25)
  .invert()
  .rotate(0, 0.1)
  .modulate(o0, () => scrollY * 0.001)
  .scale(1.01)
  .out(o0);
