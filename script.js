// create a new hydra-synth instance

var hydra = new Hydra({ detectAudio: false });
setResolution(window.innerWidth, window.screen.height);
noise(10)
  .color(1, 1)
  .rotate(() => (Math.PI * scrollY) / 360)
  .kaleid()
  .repeat()
  .pixelate()
  .out();
