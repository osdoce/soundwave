import { Router } from 'express';
const router = Router();
//import HistoryService from '../../service/historyService.js';
import WeatherService from '../controllers/weatherService.js';
// TODO: GET Request with city name to retrieve weather data
router.get('/', async (req, res) => {
    console.log("llegué al post");
    console.log(req.body);
    const { cityName } = req.body;
    const datosClima = await WeatherService.getWeatherForCity(cityName);
    console.log(datosClima[0]);
    /**
     datosClima[1] = WeatherService.getWeatherForCity(cityName);
    datosClima[2] = WeatherService.getWeatherForCity(cityName);
    datosClima[3] = WeatherService.getWeatherForCity(cityName);
    */
    // TODO: GET weather data from city name
    //
    //
    // TODO: save city to search history
    //HistoryService.addCity(cityName);
    return res.status(200).json(datosClima);
});
// TODO: GET search history
//router.get('/history', async (_req: Request, res: Response): Promise<Response> => {
//    const ciudades = await HistoryService.getCities();
//    return res.json(ciudades);
//});
// * BONUS TODO: DELETE city from search history
//router.delete('/history/:id', async (req, res) => {});
export default router;
