import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function LineChart() {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy(); // Destruir el gráfico existente si existe
            }

            const ctx = chartContainer.current.getContext('2d');

            chartInstance.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: UserData.map(data => data.time),
                    datasets: [{
                        label: 'Indice UV   ',
                        data: UserData.map(data => data.uv),
                        borderColor: 'rgb(0, 255, 100)',
                        fill: true,
                        backgroundColor:'rgba(0, 200, 180,0.35)',
                    },
                    {
                        label: 'Temperatura °C',
                        data: UserData.map(data => data.temperature),
                        borderColor: 'rgb(255,80,80)',
                        fill: true,
                        backgroundColor:'rgba(255, 99, 132,0.3)',
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid:{
                                color:'rgba(255,255,255,0.2)'
                            },
                            ticks:{
                                color:'rgba(255,255,255,0.9)'
                            }
                        },
                        x:{
                            grid:{
                                color:'rgba(255,255,255,0.2)'
                            },
                            ticks:{
                                color:'rgba(255,255,255,0.9)'
                            }
                        }
                    },
                    animation:{
                        duration:3000
                    },
                    responsive:true,
                    maintainAspectRatio:false,
                    plugins:{
                        legend:{
                            labels:{
                                color:'white'
                            }
                        }
                    }
                }
            });
        }
    }, []);

    return (
        <div id='canvasContainer' style={{position: "relative", height:"100%", width:"100%"}}>
            <canvas ref={chartContainer} id='canvas'></canvas>
        </div>
    );
}

const UserData = [
    {
        id: 1,
        time: "10:00",
        uv: 14,
        temperature: 10,
    },
    {
        id: 2,
        time: "10:00",
        uv: 13,
        temperature: 10,
    },
    {
        id: 3,
        time: "10:00",
        uv: 15,
        temperature: 18,
    },
    {
        id: 4,
        time: "10:00",
        uv: 18,
        temperature: 22,
    },
    {
        id: 5,
        time: "10:00",
        uv: 14,
        temperature: 25,
    },
    {
        id: 6,
        time: "10:00",
        uv: 12,
        temperature: 16,
    },
    {
        id: 7,
        time: "10:00",
        uv: 10,
        temperature: 10,
    },
];
