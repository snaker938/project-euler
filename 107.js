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

let numVertices = 6;

let keys = [
  0,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
];

let verticies = ['A', 'B', 'C', 'D', 'E', 'F'];
let currentMinimumTree = [];

let count = 0;

while (currentMinimumTree.length !== numVertices) {
  let currentVertex = getCurrentVertex();
  if (currentVertex !== undefined) {
    currentMinimumTree.push(currentVertex);
  }

  console.log('');

  let indexOfCurrentVertex = verticies.indexOf(currentVertex);

  let adjacentVerticies = getAdjacentVerticies(indexOfCurrentVertex);
  console.log(adjacentVerticies, currentVertex, currentMinimumTree);

  count += 1;
  if (count == 6) {
    break;
  }
}

function getAdjacentVerticies(currentIndex) {
  let adjacentVerticices = [];
  let row = graph[currentIndex];
  for (let index = 0; index < numVertices; index++) {
    if (row[index] !== '-') {
      adjacentVerticices.push(verticies[index]);
    }
  }
  return adjacentVerticices;
}

function getAdjacentVerticiesWeights(currentIndex) {
  let adjacentVerticices = [];
  let row = graph[currentIndex];
  for (vertex in row) {
    if (vertex !== '-') {
      adjacentVerticices.push(vertex);
    }
  }
}

function getCurrentVertex() {
  let currentMin = Infinity;
  let vertex;
  for (let i = 0; i < numVertices; i++) {
    if (
      keys[i] < currentMin &&
      currentMinimumTree.indexOf(verticies[i]) == -1
    ) {
      currentMin = keys[i];
      vertex = verticies[i];
    }
  }
  return vertex;
  //   let keysInMinimumOrder = Math.min(...keys);
  //   for (let key of keysInMinimumOrder) {
  //     if (currentMinimumTree.indexOf(key) == null) {
  //       continue;
  //     } else {
  //       return currentMinimumTree.indexOf(key);
  //     }
  //   }
}
