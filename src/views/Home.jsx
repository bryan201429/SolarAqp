import './Home.css'
import clouds from '../assets/clouds 3.png'
import sun from '../assets/sun reduced.png'
import Sidebar from '../components/Sidebar.jsx'
import Gauge from '../components/gauge/Gauge'
import { useEffect,useState } from 'react'

export default function Home(){

    const [indexUV, setIndexUV] = useState(7);
    const [temperature, setTemperature] = useState(30.5);
    const [radiationDescription, setRadiationDescription] = useState('');
    const [radiationList, setRadiationList] = useState('');

    const recomendationExtrema = (
        <>
        <h3>- Protector solar amplio espectro: SPF 50+ cada 2 horas</h3>
        <h3>- Evitar Exposición Solar al Máximo, permanecer en sombra</h3>
        <h3>- Hidratación Contínua</h3>
        <h3>- Uso de Sombrero, ropa manga larga y lentes UV</h3>
        </>
    )
    const recomendationMuyAlta = (
        <>
        <h3>- Protector solar amplio espectro: SPF 30+ cada 2 horas</h3>
        <h3>- Reducir exposición solar de ser posible</h3>
        <h3>- Hidratación Contínua</h3>
        <h3>- Uso de Sombrero, ropa manga larga y lentes UV</h3>
        </>
    )
    const recomendationAlta = (
        <>
        <h3>- Protector solar amplio espectro: SPF 30+</h3>
        <h3>- Limitar exposición solar</h3>
        <h3>- Hidratación Contínua</h3>
        <h3>- Uso de Sombrero, ropa manga larga y lentes UV</h3>
        </>
    )
    const recomendationModerada = (
        <>
        <h3>- Protector solar amplio espectro: SPF 30+</h3>
        <h3>- Controlar exposición solar</h3>
        <h3>- Hidratación Contínua</h3>
        <h3>- Uso de ropa ligera que cubra la piel y lentes UV</h3>
        </>
    )
    const recomendationBaja = (
        <>
        <h3>- Uso de Protector solar sugerido SPF30+</h3>
        <h3>- </h3>


        </>
    )


    useEffect(()=>{

    if (indexUV<=3){         // 0 a 2.9
        setRadiationDescription('Radiación Baja');
        setRadiationList(recomendationBaja);
      }else if (indexUV>3 && indexUV<6){          //3 a 5.9
        setRadiationDescription('Radiación Moderada');
        setRadiationList(recomendationModerada);
          }else if (indexUV>=6 && indexUV<8){      // 6 a 7.9
            setRadiationDescription('Radiación Alta');
            setRadiationList(recomendationAlta);
            }else if (indexUV>=8 && indexUV<11){     // 8 a 10.9
               setRadiationDescription('Radiación Muy Alta');
                setRadiationList(recomendationMuyAlta);
              }else if (indexUV>=11){                      // 11 a más
                setRadiationDescription('Radiación Extrema');
                setRadiationList(recomendationExtrema);
                }
    },[indexUV]) ;

    return(
        <div id='HomeContainer'>
            <Sidebar></Sidebar>
            <img src={clouds} id='backClouds'></img>
            <img src={sun} id='backSun'></img>
            <div id='Container1'>

            </div>

            <div id='Container2'>   
                <div id='ClusterGraph'> 
                    <div id='gaugeTitle'>Radiación UV en Tiempo Real</div>
                    <Gauge></Gauge>
                    <div id='gaugeUpdateTime'>
                        <h1>Ultima actualización:</h1>
                        <h2>21:50 PM</h2>
                    </div>
                </div>

                <div id='Recommendations'>
                    <div id='RecomendationsNumbers'> 
                        <div id='indexBox'>
                            <h2 id='indexBoxTitle'>IUV</h2>
                            <h1 id='indexBoxNumber'>{indexUV}</h1>
                        </div>
                        <div id='tempBox'>
                            <h2 id='tempBoxTitle'>°C</h2>
                            <h1 id='tempBoxNumber'>{temperature}</h1>
                        </div>
                    </div>

                    <div id='RecomendationsText'> 
                        <h1 id='RecomendationTextTitle'>{radiationDescription}</h1>
                        <h2 className='RecomendationTextSubtitle'>Recomendaciones:</h2>
                        <div className='RecomendationContainer'>
                            {radiationList}
                        </div>
                        <h2 id='medidasControlTitle'>Medidas de Control:</h2>
                        <div id='medidasControlIconsContainer'> Iconos</div>
                    </div>


                </div>
            </div>
            <div id='Container3'>
                <div id='Chart'></div>
                <div id='ChartInfo'></div>
            </div>

        </div>
    )
}