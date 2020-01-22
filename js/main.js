render();

function generateBar(total, region) {
  let chart = document.querySelector('#BarChart');
  let width = total *1 + "px";
  chart.innerHTML += `
      <div class="BarChart-bar" style="width: ${width}" onClick="alert("Hello");">
        ${region}  &nbsp; &nbsp;

        <span class="total"> ${total} </span>
      </div>
  `;

};



//////////////////////// FUNCTIONS FOR SECOND SET OF DATA ////////////////////////////////////


function drawBarsForMonth(selectedMonth) {
  fetch("./public/migrants2019.json", { mode: 'cors', method: 'get', headers: { 'Access-Control-Allow-Origin': '*' }})
    .then(response => response.json())
    .then(data => {

      let chart = document.querySelector('#BarChart');
      chart.innerHTML = '';
      let total_us = 0;
      let total_med = 0;

      for (let migrantInfo of data) {
          region = migrantInfo['Region of Incident'];
          dead = parseFloat(migrantInfo['Number Dead']);
          month = migrantInfo['Reported Month'];


          if (region === 'US-Mexico Border' && month === selectedMonth) {

            total_us += dead;
            // console.log("web id:", migrantInfo['Web ID']);
            console.log("Total US Border:", total_us);
            console.log(month);
          };


          if (region === 'Mediterranean' && month === selectedMonth) {
            total_med += dead;
            // console.log("web id:", migrantInfo['Web ID']);
            console.log("Total Mediterranean:", total_med);
            console.log(month);
          };


        // ending bracket for loop
        };

// calling functions after the for loop is complete

      drawMonthBar(total_us, "US-Mexico Border");
      drawMonthBar(total_med, "Mediterranean");


    //data => { ending bracket
  });
  // end bracket doFetch() {
};


// fetchMonthDec();

function drawMonthBar(total, region) {
  let chart = document.querySelector('#BarChart');
  let width = total * 5 + "px";
  chart.innerHTML += `
      <div class="BarChart-bar" style="width: ${width}" onClick="alert("Hello");">
        ${region}
        <span class="total">  ${total}  </span>
      </div>
  `;
};




function render(data){
  let chart = document.querySelector('#BarChart');
  chart.innerHTML = '';

  let selectElement = document.querySelector("#months")
  let selectedMonth = selectElement.options[selectElement.selectedIndex].value

  if (selectedMonth) {
    drawBarsForMonth(selectedMonth)
  } else {
    fetch("./public/region-total.json", { mode: 'cors', method: 'get', headers: { 'Access-Control-Allow-Origin': '*' }})
      .then(response => response.json())
      .then(data => {
      console.log(data);

      drawDefaultBars(data)
    });
  }
}

function drawDefaultBars(data) {
  for (let migrantInfo of data) {
        let region = migrantInfo.region;
        let total = migrantInfo.total;

      generateBar(total, region);
    };
}
