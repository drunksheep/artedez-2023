export interface PlanCardProps {
    title: string; 
    subtitle: string; 
    description: string;
    limit: string;
    extraProd?: string;
    value: string;
    ctaString: string;
}

export default function PlanCard(props: PlanCardProps) {
    return(
        <div className="border-4 border-white rounded-3xl bg-transparent p-4 transition-all duration-300 ease-in-out hover:bg-white group">
            {
                props.title && 
                <h3 className="text-white group group-hover:text-black font-nexa font-bold">
                    {props.title}
                </h3>
            }
            {
                props.subtitle &&
                <h4 className="font-bold text-24 text-white group group-hover:text-black">
                    {props.subtitle}
                </h4>
            }
            {
                props.description &&
                <p className="text-white text-18 group group-hover:text-black">
                    {props.description}
                </p>
            }
            {
                props.limit &&
                <p className="text-18 text-white group group-hover:text-black">
                    <b>Limite mensal</b> {props.limit} cotas
                </p>
            }
            {
                props.extraProd &&
                <p className="text-18 text-white group group-hover:text-black">
                    <b>Identidades visuais e Layouts para Sites ou Landing Pages:</b> <br />
                    {props.extraProd}
                </p>
            }
            {
                props.value &&
                <p className="text-18 text-white group group-hover:text-black">
                    <b>Valor Mensal:</b>
                    <span className="text-50">
                        {props.value}
                    </span>
                </p>
            }
        </div>
    )
}