import { PlanCardProps } from "../components/Plans/PlanCard";

export const cardsContent: Array<PlanCardProps> = [
        {
            title: 'Kit <br /> Branding',
            subtitle: 'Até 4 cotas por semana',
            description: 'Gere mais autoridade, reconhecimento e autenticidade, através de uma identidade visual única <br /> <br /> Símbolos, cores e tipografias que representam os seus diferenciais e valores <br /> <br /> Esse é o passo inicial para escalar com qualquer tipo de negócio',
            limit: '15 cotas',
            value: 'R$ 890,00',
            ctaString: 'https://api.whatsapp.com/send?phone=5511964637406&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20kit%20branding.',
            doubleLimit: false,
        },
        {
            title: 'Kit <br /> Webdesign',
            subtitle: 'Até 8 cotas por semana',
            description: 'Tenha uma landing page, de alta performance e sem surpresas desagradáveis <br/><br/> Um layout moderno não só é atraente aos olhos, mas gera confiança, profissionalismo e conversão <br/> <br />Todos os clientes que nos contrataram viram pela primeira vez que é possível ter 100% de performance com um site ou página bem desenvolvido e com a cara da sua marca',
            limit: '30 cotas',
            extraProd: '15 dias para criação',
            value: 'R$ 1590,00',
            ctaString: 'https://api.whatsapp.com/send?phone=5511964637406&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20kit%20webdesign.',
            doubleLimit: false,
            limit2: '8 cotas',
            usesLimit2: true,
        },
        {
            title: 'Kit <br/> Social Media',
            subtitle: 'Até 4 cotas a cada 2 dias',
            description: 'Nós arrumamos a vitrine do seu negócio e trazemos (de verdade) potenciais clientes para você <br /> <br /> O Social Media kit é a junção de estratégia de conteúdo, design premium e gerenciamento completo das redes sociais',
            limit: 'sem limite',
            extraProd: '10 dias para criação – até 2 cotas simultâneas',
            value: 'R$ 3590,00',
            ctaString: 'https://api.whatsapp.com/send?phone=5555119646374&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20kit%20social%20media.',
            doubleLimit: true,
        },
    ];