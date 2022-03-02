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
  next2(results2);
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
  for (let x = 0; x <= 8; x++) if (grid[row][x] == number) return false;
  for (let x = 0; x <= 8; x++) if (grid[x][col] == number) return false;
  let startRow = row - (row % 3),
    startCol = col - (col % 3);
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (grid[i + startRow][j + startCol] == number) return false;
  return true;
}

function solveGrid(grid, gridSize, row, col) {
  if (row == gridSize - 1 && col == gridSize) {
    console.log('reached end...');
    return true;
  }

  if (col == gridSize) {
    row++;
    col = 0;
  }

  if (grid[row][col] !== 0) return solveGrid(grid, 9, row, col + 1);

  for (let num = 1; num < 10; num++) {
    if (checkIfAllowed(grid, row, col, num)) {
      grid[row][col] = num;
      if (solveGrid(grid, 9, row, col + 1)) {
        return true;
      }
    }
    grid[row][col] = 0;
  }
  return false;
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

function next2(wholeGrid) {
  let size = 9;
  let sum = 0;
  let grid;
  // for (let numGrid = 0; numGrid < 50; numGrid++) {
  //   grid = getNextGrid(wholeGrid);
  // }
  // solveGrid(grid, size, 0, 0);
  // console.log(grid);

  for (let numGrid = 0; numGrid < 50; numGrid++) {
    console.log(numGrid);
    let grid = getNextGrid(wholeGrid);
    solveGrid(grid, size, 0, 0);
    let bigNumber = grid[0][0] * 100 + grid[0][1] * 10 + grid[0][2];
    sum = sum + bigNumber;
  }
  console.log(sum);
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
