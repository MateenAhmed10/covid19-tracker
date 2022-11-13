import axios from 'axios'


let url = 'https://disease.sh/v3/covid-19/all';

export const fetchData = async (country) => {
    
    if (country) {
        url = `https://disease.sh/v3/covid-19/countries/${country}`
    }

    try {
        const {
            data: {
                cases,
                deaths,
                recovered
            }
        } = await axios.get(url);
        return {
            cases,
            recovered,
            deaths,
        };
    } catch (error) {
        console.log(error);
    };
}


export const fetchCountries = async () => {
    try {
        const {data} = await axios.get("https://disease.sh/v3/covid-19/countries/");
        const countryInfo = data.map((data) =>( {
            name: data.country,
            iso: data.countryInfo.iso3
        }));
        return countryInfo;
    } catch (error) {
        console.log(error);
    }
}


export const fetchDailyData = async () => {
    try {
        const {
            data
        } = await axios.get(`https://covid19.mathdro.id/api/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}