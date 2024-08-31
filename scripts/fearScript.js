// Create a new Hydra Synth instance
var hydra = new Hydra({ detectAudio: false });

// Checking for screen size
if (window.matchMedia("(min-width: 1513px)").matches) {
  // Bigger screens
  setResolution(window.innerWidth, 2400);
  window.onresize = function () {
    location.reload();
  };
} else if (window.matchMedia("(min-width: 701px)").matches) {
  // Desktop
  setResolution(window.innerWidth, 2300);
  window.onresize = function () {
    location.reload();
  };
} else {
  // Mobile
  setResolution(window.innerWidth, 1350);
}

// Create the animation with more immediate effect
voronoi(350, 0.15) // Voronoi pattern
  .modulateScale(osc(8).rotate(Math.sin(time)), 0.5) // Modulate scale with oscillating rotation
  .thresh(0.8) // Apply threshold
  .modulateRotate(osc(7), 0.4) // Modulate rotation
  .thresh(0.7) // Apply threshold
  .diff(src(o0).scale(1.8)) // Difference with scaled previous frame
  .modulateScale(osc(2).modulateRotate(o0, 0.74)) // Modulate scale with rotating oscillation
  .diff(
    src(o0)
      .rotate([-0.012, 0.01, -0.002, 0])
      .scrollY(0, [-1 / 199800, 0])
  ) // Rotate and scroll with previous frame
  .brightness([-0.02, -0.17].smooth()) // Adjust brightness
  .scrollY(() => 0.02 * scrollY) // Apply scrolling effect
  .out(); // Output the result
