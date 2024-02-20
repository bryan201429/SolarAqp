import './Home.css'
import clouds from '../assets/clouds 3.png'
import sun from '../assets/sun reduced.png'
import Sidebar from '../components/Sidebar.jsx'
import Gauge from '../components/gauge/Gauge'


export default function Home(){

    return(
        <div id='HomeContainer'>
            <Sidebar></Sidebar>
            <img src={clouds} id='backClouds'></img>
            <img src={sun} id='backSun'></img>
            <div id='Container1'>

            </div>
            <div id='Container2'>
                <div id='ClusterGraph'> <Gauge></Gauge></div>
                <div id='Recommendations'></div>
            </div>
            <div id='Container3'>
                <div id='Chart'></div>
                <div id='ChartInfo'></div>
            </div>

        </div>
    )
}