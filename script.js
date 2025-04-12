const colorTiles = [];

const colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722"];

const palette = document.getElementById("colorPalette");
const hexDisplay = document.getElementById("hexDisplay");

colors.forEach((color) => {
  const tile = document.createElement("div");
  tile.className = "color-tile";
  tile.style.backgroundColor = color;
  tile.dataset.hex = color;
  tile.addEventListener("click", () => selectColor(color));
  palette.appendChild(tile);
  colorTiles.push(tile);
});

function selectColor(color) {
  colorTiles.forEach((tile) => tile.classList.remove("selected"));

  const colorTile = document.querySelector(`[data-hex="${color}"]`);
  colorTile.classList.add("selected");

  navigator.clipboard.writeText(color);
  hexDisplay.innerHTML = `Copied! <span style="color: ${color}">${color}</span>`;
}
