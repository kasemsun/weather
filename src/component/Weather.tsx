import { WeatherType} from "../types";
import Degree from "./Degree";

type Props ={
    data: WeatherType
}

const Weather = ({ data }: Props):JSX.Element =>{

    return(
        <>
            <div className="text-center max-w-full">
            <Degree list={data.list}/>
        </div>
        </>
    );

}

export default Weather;