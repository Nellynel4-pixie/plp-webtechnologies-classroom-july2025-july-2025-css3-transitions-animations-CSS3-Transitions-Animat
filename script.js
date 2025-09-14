// =========================
// PART 2: Functions
// =========================

// Global variable (scope: everywhere)
let isAnimating = false;

// Function with parameters & return value
function calculateArea(width, height) {
  let area = width * height; // local variable (scope inside function)
  return area;
}

// Reusable logging function
function logResult(message) {
  console.log("Result:", message);
}

// Example usage
let boxArea = calculateArea(100, 100);
logResult("Box area is " + boxArea + "px²");

// =========================
// PART 3: JS triggers CSS animation
// =========================
const animateBox = document.getElementById("animateBox");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

function startAnimation() {
  if (!isAnimating) {
    animateBox.classList.add("animate");
    isAnimating = true;
    logResult("Animation started!");
  }
}

function stopAnimation() {
  if (isAnimating) {
    animateBox.classList.remove("animate");
    isAnimating = false;
    logResult("Animation stopped!");
  }
}

// Attach events
startBtn.addEventListener("click", startAnimation);
stopBtn.addEventListener("click", stopAnimation);
