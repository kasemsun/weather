import { getHumidityValue, getPop, getVisibilityValue, getWindDirection } from "../helpers";
import { List} from "../types/weather";
import Card from "./Card";


type Props = {
    list: List[]
}

const Degree = ({ list }: Props): JSX.Element => {

    const weatherToday = list[0];
    const imageURL = "http://openweathermap.org/img/wn/" + weatherToday.weather[0].icon + "@2x.png";
    return (
        <>
            <div className="flex flex-col items-center">
                <img src={imageURL} />
                <span className="text-3xl font-extrabold">{Math.round(weatherToday.main.temp)}<sup>o</sup></span>
                <div >
                    <p className="text-thin font-bold">
                        {weatherToday.weather[0].description}
                    </p>
                    <p className="text-thin">
                        <span>High: {Math.round(weatherToday.main.temp_max)}<sup>o</sup></span>
                        <span> </span>
                        <span>Low: {Math.round(weatherToday.main.temp_min)}<sup>o</sup></span>
                    </p>
                </div>
            
                <section className="flex overflow-x-scroll scrollbar mt-4 pb-2 mb-5 " style={{ width: "50%" }}>
                    {list.map((item, index) => (
                        <div key={index} className="inline-block text-center w-[50px] flex-shrink-0 mx-2">
                            <p>{index === 0 ? 'Now' : new Date(item.dt_txt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
                            <p>
                                <span className=" font-bold">{Math.round(item.main.temp)}<sup>o</sup></span>
                            </p>
                        </div>
                    ))}
                </section>

                {/* wind */}
                <section className="grid xl:grid-cols-6 md:grid-cols-2 sm:grid-cols-2 gap-1 justify-between text-zinc-700 mx-5">
                    <Card icon="wind" title="wind" info={`${Math.round(weatherToday.wind.speed)} km/h`} description ={`${getWindDirection(Math.round(weatherToday.wind.deg))}, gusts ${weatherToday.wind.gust.toFixed(1)} km/h`}/>
                    <Card icon="feels" title="feels like" info={<span >{Math.round(weatherToday.main.feels_like)}<sup>o</sup></span>}
                        description={`Feels ${Math.round(weatherToday.main.feels_like) < Math.round(weatherToday.main.temp)
                                ? 'colder'
                                : 'warmer'
                            }`} />
                    <Card icon="pop" title="pop" info={`${Math.round(weatherToday.pop * 100)}%`}
                        description={`${getPop(weatherToday.pop)}, clouds at ${weatherToday.clouds.all}%`} />
                    <Card icon="pressure" title="pressure" info={`${weatherToday.main.pressure} hPa`}
                        description={` ${Math.round(weatherToday.main.pressure) < 1013 ? 'Lower' : 'Higher'
                            } than standard`} />
                    <Card icon="humidity" title="Humidity" info={`${weatherToday.main.humidity} %`}
                        description={getHumidityValue(weatherToday.main.humidity)} />
                    <Card icon="visibility" title="Visibility" info={`${(weatherToday.visibility / 1000).toFixed()} km`}
                        description={getVisibilityValue(weatherToday.visibility)} />
                    
                </section>
            </div>   

            
        </>
    );

}

export default Degree;