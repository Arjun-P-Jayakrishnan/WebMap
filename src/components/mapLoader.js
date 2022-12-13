import  {MapContainer,Marker,Popup,TileLayer,Icon} from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import {useState,useEffect} from "react"

import icon_png from "../styling/images/location_mark.png"
import L from "leaflet"
import "../styling/style.css"















const MapLoader=props =>{

  //set the icon of marker
  const markerIcon=L.icon({
    iconUrl:icon_png,
    iconSize:[40,40],
    iconAnchor:[12,12],
    popupAnchor:[0,0],
  })
  
  //use two variables to know current and previous value
  const [position,setPosition]=useState([51.505,-0.09])
  const loc=[props.loctn[0],props.loctn[1]]
  
  //rerender once location recieved is not same as position 
  useEffect(()=>{
    setPosition(loc)
  },[JSON.stringify(loc)!=JSON.stringify(position)])

  //using a ternary operator to check if data is recived or provide temporary data
  const weatherObj=JSON.stringify(props.weather)!=='[]'?{icon:props.weather.weather[0].icon, main:props.weather.weather[0].main,description:props.weather.weather[0].description}:{icon:'10d',main:"Drizzle",description:"light intensity drizzle"};

  //using ternary operator to change map locations
  return JSON.stringify(loc)==JSON.stringify(position)?
     (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:"100vw",height:"100vh",zIndex:"1"}} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={markerIcon}>
        <Popup className="popupWeather">
          <div className="weather">
          <img src={`http://openweathermap.org/img/wn/${weatherObj.icon}@2x.png`}/>
          <h6>Main        :  {weatherObj.main}</h6>
          <h6>Description :   {weatherObj.description}</h6>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  ):(
      <div>
      
      </div>
  );
        
}

export default MapLoader;