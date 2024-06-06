import './GradientBar.css'
import React, { useEffect, useRef } from 'react';

import Chart from 'chart.js/auto';
import {Bar} from "react-chartjs-2";
import { useState } from 'react';


export default function GradientBar({data}){
    console.log(data)
    useEffect(()=>{
        const ctx = document.getElementById('myChart').getContext('2d');



    },[data])
    
    const [minTemp,setMinTemp]= useState(-10);
    const [maxTemp,setMaxTemp]= useState(40);
    // console.log (minTemp)

    return(
        <div id='gradientBar'>
            {/* {data.temperatura} */}
            {/* <canvas id='canvas'></canvas> */}
            <Bar
                data={{
                    labels:["°C"],
                    datasets: [
                        {
                            label:'Temperature',
                            data: [[minTemp, data.temperatura]], 
                            backgroundColor: (context) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                
                                if (!chartArea) {
                                  // This case happens on initial chart render
                                  return null;
                                }
                                const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
                                gradient.addColorStop(0, 'rgba(0,0,255,1)');
                                gradient.addColorStop(0.4, 'rgba(0,255,0,1)');
                                gradient.addColorStop(0.6, 'rgba(255,255,0,1)');
                                gradient.addColorStop(0.9, 'orange');
                                return gradient;
                              },
                            barThickness: 15,
                        }
                    ]
                }}
                options={{
                    indexAxis:'y',  //Horizontal
                    scales:{
                        x:{
                            display:true,
                            min: minTemp,
                            max: maxTemp,
                            ticks:{
                                color:'white'
                            }
                        },
                        y:{
                            display:false
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins:{
                        legend:{
                            display: false,
                        }
                    }
                }}
            ></Bar>

        </div>
    )
}