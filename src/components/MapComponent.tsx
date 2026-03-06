import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
lat:4.6097,
lng:-74.0817
};

const MapComponent = ()=>{

return(

<LoadScript googleMapsApiKey="TU_API_KEY">

<GoogleMap
mapContainerStyle={{width:"100%",height:"400px"}}
center={center}
zoom={12}
>

<Marker position={center}/>

</GoogleMap>

</LoadScript>

);

};

export default MapComponent;