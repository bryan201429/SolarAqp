import React, { useEffect, useState } from 'react';
import './gauge.css';

export default function Gauge() {
  const [numeroUV, setNumeroUV] = useState(0);
  const [degrees, setDegrees] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumeroUV(5.33); // Aquí estableces el número UV como 15 cada 2 segundos
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // La dependencia es un arreglo vacío, lo que significa que se ejecuta solo una vez al montar el componente

  useEffect(() => {
    const newDegrees = Math.round((numeroUV / 15) * 180);
    setDegrees(newDegrees);
  }, [numeroUV]); // Esta dependencia asegura que se recalcule 'degrees' cada vez que 'numeroUV' cambie

  return (
    <div className="gaugeContainer">
      <h1 className="loader__title">{numeroUV}</h1>

      <div className="loader" style={{ transform: `rotate(${degrees}deg)` }}></div>

    </div>
  );
}
