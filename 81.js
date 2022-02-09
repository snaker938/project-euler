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
  results2.pop();
  dijkstra(results2);
}

const numRows = 79;
const numCols = 79;

function dijkstra(graph) {
  let graph2 = cloneVariable(graph);
  let startCoordCol = 0;
  let endNodeCoordCol = 79;
  let currentShortestDistance = Infinity;
  for (let startCoordRow = 0; startCoordRow <= 79; startCoordRow++) {
    for (let endCoordRow = 0; endCoordRow <= 79; endCoordRow++) {
      reset(graph2);
      let allUnvisitedNodes = getAllNodes(graph2);

      let currentNode = graph[startCoordRow][startCoordCol];
      currentNode[0] = currentNode[1];
      let otherVisitedNodes = [];
      otherVisitedNodes.push(currentNode);

      while (allUnvisitedNodes.length !== 0) {
        sortNodesByDistance(allUnvisitedNodes);
        currentNode = allUnvisitedNodes.shift();
        updateAllNeighboursOfNode(graph, currentNode);

        if (currentNode[2][0] == numRows && currentNode[2][1] == numCols) {
          console.log('end reached', currentNode);
          break;
        }
      }
      let shortestPath = getShortestPathOrder(
        graph[endCoordRow][endNodeCoordCol]
      );
      console.log(shortestPath[shortestPath.length - 1]);
      if (shortestPath[shortestPath.length - 1][0] < currentShortestDistance) {
        currentShortestDistance = shortestPath[shortestPath.length - 1][0];
      }
    }
  }
  console.log(currentShortestDistance);
}

function getShortestPathOrder(endNode) {
  let shortestPathNodeOrder = [];
  let currentNode = endNode;
  while (currentNode != null) {
    shortestPathNodeOrder.unshift(currentNode);
    currentNode = currentNode[3];
  }

  return shortestPathNodeOrder;
}

function updateAllNeighboursOfNode(grid, currentNode) {
  let neighboursOfNode = [];
  const row = currentNode[2][0];
  const col = currentNode[2][1];

  if (row > 0 && grid[row - 1][col][0] > currentNode[0] + grid[row - 1][col][1])
    neighboursOfNode.unshift(grid[row - 1][col]); // top neighbour
  if (
    row < numRows &&
    grid[row + 1][col][0] > currentNode[0] + grid[row + 1][col][1]
  )
    neighboursOfNode.unshift(grid[row + 1][col]); // bottom neighbour
  //   if (col > 0 && grid[row][col - 1][0] > currentNode[0] + grid[row][col - 1][1])
  //     neighboursOfNode.unshift(grid[row][col - 1]); // left neighbour
  if (
    col < numCols &&
    grid[row][col + 1][0] > currentNode[0] + grid[row][col + 1][1]
  )
    neighboursOfNode.unshift(grid[row][col + 1]); // right neighbour

  changeDistances(neighboursOfNode, currentNode[0], currentNode);
  return;
}

function changeDistances(neighbours, currentDistance, currentNode) {
  for (let neighbour of neighbours) {
    neighbour[0] = currentDistance + neighbour[1];
    neighbour[3] = currentNode;
  }
  return;
}

function reset(graph) {
  let rowN = 0;
  let colN = 0;
  for (const row of graph) {
    for (let node of row) {
      let node2 = [Infinity, Number(node), [rowN, colN], null];
      graph[rowN][colN] = node2;
      if (colN != numCols) colN += 1;
      else colN = 0;
    }
    if (rowN != numRows) rowN += 1;
    else rowN = 0;
  }
}

function getAllNodes(graph) {
  const allNodes = [];

  for (const row of graph) {
    for (const node of row) {
      allNodes.push(node);
    }
  }
  return allNodes;
}

function sortNodesByDistance(nodesToBeSorted) {
  nodesToBeSorted.sort((node1, node2) => node1[0] - node2[0]);
}

function cloneVariable(variableData) {
  return JSON.parse(JSON.stringify(variableData));
}
