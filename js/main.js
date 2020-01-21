//
//
//
// function doFetch() {
//   fetch("./public/migrants2019.json", { mode: 'cors', method: 'get', headers: { 'Access-Control-Allow-Origin': '*' }})
//     .then(response => response.json())
//     .then(data => {
//
//     let total = 0;
//
//
//       for (let migrantInfo of data) {
//           region = migrantInfo['Region of Incident'];
//           dead = parseFloat(migrantInfo['Number Dead']);
//           console.log(region);
//           // console.log(dead);
//
//           if (region === 'US-Mexico Border') {
//
//             total += dead;
//             console.log(migrantInfo['Web ID']);
//             console.log(dead);
//             console.log(total);
//             // console.log(dead);
//
//           };
//         };
//
//   });
// };
//
// doFetch();




function secondFetch() {
  fetch("./public/region-total.json", { mode: 'cors', method: 'get', headers: { 'Access-Control-Allow-Origin': '*' }})
    .then(response => response.json())
    .then(data => {
    console.log(data);

  });
};

secondFetch();



// hard-coded array below

let migrantStats = [
      [488, 'US-Mexico Border'],
      [326, 'Sub Saharan Africa'],
      [129, 'Europe'],
  ];


function generateBar() {

  for (let migrantInfo of migrantStats) {
        let stat = migrantInfo[0];
        let region = migrantInfo[1];

    let chart = document.querySelector('#BarChart');
    let width = stat *.7 + "px";
    chart.innerHTML += `
        <div class="BarChart-bar" style="width: ${width}">
          ${region}
        </div>
    `;

  };
};

generateBar();


// function generateBar() {
//     let chartDiv = document.querySelector('#BarChart');
//     chartDiv.innerHTML = ''
//
//
//     for (let migrantInfo of migrantStats) {
//         let stat = migrantInfo[0];
//         let region = migrantInfo[1];
//
//         let bar = document.createElement('div');
//
//         bar.classList.add('BarChart-bar');
//         bar.textContent = region;
//         bar.style.width = stat * .7 + "px";
//
//         chartDiv.appendChild(bar);
//     }
// }
//
//
// generateBar();
