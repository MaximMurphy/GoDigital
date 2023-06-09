// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

if (window.matchMedia("(min-width: 1513px)").matches) {
  //bigger screens
  setResolution(window.innerWidth, 2450);
  window.onresize = function () {
    location.reload();
  };
} else if (window.matchMedia("(min-width: 701px)").matches) {
  //desktop
  setResolution(window.innerWidth, 2350);
  window.onresize = function () {
    location.reload();
  };
} else {
  //mobile
  setResolution(window.innerWidth, 1400);
}

noise(10)
  .color(1, 1)
  .rotate(() => (Math.PI * scrollY) / 3000)
  .kaleid()
  .repeat()
  .pixelate()
  .out();
