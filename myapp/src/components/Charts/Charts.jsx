import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';

const Charts = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    });

    const lineChart = (
        dailyData.length ? (
        <Line 
            data={{
                labels: dailyData.map(({date}) => date),
                datasets:[{
                    data: dailyData.map(({confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: 'blue',
                    fill: true,
                    },{
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    fill: true,  
                    }],
                }}
            options={{
                title:{
                    display: true,
                    text: 'Covid-19 Cases Around the World',
                    fontSize: 20
                },
                legend:{
                    position: 'right'
                }
            }}
        />) : null

    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts;