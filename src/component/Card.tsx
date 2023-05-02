import Feels from "./Icons/Feels";
import Humidity from "./Icons/Humidity";
import Pop from "./Icons/Pop";
import Pressure from "./Icons/Pressure";
import Visibility from "./Icons/Visibility";
import Wind from "./Icons/Wind";

type Props = {
    icon: "wind" | "humidity" | "feels" | "visibility" | "pressure" | "pop" ,
    title:string,
    info:string|JSX.Element,
    description:string
}

const icons ={
    wind:Wind,
    feels:Feels,
    humidity:Humidity,
    visibility:Visibility,
    pressure:Pressure,
    pop:Pop
}



const Card = ({
    icon,
    title,
    info,
    description
}:Props): JSX.Element => {
    const Icon = icons[icon]
    return (
        <>
            <section className="flex justify-between text-zinc-700">
                <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5 mx-5">
                    <Icon/>
                    <h4 className="ml-1">{title}</h4>
                    <h3 className="mt-2 text-lg">{info}</h3>
                    <p className="text-xs font-bold">{description}</p>
                </div>
            </section>
        </>
    );

}

export default Card;