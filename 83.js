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
  dijkstra(results2, [0, 0], [79, 79]);
}

//   function generateTableHead(table, data) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data) {
//       let th = document.createElement('th');
//       let text = document.createTextNode(key);
//       th.appendChild(text);
//       row.appendChild(th);
//     }
//   }

//   function generateTableRows(table, data) {
//     let newRow = table.insertRow(-1);
//     data.map((row, index) => {
//       let newCell = newRow.insertCell();
//       let newText = document.createTextNode(row);
//       newCell.appendChild(newText);
//     });
//   }

function dijkstra(grid, startIndex, endIndex) {
  start();
  function start() {
    let grid2 = cloneVariable(grid);
    let rowNum = grid[0].length;
    let colNum = grid.length - 1;

    for (let row = 0; row < rowNum; row++) {
      for (let col = 0; col < colNum; col++) {
        if (row == startIndex[0] && col == startIndex[1]) {
          grid2[startIndex[0]][startIndex[1]] =
            grid[startIndex[0]][startIndex[1]];
        } else {
          grid2[row][col] = Infinity;
        }
      }
    }
    grid2.pop();
  }

  let frontier = [startIndex];
  while (frontier.length > 0) {}
}

function cloneVariable(variableData) {
  return JSON.parse(JSON.stringify(variableData));
}
