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
  next2(results2)
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
  // output()

  // function output() {
  //   if (output.fired === true) {
  //     return
  //   }
  //   output.fired = true
  //   console.log(returnCol(grid,col))
  //   console.log(returnBox(grid, row, col))
  // }

  if (!(number in numbersInCol)) {
    return false;
  }

  let numbersInBox = returnBox(grid, row, col);
  if (!(number in numbersInBox)) {
    return false;
  }

  return true;
}

function solveGrid(grid, gridSize) {

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
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
        if (possible.length === 1) {
        grid[row][col] = possible[0];
        }
      }
    }
  }


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



function next2(wholeGrid) {
  let size = 9;
  let sum = 0;

  for (let numGrid = 0; numGrid < 50; numGrid++) {
    console.log(numGrid)
    let grid = getNextGrid(wholeGrid)
    solveGrid(grid, size)
    let bigNumber = (grid[0][0] * 100) + (grid[0][1] * 10) + grid[0][2]
    sum = sum + bigNumber
  }
  console.log(sum)
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