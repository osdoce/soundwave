import weatherAPI from '../api/weatherAPI';
import { retrieveTickets } from '../api/ticketAPI'
import Busqueda from './Busqueda';
import { useEffect, useState } from 'react';

const Weather = () => {

    const [cuidadBuscada, setCiudadBuscada] = useState("");
    const [weather, setWeather] = useState(null);
    const [tickets, setTickets] = useState(null);

    const buscarCiudad = () => {
        const fetchData =  async () => {
            console.log("Entre a buscarCiudad");
            const weatherResponseJSON = await weatherAPI(cuidadBuscada);
            setWeather(weatherResponseJSON);
            console.log(weatherResponseJSON);
        };
        fetchData();
    }
    useEffect(()=>{
        const obtenerTickets = async () => {
            console.log("Entre a buscarTickets");
            const ticketResponseJSON = await retrieveTickets();
            console.log(ticketResponseJSON)
            setTickets(ticketResponseJSON);
        }
        obtenerTickets()
    },[]) 

    if (weather && tickets) {
        return (
            <>
            {tickets[0].name}
                <div className="text-center">
                <Busqueda cuidadBusc={cuidadBuscada} onChange={setCiudadBuscada} />
                <br />
                    Clima de {weather[0].city} es de  {weather[0].tempF} --
                    {weather[0].iconDescription}<img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}></img>
                    
                
                <br />
                <br />

                    Clima de {weather[0].city} mañana será de  {weather[1].tempF}
                    --
                    {weather[1].iconDescription}<img src={`https://openweathermap.org/img/w/${weather[1].icon}.png`}></img>
                </div>
                    <br />
                    <br />
                <div className="d-flex justify-content-center" style={{columnGap:"30px"}}>
                    <button type="button" className="btn btn-primary" onClick={buscarCiudad}>Buscar</button>
                    <section></section> 
                    <button type="button" className="btn btn-primary" onClick={buscarCiudad}>Agregar a mis ciudades</button>    
                </div>
            </>
        )        
    } else {
        return (
            <>
                <div className="text-center">
                    <Busqueda cuidadBusc={cuidadBuscada} onChange={setCiudadBuscada} />
                    <br />
                    <br />
                    <button type="button" className="btn btn-primary" onClick={buscarCiudad}>Buscar</button>
                </div>
            </>
        )  
    }

};

export default Weather;