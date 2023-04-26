// create a new hydra-synth instance
var hydra = new Hydra({ detectAudio: false });

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  //desktop
  console.log("Media Query Matched!");
  setResolution(window.innerWidth, 900);
} else {
  //mobile
  setResolution(window.innerWidth, 900);
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
  .thresh(0.3)

  .modulateScale(osc(2).modulateRotate(o0, 0.74))
  .diff(
    src(o0)
      .rotate([-0.012, 0.01, -0.002, 0])
      .scrollY(0, [-1 / 199800, 0].fast(0.7))
  )
  .brightness([-0.17, -0.12].smooth().fast(2))
  .out();
