import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Gauge = () => {
  useEffect(() => {
    // setup 
    const data = {
      labels: ['Mon', 'Tue'],
      datasets: [{
        label: 'Weekly Sales',
        data: [18, 12],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(180, 162, 235, 1)',


        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1,
        cutout: '50%'          //GROSOR
      }]
    };

    // config 

    // const gaugeText={
    //   id:'gaugeChartText',
    //   afterDatasetsDraw(chart, args, pluginOptions){

    //   }
    // }
    const config = {
      type: 'doughnut',
      data,
      options: {
        plugins:{
          legend:{
            display:false
          }
        },
        tooltip:{
          enabled:false
        }

      }
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

    // Clean up
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      <div className="chartMenu">
      </div>
      <div className="chartCard">
        <div className="chartBox">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
};

export default Gauge;