import {
IonPage,
IonContent,
IonTitle
} from "@ionic/react";

import { useEffect,useState } from "react";
import { getWeather } from "../services/weatherService";

const Home:React.FC = () => {

const [weather,setWeather] = useState<any>();

useEffect(()=>{

loadWeather();

},[]);

const loadWeather = async ()=>{

const data = await getWeather();

setWeather(data);

};

return(

<IonPage>

<IonContent>

<IonTitle>Make Pizza</IonTitle>

{weather && (

<p>
Clima en Bogota:
{weather.main.temp}°C
</p>

)}

</IonContent>

</IonPage>

);

};

export default Home;