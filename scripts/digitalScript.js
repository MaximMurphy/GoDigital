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
const canvas = document.getElementById("canvas");

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
    console.error(err);
  });

function loop() {
  // Draw current video frame to canvas
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

  // Apply Hydra effects to canvas
  hydra.setSource(canvas);
  // Add Hydra code here

  // Request next frame
  requestAnimationFrame(loop);
}

// Start loop
requestAnimationFrame(loop);

src(s0)
  .modulateScale(osc(8).rotate(Math.sin(time)), 0.5)

  .out();
