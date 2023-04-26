// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  //desktop
  console.log("Media Query Matched!");
  setResolution(window.innerWidth, 2200);
} else {
  //mobile
  setResolution(window.innerWidth, 1370); //1300
}
shape(200, 0.607, 1.5)
  .scale(0.621, 0.49)
  .color([0.5, 2].smooth(0.5), 0.2, 0.5)
  .repeat(3.023, 2)
  .modulateScale(osc(3, 0.5), -0.852)
  .add(o0, 0.371)
  .scale(0.9)
  .modulate(o0, () => scrollY * 0.0002)
  .scrollY(() => window.scrollY / window.innerHeight)
  .out();
