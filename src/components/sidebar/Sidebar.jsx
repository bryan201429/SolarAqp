import React,{useState, useEffect} from 'react'
import 'tailwindcss/tailwind.css';
// import 'animate.css';

import './Sidebar.css'
import mainLogo from '../../assets/main logos/mainlogo1nobg.png' 
export default function Sidebar(){
    const [time, setTime] = useState('nada');

useEffect(()=>{

    function formatHour(k){
        return k<10? '0'+k:k
    }
    function currentTime(){
        let date = new Date();
        let hours = date.getHours(); hours=formatHour(hours);
        let min = date.getMinutes(); min = formatHour(min);
        let sec = date.getSeconds(); sec=formatHour(sec);

        const year = date.getFullYear();
        const day = new Date();
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = weekday[day.getDay()];
        setTime(`${hours} : ${min} :${sec} , ${dayName} , ${year}`);
    }
    const timerId = setInterval(currentTime, 1000);
        
    return () => clearInterval(timerId);
},[])
    

    return(
        <div id='sidebarContainer'>
            <div className="logoContainer">
                <img src={mainLogo}></img>
            </div>
            <div className='clockContainer'> 
            <h1 className="text-4xl font-light"> {time} </h1>
            </div>
        </div>
       
    )

}