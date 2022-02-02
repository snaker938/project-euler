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
  dijkstra(results2, [0, 0], [79, 79]);
}

function dijkstra(grid, startCoords, endCoords) {}

// function dijkstra(grid, startIndex, endIndex) {
//   // start();
//   console.log(grid);
//   function start() {
//     let grid2 = cloneVariable(grid);
//     let rowNum = grid[0].length;
//     let colNum = grid.length - 1;

//     for (let row = 0; row < rowNum; row++) {
//       for (let col = 0; col < colNum; col++) {
//         if (row == startIndex[0] && col == startIndex[1]) {
//           grid2[startIndex[0]][startIndex[1]] =
//             grid[startIndex[0]][startIndex[1]];
//         } else {
//           grid2[row][col] = Infinity;
//         }
//       }
//     }
//     grid2.pop();
//   }

//   let frontier = [startIndex];
//   while (frontier.length > 0) {}
// }

function cloneVariable(variableData) {
  return JSON.parse(JSON.stringify(variableData));
}
