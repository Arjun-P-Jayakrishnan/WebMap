import axios from "axios"

//create a temporary axios instance
const instance=axios.create();











export default new class WeatherLoader{

    async getWeather(inputLocation){

        //location is recieved as "latitude and longitude"  split into latitude and longitude
        const loc=inputLocation.split(" ")

        //api_key is recived from openweathermap by signing in
        const api_key='add your api key'

        //fetch data from openweathermap and then return the recieved weather as dataWeather and also location
        const dataWeather=await instance.get(`https://api.openweathermap.org/data/2.5/weather?lat=${loc[0]}&lon=${loc[1]}&appid=${api_key}`)

        .then(resposnse=>{
          return resposnse.data
        })
        .catch(e=>{
            console.log(`${e}`)
        })

        return {dataWeather:dataWeather,loc:loc}
    }


}