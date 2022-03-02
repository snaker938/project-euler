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
  console.log(results2);
}

let graph = [
  [Infinity, '16', '12', '21', Infinity, Infinity, Infinity],
  ['16', Infinity, Infinity, '17', '20', Infinity, Infinity],
  ['12', Infinity, Infinity, '28', Infinity, '31', Infinity],
  ['21', '17', '28', Infinity, '18', '19', '23'],
  [Infinity, '20', Infinity, '18', Infinity, Infinity, '11'],
  [Infinity, Infinity, '31', '19', Infinity, Infinity, '27'],
  [Infinity, Infinity, Infinity, '23', '11', '27', Infinity],
];

let newGraph = [
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
];

let currentTree = [];
let verticies = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let connections = [];
let colNumbers = [];

// while (cur)
for (let currentRow = 0; currentRow < 7; currentRow++) {
  let newRow = cloneVariable(graph[currentRow]);
  newRow = convertNulls(newRow);
  // console.log(newRow);
  newRow = sliceRow(newRow);

  // console.log(newRow);

  let smallestNumberCol = getSmallestNumberCol(currentRow, newRow);

  if (smallestNumberCol === -1) {
    continue;
  }

  // console.log(smallestNumberCol, randomRow);

  // currentTree.push();
  // let connection1 = verticies[currentRow] + verticies[smallestNumberCol];
  // let connection2 = verticies[smallestNumberCol] + verticies[currentRow];
  // connections.push(connection1, connection2);

  colNumbers.push(smallestNumberCol);
  // console.log(connection1, connection2, connections);

  newGraph[currentRow][smallestNumberCol] =
    graph[currentRow][smallestNumberCol];

  console.log(
    graph[currentRow][smallestNumberCol],
    currentRow,
    smallestNumberCol
  );
  // newGraph[currentRow][smallestNumberCol] = String(Math.min(...newRow));
}

function convertNulls(row) {
  let count = 0;
  for (value of row) {
    if (value == null) {
      row[count] = Infinity;
    }
    count++;
  }
  return row;
}

function getSmallestNumberCol(currentRow, newRow) {
  let colNumber = newRow.indexOf(String(Math.min(...newRow)));

  // console.log(colNumber, newRow);
  // console.log(newRow);
  // let connection1 = verticies[currentRow] + verticies[colNumber];

  // console.log(connection1, colNumber, newRow);

  let count = 0;

  return colNumber;
}

console.log(newGraph, getValue(newGraph));

function sliceRow(row) {
  let col = 0;
  for (value of row) {
    if (col in colNumbers) {
      // row[col] = Infinity;
    }
    col++;
  }

  return row;
}

function getValue(graph) {
  let sum = 0;
  for (let row of graph) {
    for (let value of row) {
      if (value !== Infinity) {
        sum = sum + Number(value);
      }
    }
  }
  return sum;
}

function cloneVariable(variableData) {
  return JSON.parse(JSON.stringify(variableData));
}
