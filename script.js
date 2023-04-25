// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  //desktop
  console.log("Media Query Matched!");
  setResolution(window.innerWidth, 2400);
} else {
  //mobile
  setResolution(window.innerWidth, 1300);
}
noise(10)
  .color(1, 1)
  .rotate(() => (Math.PI * scrollY) / 3000)
  .kaleid()
  .repeat()
  .pixelate()
  .out();
