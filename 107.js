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
  ['-', '16', '12', '21', '-', '-', '-'],
  ['16', '-', '-', '17', '20', '-', '-'],
  ['12', '-', '-', '28', '-', '31', '-'],
  ['21', '17', '28', '-', '18', '19', '23'],
  ['-', '20', '-', '18', '-', '-', '11'],
  ['-', '-', '31', '19', '-', '-', '27'],
  ['-', '-', '-', '23', '11', '27', '-'],
];

let newGraph = [
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
];

let currentTree = [];
let verticies = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let connections = [];

// while (cur)
for (let currentRow = 0; currentRow < 7; currentRow++) {
  let newRow = cloneVariable(graph[currentRow]);
  newRow = sliceRow(newRow);

  // console.log(newRow);

  let outputs = getSmallestNumberCol(
    cloneVariable(currentRow),
    cloneVariable(newRow)
  );

  let smallestNumberCol = outputs[0];
  let randomRow = outputs[1];

  if (smallestNumberCol === -1) {
    continue;
  }

  // console.log(smallestNumberCol, randomRow);

  // currentTree.push();
  let connection1 = verticies[currentRow] + verticies[smallestNumberCol];
  let connection2 = verticies[smallestNumberCol] + verticies[currentRow];
  connections.push(connection1, connection2);

  // console.log(connection1, connection2, connections);

  newGraph[currentRow][smallestNumberCol] =
    graph[currentRow][smallestNumberCol];
  // newGraph[currentRow][smallestNumberCol] = String(Math.min(...newRow));
}

function getSmallestNumberCol(currentRow, newRow) {
  let colNumber = newRow.indexOf(String(Math.min(...newRow)));
  let connection1 = verticies[currentRow] + verticies[colNumber];

  let count = 0;

  let loop = graph[currentRow][colNumber] == '-';

  // if (connections.indexOf(connection1) !== -1) {
  //   console.log(newRow, 'edl', String(Math.min(...newRow)));
  // }

  while (
    (!(connections.indexOf(connection1) == -1) &&
      !(graph[currentRow][colNumber] == '-')) ||
    loop
  ) {
    loop = false;
    newRow.splice(colNumber, 1);
    colNumber = newRow.indexOf(String(Math.min(...newRow)));
    connection1 = verticies[currentRow] + verticies[colNumber];
    // console.log(connections, connection1);
    // console.log(
    //   verticies[currentRow],
    //   verticies[colNumber],
    //   currentRow,
    //   colNumber,
    //   newRow,
    //   ...newRow

    count = count + 1;
    if (count > 50) {
      console.log('ending');
      return [-1, newRow];
    }
  }
  // console.log(connection1, connections, connections.indexOf(connection1));
  // console.log(colNumber, connections.indexOf(connection1), connection1);
  // console.log(
  //   newRow,
  //   connection1,
  //   graph[currentRow][colNumber],
  //   graph[currentRow][colNumber] == '-'
  // );
  console.log(colNumber, connection1, graph[currentRow][colNumber] == '-');
  return [colNumber, newRow];
}

console.log(newGraph, getValue(newGraph));

function sliceRow(row) {
  let newRow = row.filter(function (value) {
    return value !== '-';
  });
  return newRow;
}

function getValue(graph) {
  let sum = 0;
  for (let row of graph) {
    for (let value of row) {
      if (value !== '-') {
        sum = sum + Number(value);
      }
    }
  }
  return sum;
}

// let numVertices = 7;
// let keys = [0, 9999, 9999, 9999, 9999, 9999, 9999];

// let verticies = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// let currentMinimumTree = [];

// function getCurrentVertex() {
//   let currentMin = Infinity;
//   let vertex;
//   for (let i = 0; i < numVertices; i++) {
//     // console.log(keys[i], currentMin, vertex, currentMinimumTree);
//     if (
//       keys[i] < currentMin &&
//       currentMinimumTree.indexOf(verticies[i]) == -1
//     ) {
//       currentMin = keys[i];
//       vertex = verticies[i];
//     }
//   }
//   return vertex;
// }

// function getAdjacentVerticiesWeightsInfo(currentIndex) {
//   let adjacentVerticicesWeights = [];
//   let indexOfWeights = [];
//   // console.log(currentIndex);
//   let row = graph[currentIndex];
//   let count = 0;
//   for (vertex of row) {
//     if (vertex !== '-') {
//       adjacentVerticicesWeights.push(vertex);
//       indexOfWeights.push(count);
//     }
//     count += 1;
//   }
//   return [adjacentVerticicesWeights, indexOfWeights];
// }

function cloneVariable(variableData) {
  return JSON.parse(JSON.stringify(variableData));
}
