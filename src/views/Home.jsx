import './Home.css'
import clouds from '../assets/clouds 3.png'
import sun from '../assets/sun reduced.png'
import Sidebar from '../components/Sidebar.jsx'
import Gauge from '../components/gauge/Gauge'
import sunglasses from '../assets/icons/sunglasses.png'
import hat from '../assets/icons/hat.png'
import protector from '../assets/icons/protector.png'
import sweater from '../assets/icons/sweater.png'
import umbrella from '../assets/icons/umbrella.png'
import water from '../assets/icons/water.png'
import { useEffect,useState } from 'react'
import LineChart from '../components/chart/LineChart.jsx'
import ChartInfoBox from '../components/chartInfo/ChartInfoBox.jsx'

export default function Home(){

    const [indexUV, setIndexUV] = useState(5.5);
    const [temperature, setTemperature] = useState(30.5);
    const [radiationDescription, setRadiationDescription] = useState('');
    const [radiationList, setRadiationList] = useState('');
    const [icons,setIcons] =useState('');
    const [indexBox,setIndexBox] = useState('')   


    const recomendationExtrema = (
        <>
        <h3>- Protector solar amplio espectro: SPF 50+ cada 2 Hrs.</h3>
        <h3>- Evitar Exposición Solar al Máximo</h3>
        <h3>- Hidratación Contínua</h3>
        <h3>- Uso de Sombrero, ropa manga larga y lentes UV</h3>
        </>
    )
    const recomendationMuyAlta = (
        <>
        <h3>- Protector solar amplio espectro: SPF 30+ cada 2 Hrs.</h3>
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
        <h3>- Uso de Protector solar sugerido: SPF30+</h3>
        </>
    )

    const controlIconsExtrema = (
        <>
        <img src={protector}></img>
        <img src={hat}></img>
        <img src={sweater}></img>
        <img src={water}></img>
        <img src={sunglasses}></img>
        <img src={umbrella}></img>
        </>
    )
    const controlIconsModerada = (
        <>
        <img src={protector}></img>
        <img src={hat}></img>
        <img src={water}></img>
        <img src={sunglasses}></img>
        </>
    )
    const controlIconsbaja = (
        <>
        <img src={hat}></img>
        <img src={water}></img>
        </>
    )




    useEffect(()=>{

    if (indexUV<=3){         // 0 a 2.9
        setRadiationDescription('Radiación Baja');
        setIndexBox('low');
        setRadiationList(recomendationBaja);
        setIcons(controlIconsbaja);
      }else if (indexUV>3 && indexUV<6){          //3 a 5.9
        setIndexBox('medium');
        setRadiationDescription('Radiación Moderada');
        setRadiationList(recomendationModerada);
        setIcons(controlIconsModerada);
          }else if (indexUV>=6 && indexUV<8){      // 6 a 7.9
            setIndexBox('high');
            setRadiationDescription('Radiación Alta');
            setRadiationList(recomendationAlta);
            setIcons(controlIconsExtrema);
            }else if (indexUV>=8 && indexUV<11){     // 8 a 10.9
                setRadiationDescription('Radiación Muy Alta');
                setIndexBox('very-high');
                setRadiationList(recomendationMuyAlta);
                setIcons(controlIconsExtrema);
              }else if (indexUV>=11){                      // 11 a más
                setRadiationDescription('Radiación Extrema');
                setIndexBox('extreme');
                setRadiationList(recomendationExtrema);
                setIcons(controlIconsExtrema);
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
                        <div id='indexBox' className={indexBox}>
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
                        <div id='medidasControlIconsContainer'> 
                            {icons}
                        </div>
                    </div>


                </div>
            </div>
            <div id='Container3'>
                    
                <div id='ChartContainer'>
                    <h2 id='ChartTitle'>Historial gráfico</h2>
                    <LineChart></LineChart>
                </div>
                <div id='ChartInfo'>
                    {/* <div id='ButtonContainer'> 
                        <button id='button1' className='infoButton1' onClick={buttonChange1}></button>
                        <button id='button2' className='infoButton2 infoButtonInactive2' onClick={buttonChange2}></button>
                    </div>
                    <div id='ChartInfoBody'>
                        {chartInfoBodyData}
                    </div> */}
                    <ChartInfoBox></ChartInfoBox>
                </div>
            </div>

        </div>
    )
}