import './ChartInfoBox.css'
import { useEffect } from 'react';
import { useState } from 'react';


export default function ChartInfoBox(){
    let ChartInfoBodyData1 = (
        <div>
            Info1
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
                        <button id='button1' className='infoButton1' onClick={buttonChange1}></button>
                        <button id='button2' className='infoButton2 infoButtonInactive2' onClick={buttonChange2}></button>
                    </div>
                    <div id='ChartInfoBody'>
                        {chartInfoBodyData}
        </div>
        </>
    )

}