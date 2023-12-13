interface TitleHeadlineProps {
    title: string;
    subtitle: string;
    htag?: boolean;
}

export default function TitleHeadline({ title, subtitle, htag = false }: TitleHeadlineProps) {
    const Tag = htag ? 'h1' : 'h2';

    return (
        <Tag className="text-20 leading-[18px] text-white font-bold font-nexa lg:text-40 uppercase mb-5 lg:mb-[40px] lg:leading-[40px]">
            {title}
            <span className="text-32 leading-[32px] lg:text-56 block lg:leading-[52px]">
                {subtitle}
            </span>
        </Tag>
    );
}
