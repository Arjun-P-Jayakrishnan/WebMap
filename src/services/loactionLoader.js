const axios = require("axios");




//requires an account to get api_key in geodb
const api_key="add your api key"

export const geoApiOptions = {
  method: 'GET',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': api_key,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};




export const GEO_URL='https://wft-geo-db.p.rapidapi.com/v1/geo/cities'

