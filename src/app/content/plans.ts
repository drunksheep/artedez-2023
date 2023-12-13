import { PlanCardProps } from "../components/Plans/PlanCard";

export const cardsContent: Array<PlanCardProps> = [
        {
            title: 'Básico',
            subtitle: 'Até 4 cotas por semana',
            description: '3 dias de criação para cada cota (esse plano não inclui cotas para identidades visuais ou layouts para sites e landing pages)',
            limit: '15 cotas',
            value: 'R$ 890,00',
            ctaString: 'https://wa.me/5511964637406?text=Ol%C3%A1%2C+gostaria+de+contratar+o+plano+b%C3%A1sico+da+Arte+Dez+',
            doubleLimit: false,
        },
        {
            title: 'intermediário',
            subtitle: 'Até 8 cotas por semana',
            description: '2 dias de criação para cada cota',
            limit: '30 cotas',
            extraProd: '15 dias para criação',
            value: 'R$ 1590,00',
            ctaString: 'https://wa.me/5511964637406?text=Ol%C3%A1%2C+gostaria+de+contratar+o+plano+intermedi%C3%A1rio+da+Arte+Dez+',
            doubleLimit: false,
            limit2: '8 cotas',
            usesLimit2: true,
        },
        {
            title: 'full',
            subtitle: 'Até 4 cotas a cada 2 dias',
            description: '2 dias de criação para cada cota',
            limit: 'sem limite',
            extraProd: '10 dias para criação – até 2 cotas simultâneas',
            value: 'R$ 3590,00',
            ctaString: 'https://wa.me/5511964637406?text=Ol%C3%A1%2C+gostaria+de+contratar+o+plano+intermedi%C3%A1rio+da+Arte+Dez+',
            doubleLimit: true,
        },
    ];