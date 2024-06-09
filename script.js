const header = document.querySelector("#header");
const main = document.querySelector("#main");
const colors = document.querySelectorAll(".color .rgb");

colors.forEach((color) => {
  color.addEventListener("click", function () {
    const colorValue = getComputedStyle(color).backgroundColor;
    console.log(colorValue);
    header.style.backgroundColor = colorValue;
    header.textContent = color.textContent.trim();
  });
});

function filterColors(color) {
  // Get all color blocks
  const redBlocks = document.querySelectorAll('.red');
  const blueBlocks = document.querySelectorAll('.blue');
  const greenBlocks = document.querySelectorAll('.green');
  
  // Hide all blocks initially
  redBlocks.forEach(block => block.classList.add('hidden'));
  blueBlocks.forEach(block => block.classList.add('hidden'));
  greenBlocks.forEach(block => block.classList.add('hidden'));
  
  // Show the blocks based on the selected color
  if (color === 'red') {
    redBlocks.forEach(block => block.classList.remove('hidden'));
  } else if (color === 'blue') {
    blueBlocks.forEach(block => block.classList.remove('hidden'));
  } else if (color === 'green') {
    greenBlocks.forEach(block => block.classList.remove('hidden'));
  } else {
    // Show all blocks if 'all' is selected
    redBlocks.forEach(block => block.classList.remove('hidden'));
    blueBlocks.forEach(block => block.classList.remove('hidden'));
    greenBlocks.forEach(block => block.classList.remove('hidden'));
  }
}
