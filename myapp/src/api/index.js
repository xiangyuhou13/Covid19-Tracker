import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate };
    }catch(error){

    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return(modifiedData);
    }catch(error){

    }
}

export const countryData = async () => {
    try{
        const {data} = await axios.get(`${url}/countries/CA/confirmed`);

        const modifiedState = data.map((data) => ({
            state: data.provinceState,
            confirmed: data.confirmed,
            deaths: data.deaths,
            recovered: data.recovered
            }))
        return(modifiedState);
    }catch(error){

    }
}