render();

function generateBar(total, region) {
  let chart = document.querySelector('#BarChart');
  let width = total * 1 + "px";
  chart.innerHTML += `
      <div class="BarChart-bar" style="width: ${width}" onClick="alert("Hello");">
        ${region}  &nbsp; &nbsp;

        <span class="total"> ${total} </span>
      </div>
  `;

};


///////////////     FUNCTIONS FOR SECOND DATA DIMENSION       ////////////////////////////////


function drawBarsForMonth(selectedMonth) {
  fetch("./public/migrants2019.json", { mode: 'cors', method: 'get', headers: { 'Access-Control-Allow-Origin': '*' }})
    .then(response => response.json())
    .then(data => {

      let chart = document.querySelector('#BarChart');
      chart.innerHTML = '';
      let total_us = 0;
      let total_sah = 0;
      let total_sea = 0
      let total_sasia = 0;
      let total_sam = 0;
      let total_horn = 0;
      let total_naf = 0;
      let total_me = 0;
      let total_med = 0;
      let total_eur = 0;
      let total_cen = 0;
      let total_carr = 0;


      for (let migrantInfo of data) {
          region = migrantInfo['Region of Incident'];
          dead = parseFloat(migrantInfo['Number Dead']);
          month = migrantInfo['Reported Month'];


          if (region === 'US-Mexico Border' && month === selectedMonth) {
            total_us += dead;
            // console.log("web id:", migrantInfo['Web ID']);
            // console.log("Total US Border:", total_us);
            // console.log(month);
          };
          if (region === 'Sub Saharan Africa' && month === selectedMonth) {
            total_sah += dead;
          };
          if (region === 'South East Asia' && month === selectedMonth) {
            total_sea += dead;
          };
          if (region === 'South Asia' && month === selectedMonth) {
            total_sasia += dead;
          };
          if (region === 'South America' && month === selectedMonth) {
            total_sam += dead;
          };
          if (region === 'North Africa' && month === selectedMonth) {
            total_naf += dead;
          };
          if (region === 'Horn of Africa' && month === selectedMonth) {
            total_horn += dead;
          };
          if (region === 'Middle East' && month === selectedMonth) {
            total_me += dead;
          };
          if (region === 'Mediterranean' && month === selectedMonth) {
            total_med += dead;
          };
          if (region === 'Europe' && month === selectedMonth) {
            total_eur += dead;
          };
          if (region === 'Central America' && month === selectedMonth) {
            total_cen += dead;
          };
          if (region === 'Caribbean' && month === selectedMonth) {
            total_carr += dead;
          };

        // ending bracket for loop
        };

// calling drawMonthBar after for loop count is complete

      drawMonthBar(total_us, "US-Mexico Border");
      drawMonthBar(total_sah, "Sub Saharan Africa");
      drawMonthBar(total_sea, "South East Asia");
      drawMonthBar(total_sasia, "South Asia");
      drawMonthBar(total_sam, "South America");
      drawMonthBar(total_naf, "North Africa");
      drawMonthBar(total_horn, "Horn of Africa");
      drawMonthBar(total_me, "Middle East");
      drawMonthBar(total_med, "Mediterranean");
      drawMonthBar(total_eur, "Europe");
      drawMonthBar(total_cen, "Central America");
      drawMonthBar(total_carr, "Caribbean");


    //data => { ending bracket
  });
  // end bracket doFetch() {
};



function drawMonthBar(total, region) {

  if (total > 1) {
    let chart = document.querySelector('#BarChart');
    let width = total * 5 + "px";
    chart.innerHTML += `
        <div class="BarChart-bar" style="width: ${width}" onClick="alert("Hello");">
          ${region}
          <span class="total">  ${total}  </span>
        </div>
    `;

  };

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
