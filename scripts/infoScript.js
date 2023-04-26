// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  //desktop
  console.log("Media Query Matched!");
  setResolution(window.innerWidth, 1300);
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
