
type Props = {
    icon: "wind" | "humidity" | "feels" | "visibility" | "pressure" | "pop" ,
    title:string,
    info:string|JSX.Element,
    description:string
}

const Card = ({
    icon,
    // title,
    // info,
    // description
}:Props): JSX.Element => {

    return (
        <>
            <section className="flex justify-between text-zinc-700">
                <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5 mx-5">
                    {icon}
                </div>
            </section>
        </>
    );

}

export default Card;