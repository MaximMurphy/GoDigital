// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  //mobile
  console.log("Media Query Matched!");
  setResolution(window.innerWidth, 2100);
} else {
  //desktop
  setResolution(window.innerWidth, 1100);
}
noise(10)
  .color(1, 1)
  .rotate(() => (Math.PI * scrollY) / 3000)
  .kaleid()
  .repeat()
  .pixelate()
  .out();
