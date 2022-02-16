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

function solve() {
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

  let numCols = 9;
  let numRows = 9;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === 0) {
        let possible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let numbersInRow = possible.filter((x) => grid[row].includes(x));
        let numbersInCol = possible.filter((x) =>
          returnCol(grid, col).includes(x)
        );
        let numbersInBox = possible.filter((x) =>
          returnBox(grid, row, col).includes(x)
        );
        let allNumbers = numbersInRow.concat(numbersInCol).concat(numbersInBox);
        possible = possible.filter((x) => !allNumbers.includes(x));
        grid[row][col] = possible;
      }
    }
  }

  function again() {
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        if (grid[row][col] === 0) {
          let possible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          let numbersInRow = possible.filter((x) => grid[row].includes(x));
          let numbersInCol = possible.filter((x) =>
            returnCol(grid, col).includes(x)
          );
          let numbersInBox = possible.filter((x) =>
            returnBox(grid, row, col).includes(x)
          );
          let allNumbers = numbersInRow
            .concat(numbersInCol)
            .concat(numbersInBox);
          possible = possible.filter((x) => !allNumbers.includes(x));
          grid[row][col] = possible;
        }
      }
    }
  }

  remove1Length();

  function remove1Length() {
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        if (typeof grid[row][col] == 'object' && grid[row][col].length === 1) {
          grid[row][col] = grid[row][col][0];
        }
        // console.log(typeof grid[row][col], grid[row][col].length);
      }
    }
  }

  // console.log('finished');

  function checkSolved() {
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        if (typeof grid[row][col] == 'object') {
          return false;
        }
      }
    }
    return true;
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

solve();
