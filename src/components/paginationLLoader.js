import {useState,useCallback} from "react"
import { AsyncPaginate} from "react-select-async-paginate"
import { geoApiOptions,GEO_URL } from "../services/loactionLoader";
import axios from "axios"
import "../styling/style.css"












const SearchPagination = ({onSearchChange})=> {

    const [searchValue,setSearchValue]=useState(null);

    //function to handle changes once data is entered
    const handleOnChange=(searchData)=>{
        setSearchValue(searchData);
        onSearchChange(searchData);
    }


    //function to load options
    async function loadValue(inputValue){

        //responseJSON holds values of latitude and logitude of cities and shows the city name and country code to select
        let responseJSON={options:[]}   

        await axios.request(`${GEO_URL}?namePrefix=${inputValue}`,geoApiOptions)

        .then(function (response)  {

                responseJSON= {
                    options:response.data.data.map((city)=>{

                    return{
                        value:`${city.latitude} ${city.longitude}`,
                        label:`${city.name} ${city.countryCode}`,
                    }

                }),
                }
                                
            }
        )

        .catch(function (error) {
            console.error(error);
        })

        return responseJSON
    }



    return(


        <AsyncPaginate
            placeholder="Search city name"
            value={searchValue}
            debounceTimeout={500}
            onChange={handleOnChange}
            loadOptions={loadValue}
            styles={{zIndex:10}}
        />


    );

}

export default SearchPagination;