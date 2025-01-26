import { Router, Request, Response } from 'express';
const router = Router();

import WeatherService from '../controllers/weatherService.js';

// TODO: GET Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
    console.log("llegué al post");
    console.log(req.body);
    const { cityName } = req.body;
    const datosClima = await WeatherService.getWeatherForCity(cityName);
    console.log(datosClima[0]);

    return res.status(200).json(datosClima);
});


export default router;