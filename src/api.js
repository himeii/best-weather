import {create} from 'apisauce'

export const weatherAPI = create({baseURL: "https://api.openweathermap.org/data/2.5/"});

const API_KEY = "99a89f5791b73d669976ec8827dac418";
const WORLDWIDE_BBOX = "0,0,-180,180";

export const getBBoxWeather = (bbox) => {
    return weatherAPI.get(`box/city?bbox=${bbox},10&APPID=${API_KEY}`)
};

export const getWeatherWorldwide = () => {
    return getBBoxWeather(WORLDWIDE_BBOX);
};