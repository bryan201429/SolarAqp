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
                    labels: UserData.map(data => data.year),
                    datasets: [{
                        label: 'User Gain',
                        data: UserData.map(data => data.userGain),
                        borderColor: 'rgb(75, 192, 192)',
                        fill: true,
                        backgroundColor:'rgba(75, 192, 192,0.1)',
                    },
                    {
                        label: 'User Lost',
                        data: UserData.map(data => data.userLost),
                        borderColor: 'rgb(255, 99, 132)',
                        fill: true,
                        backgroundColor:'rgba(255, 99, 132,0.6)',
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
                    }

                }
            });
        }
    }, []);

    return (
        <div>
            <canvas ref={chartContainer}></canvas>
        </div>
    );
}

const UserData = [
    {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 50000,
    },
    {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 34500,
    },
    {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 55500,
    },
    {
        id: 4,
        year: 2019,
        userGain: 90000,
        userLost: 45550,
    },
    {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 2340,
    },
];
