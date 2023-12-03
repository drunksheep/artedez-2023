import PlanCard, { PlanCardProps } from "./PlanCard";

export default function Plans() {

    const cardsContent: Array<PlanCardProps> = [
        {
            title: 'Básico',
            subtitle: 'Até 4 cotas por semana',
            description: '3 dias de criação para cada cota (esse plano não inclui cotas para identidades visuais ou layouts para sites e landing pages)',
            limit: '15 cotas',
            value: 'R$ 890,00',
            ctaString: 'a',
            doubleLimit: false,
        },
        {
            title: 'intermediário',
            subtitle: 'Até 8 cotas por semana',
            description: '2 dias de criação para cada cota',
            limit: '30 cotas',
            extraProd: '15 dias para criação',
            value: 'R$ 1590,00',
            ctaString: 'b',
            doubleLimit: true
        },
        {
            title: 'full',
            subtitle: 'Até 4 cotas a cada 2 dias',
            description: '2 dias de criação para cada cota',
            limit: 'sem limite',
            extraProd: '10 dias para criação – até 2 cotas simultâneas',
            value: 'R$ 3590,00',
            ctaString: 'c',
            doubleLimit: true,
        },
    ];

    return (
        <section className="bg-black py-[130px]" id="plans">
            <div className="container">
                <h2 className="text-white font-bold font-nexa text-40 uppercase mb-[40px] leading-[40px]">
                    conheça
                    <span className="text-56 block leading-[52px]">
                        nossos planos
                    </span>
                </h2>
                <p className="text-white text-18 mb-10">
                    <b>Simples e transparente:</b> nosso sistema de <b>Cotas Criativas</b> coloca o controle nas suas mãos Cada cota criativa equivale a uma arte, exceto para identidades visuais e layouts de sites, que consomem 4 cotas
                </p>

                <div className="grid grid-cols-3 gap-x-[40px] mb-20">
                    {
                        cardsContent.map((item: PlanCardProps, idx: number) =>
                            <PlanCard
                                title={item.title}
                                subtitle={item.subtitle}
                                description={item.description}
                                limit={item.limit}
                                extraProd={item.extraProd || ''}
                                value={item.value}
                                ctaString={item.ctaString}
                                doubleLimit={item.doubleLimit}
                                key={idx} />
                        )
                    }
                </div>

                <p className="text-18 text-white leading-[24px]">
                    <b>Cotas adicionais*:</b> Nos planos mensais, cada cota adicional solicitada terá o valor de R$ 89,00. Já nos planos semestrais, o valor da cota adicional será de R$ 69,90. <span className="text-gray-400">*o plano arte dez possui cotas ilimitadas.</span>
                </p>

            </div>
        </section>
    )
}