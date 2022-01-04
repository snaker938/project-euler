let resultsVariable = null;

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

// function generateTableHead(table, data) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = document.createElement('th');
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }

// function generateTableRows(table, data) {
//   let newRow = table.insertRow(-1);
//   data.map((row, index) => {
//     let newCell = newRow.insertCell();
//     let newText = document.createTextNode(row);
//     newCell.appendChild(newText);
//   });
// }

function next(results) {
  results = Array(results)[0].data;
  results.pop();
  for (let i = 99; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      results[i][j] = Number(results[i][j]);
      if (results[i][j][0] === '0') {
        results[i][j] = results[i][j][1];
      }
    }
  }

  for (row of results) {
    for (number of row) {
      let length = row.length;
      for (let count = 0; count < 100 - length; count++) row.push(0);
    }
  }

  for (let i = 98; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      results[i][j] =
        results[i][j] + Math.max(results[i + 1][j], results[i + 1][j + 1]);
    }
  }
  console.log(results);
}
