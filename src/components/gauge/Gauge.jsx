import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './gauge.css'

const Gauge = () => {
  useEffect(() => {
    // setup 
    const data = {
      labels: ['Mon', 'Tue'],
      datasets: [{
        label: 'Weekly Sales',
        data: [650, 200],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(180, 162, 235, 1)',


        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1,
        cutout: '50%',          //GROSOR
        circumference: 180,     //medio circulo
        rotation: 270,          //orientación
      }]
    };

    // config 

    const gaugeChartText={
      id:'gaugeChartText',
      afterDatasetsDraw(chart, args, pluginOptions){
        const {ctx, data, chartArea:{top, bottom, left, right, widht, height},scales:{r}} =chart;
        ctx.save();
        // console.log(chart.getDatasetMeta(0).data[0].x); //Extraer coordenadas centrales para posicionar numero
        const xCoor= chart.getDatasetMeta(0).data[0].x;
        const yCoor= chart.getDatasetMeta(0).data[0].y;
        console.log(yCoor);

        ctx.fillRect(xCoor,yCoor,400,1)
        ctx.font='50px sans-serif';
        ctx.fillStyle='#666';
        ctx.fillText('300',left,yCoor);
      }
    }
    const config = {
      type: 'doughnut',
      data,
      options: {
        aspectRatio:1,
        plugins:{
          legend:{
            display:false
          }
        },
        tooltip:{
          enabled:false
        }
      },
      plugins:[gaugeChartText]
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
      <div className="chartCard">
        <div className="chartBox">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
};

export default Gauge;