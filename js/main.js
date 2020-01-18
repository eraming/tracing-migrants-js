//
// fetch("./data/migraths2019.json");
//   .then(response => response.json());
//   .then(data => {
//   console.log("Got the data!");
//   console.log(data);
// // TODO: Call a function to do something with this data.
// });

  // let chart = document.querySelector('#BarChart-bar');
  // let height = 70;
  // chart.innerHTML += `
  //     <div style="height: ${height}%">
  //       Test BarChart
  //     </div>
  // `;

  let migrantStats = [
      [488, 'US-Mexico Border'],
      [326, 'Sub Saharan Africa'],
      [129, 'Europe'],
  ];

function render() {
    let chartDiv = document.querySelector('#BarChart');
    chartDiv.innerHTML = '';

    for (let migrantInfo of migrantStats) {
        let stat = migrantInfo[0];
        let region = migrantInfo[1];

        let bar = document.createElement('div');

        bar.classList.add('BarChart-bar');
        bar.textContent = region;
        bar.style.width = stat * .7 + "px";

        chartDiv.appendChild(bar);
    }
}

render();
