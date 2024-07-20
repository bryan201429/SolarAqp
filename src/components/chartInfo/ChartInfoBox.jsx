import './ChartInfoBox.css'
import { useEffect } from 'react';
import { useState } from 'react';


export default function ChartInfoBox(){
    let ChartInfoBodyData1 = (
        <div className='info1'>
            <div className='containerInfo'>
                <h1>Indice UV mas alta:</h1><h1>1</h1>
            </div>

                <hr className='divider'></hr>  

            <div className='containerInfo'>
                <h1>Hora de pico de radiación:</h1> <h1>1</h1>
            </div>

                <hr className='divider'></hr>  

            <div className='containerInfo'> 
                <h1>Temperatura mas alta: </h1> <h1>1</h1>
            </div>
                <hr className='divider'></hr>  
            <div className='containerInfo'> 
                <h1>Temperaturas mas baja:</h1> <h1>1</h1>
            </div>
            <hr className='divider'></hr>  
            <div className='containerInfo'> 
            <h1>Humedad mas alta: </h1> <h1>1</h1>
            </div>
            <hr className='divider'></hr>  

            <div className='containerInfo'> 
            <h1>Humedad mas baja:</h1> <h1>1</h1>
            </div>

             
                
   
                
        </div>


    )
    let ChartInfoBodyData2 = (
        <div>
            Info2
        </div>
    )
    const [chartInfoBodyData,setChartInfoBodyData]=useState(ChartInfoBodyData1);
    
    function buttonChange1(e){
        e.target.classList.remove('infoButtonInactive1');
         document.querySelector('#button2').classList.add('infoButtonInactive2');
         setChartInfoBodyData(ChartInfoBodyData1);
     }
    function buttonChange2(e){
       e.target.classList.remove('infoButtonInactive2');
        document.querySelector('#button1').classList.add('infoButtonInactive1')

        setChartInfoBodyData(ChartInfoBodyData2);
    }

    return(
        
        <>
        <div id='ButtonContainer'> 
                        <button id='button1' className='infoButton1' onClick={buttonChange1}> Estadísticas de Hoy</button>
                        <button id='button2' className='infoButton2 infoButtonInactive2' onClick={buttonChange2}>Consultar por fecha</button>
        </div>
                    <div id='ChartInfoBody'>
                        {chartInfoBodyData}
                    </div>
        </>
    )

}