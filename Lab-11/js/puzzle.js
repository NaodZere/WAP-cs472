// // Initialize puzzle state
// var puzzleState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];

// // Shuffle puzzle state
// function shuffle() {
//   for (var i = puzzleState.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = puzzleState[i];
//     puzzleState[i] = puzzleState[j];
//     puzzleState[j] = temp;
//   }
//   updatePuzzle();
//   console.log(puzzleState);
// }

// // Move tile into empty space
// function moveTile(tileIndex) {
//   var emptyIndex = puzzleState.indexOf(null);
//   var tileRow = Math.floor(tileIndex / 4);
//   var tileCol = tileIndex % 4;
//   var emptyRow = Math.floor(emptyIndex / 4);
//   var emptyCol = emptyIndex % 4;
//   var rowDiff = Math.abs(tileRow - emptyRow);
//   var colDiff = Math.abs(tileCol - emptyCol);
//   if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
//     puzzleState[emptyIndex] = puzzleState[tileIndex];
//     puzzleState[tileIndex] = null;
//     updatePuzzle();
//     console.log(puzzleState);
//   }
// }

// // Update puzzle display based on current state
// function updatePuzzle() {
//   for (var i = 0; i < puzzleState.length; i++) {
//     var tile = document.getElementById('tile-' + (i + 1));
//     if (puzzleState[i]) {
//       tile.innerText = puzzleState[i];
//     } else {
//       tile.innerText = '';
//     }
//   }
// }

// // Attach click event handlers to tiles
// var tiles = document.getElementsByClassName('puzzle-tile');
// for (var i = 0; i < tiles.length; i++) {
//   tiles[i].addEventListener('click', function() {
//     var tileIndex = parseInt(this.id.split('-')[1]) - 1;
//     moveTile(tileIndex);
//   });
// }

// // Attach click event handler to shuffle button
// var shuffleButton = document.getElementById('shuffle-button');
// shuffleButton.addEventListener('click', shuffle);


// Initialize puzzle state
var puzzleState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];

const numRows = 4;
const numCols = 4;
const numTiles = numRows * numCols;
const tileWidth = 100;
const tileHeight = 100;
const imgUrl = 'your-image-url.jpg';

// Create tile element
function createTile(row, col) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.style.width = `${tileWidth}px`;
  tile.style.height = `${tileHeight}px`;
  tile.style.backgroundImage = `url(${imgUrl})`;
  tile.style.backgroundPosition = `-${col * tileWidth}px -${row * tileHeight}px`;
  tile.style.top = `${row * tileHeight}px`;
  tile.style.left = `${col * tileWidth}px`;

  const num = row * numRows + col + 1;
  tile.textContent = num < numTiles ? num : '';

  return tile;
}

// Shuffle puzzle state
function shuffle() {
  for (var i = puzzleState.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = puzzleState[i];
    puzzleState[i] = puzzleState[j];
    puzzleState[j] = temp;
  }
  updatePuzzle();
  console.log(puzzleState);
}

// Move tile into empty space
function moveTile(tileIndex) {
  var emptyIndex = puzzleState.indexOf(null);
  var tileRow = Math.floor(tileIndex / 4);
  var tileCol = tileIndex % 4;
  var emptyRow = Math.floor(emptyIndex / 4);
  var emptyCol = emptyIndex % 4;
  var rowDiff = Math.abs(tileRow - emptyRow);
  var colDiff = Math.abs(tileCol - emptyCol);
  if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
    puzzleState[emptyIndex] = puzzleState[tileIndex];
    puzzleState[tileIndex] = null;
    updatePuzzle();
    console.log(puzzleState);
  }
}

// Update puzzle display based on current state
function updatePuzzle() {
  var puzzleContainer = document.getElementById('puzzle-container');
  puzzleContainer.innerHTML = '';
  for (var i = 0; i < puzzleState.length; i++) {
    var tile = createTile(Math.floor(i / 4), i % 4);
    tile.id = 'tile-' + (i + 1);
    tile.classList.add('puzzle-tile');
    if (puzzleState[i]) {
      tile.innerText = puzzleState[i];
    } else {
      tile.innerText = '';
    }
    puzzleContainer.appendChild(tile);
  }
  // Attach click event handlers to tiles
  var tiles = document.getElementsByClassName('puzzle-tile');
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', function() {
      var tileIndex = parseInt(this.id.split('-')[1]) - 1;
      moveTile(tileIndex);
    });
  }
}

// Attach click event handler to shuffle button
var shuffleButton = document.getElementById('shuffle-button');
shuffleButton.addEventListener('click', shuffle);

// Initial puzzle display
updatePuzzle();
