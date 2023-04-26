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

const video = document.getElementById("video");

navigator.mediaDevices
  .getUserMedia({ video: true, audio: false })
  .then((stream) => {
    s0.initCam(() => {
      // Start video stream
      video.srcObject = s0.src;
      video.play();
    });
  })
  .catch((error) => {
    // Handle the error
    alert(err);
  });

s0.initCam();

src(s0)
  .scale(0.7)
  .pixelate(150, 150)
  .modulateScale(osc(6).rotate(Math.sin(time)), 0.2)
  .out();
