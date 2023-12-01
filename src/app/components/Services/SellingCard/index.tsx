import { ServiceItem } from "..";

export interface SellingCardProps extends ServiceItem {
    image?: string;
    description: string;
}

export default function SellingCard(props: SellingCardProps) {
    return (
        <div className="">
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