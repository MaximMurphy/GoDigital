// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

if (window.matchMedia("(min-width: 1513px)").matches) {
  //bigger screens
  setResolution(window.innerWidth, 1450);
  window.onresize = function () {
    location.reload();
  };
} else if (window.matchMedia("(min-width: 701px)").matches) {
  //desktop
  setResolution(window.innerWidth, 1325);
  window.onresize = function () {
    location.reload();
  };
} else {
  //mobile
  setResolution(window.innerWidth, 950);
}

osc(10, 0.1, 2)
  .modulate(
    noise(2, 0.1)
      .color(1, 0.5, 1)
      .add(gradient(2))
      .thresh(0.5)
      .modulateScale(osc(2), 0.2)
  )
  .rotate(1.57)
  .modulateHue(osc(0.5))
  .color(1, 1, 1)
  .blend(o0, 0.5)
  .out();
