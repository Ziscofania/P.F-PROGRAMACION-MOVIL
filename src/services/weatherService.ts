import axios from "axios";

const API_KEY = "configure_your_api_key_here";
//configurar la api iniciando sesion en openweathermap.org y obteniendo tu API key
export const getWeather = async () => {

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=${API_KEY}&units=metric`
  );

  return response.data;

};