import { ServiceItem } from "..";
export interface SellingCardProps extends ServiceItem {
    image?: string;
    description: string;
}

export default function SellingCard(props: SellingCardProps) {

    return (
        <div className="relative">

            {
                props.image &&
                <div className="square w-[175px] h-[175px] bg-purple-400 rounded-xl relative mb-10">
                    <img className="absolute top-[50%] translate-y-[-50%] left-0 right-0 m-auto" src={props.image} alt={props.title} width={234} height={189}  />
                </div>
            }

            <h3 className="text-white text-30 font-bold mb-6 uppercase leading-[32px]">
                {props.title} <br />
                <span className="text-44">
                    {props.subtitle}
                </span>
            </h3>
            <p className="text-18 text-white">
                {props.description}
            </p>
        </div>

    )
}