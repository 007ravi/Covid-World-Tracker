import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart=({data,country})=>{
    const [dailyData,setDailyData]=useState([]);
    /*the above representation is similar like
    state={
        dailyData;{}
    } 
    we dont have to worry with this .setstate
    */
   useEffect(()=>{

const fetchAPI=async()=>{

    setDailyData(await fetchDailyData());  
     }
//console.log(dailyData); 
//the [ ] in 22 line is to make use effect work as component didi mount or it will just run adn run
fetchAPI();
   },[]);
   console.log(dailyData);
   const lineChart=(
       dailyData.length 
       ?(<Line
       data={{
           labels:dailyData.map(({date})=>date),
           datasets:[{
             data:dailyData.map(({confirmed})=>confirmed),
             label:'Infected',
             borderColor:'#3333ff',
             fill:true,
           },{
            data:dailyData.map(({deaths})=>deaths),
            label:'Deaths',
            borderColor:'red',
            borderColor:'rgba(255,0,0,0.5',
            fill:true,
           }],
       }}
       />):null
   );
   const barChart=(
       //in this data={{}} the first one is making the code dynamic and the second one is to open the object
       data.confirmed
       ?
       (
       <Bar data={{
             labels:['Infected','Recovered','Deaths'],
             datasets:[{
                 label:'People',
                 backgroundColor:['rgba(0, 0, 255, 0.5)',
                 'rgba(0, 255,0, 0.5)',
                  'rgba(255, 0,0, 0.5)'],
                  data:[data.confirmed.value,data.recovered.value,data.deaths.value]
             }]
       }}
       option={{
           legend:{display:false},
           title:{display:true,text:`current state in ${country}`}
       }}
       />):null
   )
    return(
      <div className={styles.container}>
          {country?barChart:lineChart}
          </div>
    )
}
export default Chart;