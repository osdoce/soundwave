import weatherAPI from '../api/weatherAPI';
import { useState, useEffect } from 'react';


const Weather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const weatherResponseJSON = await weatherAPI("Guadalajara");
            setWeather(weatherResponseJSON);
            console.log(weatherResponseJSON);
        }
        fetchData();
    }, []);
    
    if (weather) {
        return (
            <>
                Clima de {weather[0].city} es de  {weather[0].tempF}
                <br/>
                Clima de {weather[0].city} mañana es de  {weather[1].tempF}
            </>
        )        
    }

};

export default Weather;