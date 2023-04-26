// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  //desktop
  console.log("Media Query Matched!");
  setResolution(window.innerWidth, window.innerHeight);
} else {
  //mobile
  setResolution(window.innerWidth, window.innerHeight);
}

navigator.mediaDevices
  .getUserMedia({ video: true, audio: false })
  .then((stream) => {
    s0.initCam();
  })
  .catch((error) => {
    // Handle the error
    console.error(err);
  });

src(s0)
  .modulateScale(osc(8).rotate(Math.sin(time)), 0.5)

  .out();
