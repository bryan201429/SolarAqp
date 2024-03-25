import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './gauge.css'

const Gauge = () => {
  useEffect(() => {
    // setup 

    const chartWidth = document.querySelector('.chartBox').getBoundingClientRect().width;  // Obtener ancho de imagen

    const ctx = document.getElementById('myChart').getContext('2d');
    const gradientSegment= ctx.createLinearGradient(0,0,chartWidth,0);
    gradientSegment.addColorStop(0.0,'#08A045');
    gradientSegment.addColorStop(0.15,'#e5de00');
    // gradientSegment.addColorStop(0.3,'#FF6E00');
    gradientSegment.addColorStop(0.35,'#df2c14');

    gradientSegment.addColorStop(0.55,'#603fef');

    const data = {
      labels: ['Mon'],
      datasets: [{
        label: 'UV INDEX',
        data: [7, 0],                //Valor actual y valor max de gráfico
        backgroundColor: [
          // 'rgba(255, 60, 104, 0.5)',
          gradientSegment,
          'rgba(30, 30, 30, 0.4)',


        ],
        borderColor: [
          'rgba(255, 60, 104, 0)',
          'rgba(100, 100, 100, 0.3)',

        ],
        borderWidth: 1,
        cutout: '75%',          //GROSOR
        circumference: 180,     //medio circulo
        rotation: 270,          //orientación
      }]
    };

    let uvIndex=0;
    if (data.datasets[0].data[0]<3){         // 0 a 2.9
        uvIndex= 'Bajo';
      }else if (data.datasets[0].data[0]>3 && data.datasets[0].data[0]<6){          //3 a 5.9
        uvIndex= 'Moderado';
          }else if (data.datasets[0].data[0]>=6 && data.datasets[0].data[0]<8){      // 6 a 7.9
            uvIndex= 'Alto';
            }else if (data.datasets[0].data[0]>=8 && data.datasets[0].data[0]<11){     // 8 a 10.9
              uvIndex= 'Muy Alto';
              }else if (data.datasets[0].data[0]>=11){                      // 11 a más
                uvIndex= 'Extremo';
                }
    console.log('Uv index: ',uvIndex);
    if(data.datasets[0].data[0]>15){
      data.datasets[0].data[1]=0;
    }else{data.datasets[0].data[1]=15-data.datasets[0].data[0];}

    // config 
    
    const gaugeChartText={  
      id:'gaugeChartText',
      afterDatasetsDraw(chart, args, pluginOptions){
        const {ctx, data, chartArea:{top, bottom, left, right, widht, height},scales:{r}} =chart;
        ctx.save();
        // console.log(chart.getDatasetMeta(0).data[0].x); //Extraer coordenadas centrales para posicionar numero
        const xCoor= chart.getDatasetMeta(0).data[0].x;
        const yCoor= chart.getDatasetMeta(0).data[0].y;
        const score=data.datasets[0].data[0];

        console.log(yCoor);
        // ctx.fillRect(xCoor,yCoor,200,1)

        // ctx.font='20px sans-serif';
        ctx.fillStyle='#603fef';
        // ctx.textBaseLine='top';

        // ctx.textAling='right';
        // ctx.fillText('300',left,yCoor+20);

        // ctx.textAling='right';
        // ctx.fillText('850',right,yCoor+20);

        ctx.font='50px sans-serif'
        ctx.textAlign='center';
        ctx.textBaseLine='bottom';
        ctx.fillText(score,xCoor,yCoor);

        ctx.font='35px sans-serif'
        ctx.textAlign='center';
        ctx.textBaseLine='bottom';
        ctx.fillText(uvIndex,xCoor,yCoor-(yCoor*9/11));

      // If the mouse is hovering over the first dataset, show the uvIndex
      if (chart.tooltip._active && chart.tooltip._active.length && chart.tooltip._active[0].datasetIndex === 0) {
        const uvIndex = calculateUVIndex(data.datasets[0].data[0]);
        ctx.font = '50px sans-serif';
        ctx.fillText(uvIndex, xCoor, yCoor + 40);
      }
      ctx.restore();

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
        animation: {
          duration: 1500
        },
        tooltip:{
          enabled:false,
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