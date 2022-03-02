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

let numVertices = 7;

let keys = [0, 9999, 9999, 9999, 9999, 9999, 9999];

let verticies = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let currentMinimumTree = [];

while (currentMinimumTree.length !== numVertices) {
  // console.log('running again', keys);
  let currentVertex = getCurrentVertex();
  if (currentVertex !== undefined) {
    currentMinimumTree.push(currentVertex);
  }
  // console.log(currentVertex);

  let indexOfCurrentVertex = verticies.indexOf(currentVertex);

  // let adjacentVerticies = getAdjacentVerticies(indexOfCurrentVertex);

  let adjacentVerticiesWeights =
    getAdjacentVerticiesWeightsInfo(indexOfCurrentVertex);

  for (let adjacentVertexIndex of adjacentVerticiesWeights[1]) {
    if (
      adjacentVerticiesWeights[0][adjacentVertexIndex] <
      keys[adjacentVertexIndex]
    ) {
      keys[adjacentVertexIndex] =
        adjacentVerticiesWeights[0][adjacentVertexIndex];
    }
  }
  console.log(adjacentVerticiesWeights);
}

console.log(currentMinimumTree, keys);

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

function getAdjacentVerticiesWeightsInfo(currentIndex) {
  let adjacentVerticicesWeights = [];
  let indexOfWeights = [];
  // console.log(currentIndex);
  let row = graph[currentIndex];
  let count = 0;
  for (vertex of row) {
    if (vertex !== '-') {
      adjacentVerticicesWeights.push(vertex);
      indexOfWeights.push(count);
    }
    count += 1;
  }
  return [adjacentVerticicesWeights, indexOfWeights];
}

function getCurrentVertex() {
  let currentMin = Infinity;
  let vertex;
  for (let i = 0; i < numVertices; i++) {
    // console.log(keys[i], currentMin, vertex, currentMinimumTree);
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
