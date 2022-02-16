let btn_upload = document
  .getElementById('btn-upload-csv')
  .addEventListener('click', () => {
    Papa.parse(document.getElementById('upload-csv').files[0], {
      //   download: true,
      //   header: true,
      complete: function (results) {
        // console.log(results);
        next(results);
        // console.log(resultsVariable);
      },
    });
  });

function next(results) {
  let results2 = Array(results)[0].data;
}

function getNextGrid(bigGrid) {
  bigGrid.shift();
  let grid = [];
  let gridNumbers = [];
  let numberRow = [];
  for (let i = 0; i < 9; i++) {
    grid.push(bigGrid[i]);
  }
  for (let i = 0; i < 9; i++) {
    bigGrid.shift();
  }

  for (let row of grid) {
    for (let number of row) {
      numberRow = [];
      for (let character of number) {
        numberRow.push(Number(character));
      }
    }
    gridNumbers.push(numberRow);
  }

  return gridNumbers;
}

function cloneVariable(variableData) {
  return JSON.parse(JSON.stringify(variableData));
}

function checkIfAllowed(grid, row, col, number) {
  for (let mainNum of grid[row]) {
    if (mainNum === number) {
      return false;
    }
  }

  let numbersInCol = returnCol(grid, col);
  if (number in numbersInCol) {
    return false;
  }

  let numbersInBox = returnBox(grid, row, col);
  if (number in numbersInBox) {
    return false;
  }

  return true;
}

function solveGrid(grid, gridSize) {
  let row = -1;
  let col = -1;
  let isSolved = true;

  for (let row2 = 0; row2 < gridSize; row2++) {
    for (let col2 = 0; col2 < gridSize; col2++) {
      if (grid[row2][col2] === 0) {
        row = row2;
        col2 = col2;
        isSolved = false;
        // console.log(row, ro2, col, col2);
        break;
      }
    }
    if (!isSolved) {
      break;
    }
  }

  if (isSolved) {
    return true;
  } else {
    for (let number = 1; number <= gridSize; number++) {
      if (checkIfAllowed(grid, row, col, number)) {
        grid[row][col] = number;
        if (solveGrid(grid, gridSize)) {
          return true;
        } else {
          grid[row][col] = 0;
        }
      }
    }
    return false;
  }
}

function returnCol(grid, col) {
  let numbers = [];
  for (let row of grid) {
    numbers.push(row[col]);
  }
  return numbers;
}

function returnBox(grid, row, col) {
  let numbers = [];
  let rowBox = Math.floor(row / 3) * 3;
  let colBox = Math.floor(col / 3) * 3;

  for (let row2 = rowBox; row2 < rowBox + 3; row2++) {
    for (let col2 = colBox; col2 < colBox + 3; col2++) {
      numbers.push(grid[row2][col2]);
    }
  }

  return numbers;
}

let grid = [
  [0, 0, 3, 0, 2, 0, 6, 0, 0],
  [9, 0, 0, 3, 0, 5, 0, 0, 1],
  [0, 0, 1, 8, 0, 6, 4, 0, 0],
  [0, 0, 8, 1, 0, 2, 9, 0, 0],
  [7, 0, 0, 0, 0, 0, 0, 0, 8],
  [0, 0, 6, 7, 0, 8, 2, 0, 0],
  [0, 0, 2, 6, 0, 9, 5, 0, 0],
  [8, 0, 0, 2, 0, 3, 0, 0, 9],
  [0, 0, 5, 0, 1, 0, 3, 0, 0],
];

let size = 9;

solveGrid(grid, size);

console.log(grid);
