import React,{useState, useEffect} from 'react'
import 'tailwindcss/tailwind.css';
// import 'animate.css';

import './Sidebar.css'
import mainLogo from '../../assets/main logos/mainlogo1nobg.png' 
export default function Sidebar(){
    const [time, setTime] = useState('');
    const [today, setToday] = useState('');
    const [fullDate,setfullDate] = useState('');

useEffect(()=>{

    function formatHour(k){
        return k<10? '0'+k:k
    }
    function currentTime(){
        let date = new Date();
        let hours = date.getHours(); hours=formatHour(hours);
        let min = date.getMinutes(); min = formatHour(min);
        let sec = date.getSeconds(); sec=formatHour(sec);

        
        let day = new Date();
        let weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        let dayName = weekday[day.getDay()];
        let dayNumber = day.getDay(); dayNumber<10?dayNumber='0'+dayNumber: dayNumber.toString();
        let monthNumber = day.getMonth(); monthNumber<10?monthNumber='0'+monthNumber: monthNumber.toString();
        let year = date.getFullYear();
        
        setTime(`${hours} : ${min} :${sec} Hrs.`);
        setToday(`${dayName}`)
        setfullDate(`${dayNumber}/ ${monthNumber}/ ${year}`)
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
            <h1 className="text-2xl font-light"> {time} </h1>
            <h2 className="text-2xl font-light"> {today} </h2>
            <h2 className="text-2xl font-light"> {fullDate} </h2>
            </div>
        </div>
       
    )

}