import './GradientBar.css'
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function GradientBar({data}){
    console.log(data)
    useEffect(()=>{
        const ctx = document.getElementById('myChart').getContext('2d');


        // //Inicializar
        // const myChart = new Chart(
        //     document.getElementById('myChart'),
        //     config
        //   );
        // return () => {
        // myChart.destroy();
        // };
    },[])
    

    return(
        <div id='gradientBar'>
            {data.temperatura}
            <canvas id='canvas'></canvas>
        </div>
    )
}