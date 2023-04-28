import { useEffect, useState } from "react";
import { WeatherType, optionType } from "../types";
import axios from "axios";

const useWeather = () =>{
  const [term, setTerm] = useState<string>("");
  const [searchOption, setSearchOption] = useState<[]>([]);
  const [selectedOption, setSelectedOption] = useState<optionType>();
    const [weather, setWeather] = useState<WeatherType |null>();

  useEffect(()=>{
    if(selectedOption){
      setTerm(selectedOption.name);
      setSearchOption([]);
    }
  },[selectedOption])

  const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cityName = e.target.value.trim();
    setTerm(cityName);

    if(!cityName)return;
    const searchOptionResponse = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=3&appid=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    setSearchOption(searchOptionResponse.data);
  };
  const onSearch = async () => {
    if(selectedOption === null|| selectedOption === undefined)return;
    
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${selectedOption.lat}&lon=${selectedOption.lon}&units=metric&appid=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );

      const weatherData = {
          ...weather.data.city,
          list: weather.data.list.slice(0,16),
        }

      setWeather(weatherData);
      console.log("Weather data",weatherData);
  };

  const onOptionSelect = (option: optionType) => {
    setSelectedOption(option);
  };

  const onCurrentLocation = async () =>{
    navigator.geolocation.getCurrentPosition(async function(position) {
      const lat:number = position.coords.latitude;
      const lon:number =position.coords.longitude;

      const location = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_REACT_APP_API_KEY}`
      );

      const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
      );

      console.log(weather);
      console.log(location);

      setWeather(weather.data);
      setSelectedOption(location.data[0]);

    });
  }
  return{
    term,searchOption,weather,onInputChange,onSearch,onOptionSelect,onCurrentLocation
  }
}

export default useWeather;