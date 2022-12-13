import Search from "./components/paginationLLoader.js"
import Weather from "./components/weatherLoader.js"
import MapLoader from "./components/mapLoader.js"


import "./styling/style.css"
import {useState,useEffect} from "react"












function App() {


  const [loc,setLocation]=useState([51.505,-0.09])
  const [weather,setWeather]=useState([])

 

  //a function which gives back values from paginator and also fetches weather data from openweathermap
  const handleOnSearchChange=(searchData)=>{
    
    //get weather data from the location
     Weather.getWeather(`${searchData.value}`)
      .then((response)=>{

      //once data is recieved update location and weather
      setLocation(response.loc)
      setWeather(response.dataWeather)
    })
    .catch(e=>{
      console.log(`${e}`)
    })

  }


  return (
    <div className="App" style={{position:"absolute"}}>
      
      <div className="Search">
      <Search onSearchChange={handleOnSearchChange}/>
      </div>
      <div className="MapLoader">
      <MapLoader  loctn={loc} weather={weather}/>
      </div>

    </div>
  );
}

export default App;
