import { WeatherType } from "../types";
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
                <section className="flex justify-between text-zinc-700">
                   

                </section>
            </div>   

            
        </>
    );

}

export default Degree;