import { ImageBasic } from "../types/image";
import { ServiceItem } from "../types/serviceItem";

export const portfolioURL = '/images/portfolio';
export const sitesURL = '/images/sites'
export const logosURL = '/images/logos'
export const socialURL = '/images/social';
export const marketingURL = '/images/marketing'

export const mainServices: Array<ServiceItem> = [
    {
        title: 'LAYOUTS PARA',
        subtitle: 'SITES E LPS',
        bg: '/images/layouts.png',
        category: 'webDesign',
    },
    {
        title: 'IDENTIDADES',
        subtitle: 'VISUAIS',
        bg: '/images/identidades-visuais.png',
        category: 'branding',
    },
    {
        title: 'REDES',
        subtitle: 'SOCIAIS',
        bg: '/images/redes-sociais.png',
        category: 'social',
    },
    {
        title: 'MATERIAIS PARA',
        subtitle: 'IMPRESSÃO',
        bg: '/images/materiais-impressao.png',
        category: 'print'
    },
    {
        title: 'CAMPANHAS',
        subtitle: 'PUBLICITÁRIAS',
        bg: '/images/campanhas.png',
        category: 'campaigns',
        mobileBg: '/images/campanhas-mob.png',
    },
    {
        title: 'MÍDIA',
        subtitle: 'PAGA',
        bg: '/images/midia-paga.png',
        category: 'paid',
        mobileBg: '/images/midia-mob.png',
    }
];


export const webDesign: Array<ImageBasic> = [
    {
        src: `${portfolioURL}/webdesign//3xceler.jpg`,
        alt: '3xceler'
    },
    {
        src: `${portfolioURL}/webdesign/caioaraujo.jpg`,
        alt: 'Dr. Caio Araujo'
    },
    {
        src: `${portfolioURL}/webdesign/carneiro-cagnacci.jpg`,
        alt: 'Drs. Carneiro e Cagnacci'
    },
    {
        src: `${portfolioURL}/webdesign/coredrinks.jpg`,
        alt: 'Hotsite Coredrinks'
    },
    {
        src: `${portfolioURL}/webdesign/inovti.jpg`,
        alt: 'InovTI'
    },
    {
        src: `${portfolioURL}/webdesign/mmoschini.jpg`,
        alt: 'MMoschini'
    },
    {
        src: `${portfolioURL}/webdesign/rollmusic.jpg`,
        alt: 'RollMusic'
    },
    {
        src: `${portfolioURL}/webdesign/wendell.jpg`,
        alt: 'Wendell Uguetto'
    },
];

export const social: Array<ImageBasic> = [
    {
        src: `${portfolioURL}/social/biometria-facial.png`,
        alt: 'Biometria Facial'
    },
    {
        src: `${portfolioURL}/social/botox-beneficios.jpg`,
        alt: 'Benefícios do Botox'
    },
    {
        src: `${portfolioURL}/social/cards-blog.png`,
        alt: 'Cards do Blog'
    },
    {
        src: `${portfolioURL}/social/cards-podcast.png`,
        alt: 'Cards podcast warren'
    },
    {
        src: `${portfolioURL}/social/ia.png`,
        alt: 'Inteligencia artificial'
    },
    {
        src: `${portfolioURL}/social/lipo-a-laser-2.png`,
        alt: 'Lipo a Laser'
    },
    {
        src: `${portfolioURL}/social/roupa-pilates.png`,
        alt: 'Roupa ideal para o Pilates'
    },
    {
        src: `${portfolioURL}/social/tratamento-olheiras.jpg`,
        alt: 'Tratamento para olheiras'
    },
]

export const visualIdentities: Array<ImageBasic> = [
    {
        src: `${portfolioURL}/identities/joaquinaprimekids.jpg`,
        alt: 'Joaquina Prime Kids'
    },
    {
        src: `${portfolioURL}/identities/laplaza.png`,
        alt: 'La Plaza Bar'
    },
    {
        src: `${portfolioURL}/identities/brlink.jpg`,
        alt: 'BRLink'
    },
    {
        src: `${portfolioURL}/identities/luamorales.jpg`,
        alt: 'Lua Morales'
    },
    {
        src: `${portfolioURL}/identities/brlink2.jpg`,
        alt: 'Outdoor BRLink'
    },
    {
        src: `${portfolioURL}/identities/ps.jpg`,
        alt: 'Paulo Scheuer treinador'
    },
    {
        src: `${portfolioURL}/identities/stapp1.jpg`,
        alt: 'Stapp - título'
    },
    {
        src: `${portfolioURL}/identities/stapp2.jpg`,
        alt: 'Stapp - mockup app/site'
    },
];

export const print: Array<ImageBasic> = [
    {
        src: `${portfolioURL}/print/poupanca-warren.jpg`,
        alt: 'Poupança Warren'
    },
    {
        src: `${portfolioURL}/print/anuncio-futura.jpg`,
        alt: 'Anúncio Futura'
    },
    {
        src: `${portfolioURL}/print/mercado-warren.jpg`,
        alt: 'Warren'
    },
    {
        src: `${portfolioURL}/print/apolice-porto.jpg`,
        alt: 'Apólice Porto Seguro'
    },
    {
        src: `${portfolioURL}/print/amostra-futura.jpg`,
        alt: 'Amostra Futura'
    },
    {
        src: `${portfolioURL}/print/warrenlife.png`,
        alt: 'Warren'
    },
    {
        src: `${portfolioURL}/print/caixa-futura.jpg`,
        alt: 'Caixa - Futura'
    },
    {
        src: `${portfolioURL}/print/notepad.png`,
        alt: 'Blocoi de notas'
    },
];

export const paid: Array<ImageBasic> = [
    {
        src: `${portfolioURL}/paid/descomplicou.jpg`,
        alt: 'Warren - Descomplicou'
    },
    {
        src: `${portfolioURL}/paid/igualdade.jpg`,
        alt: 'Warren - Igualdade'
    },
    {
        src: `${portfolioURL}/paid/objetivos.jpg`,
        alt: 'Warren - Objetivos'
    },
    {
        src: `${portfolioURL}/paid/warren30.jpg`,
        alt: 'Warren 3.0'
    },
    {
        src: `${portfolioURL}/paid/formas.jpg`,
        alt: 'Warren - formas de investir'
    },
    {
        src: `${portfolioURL}/paid/poupanca.jpg`,
        alt: 'Warren - saia da poupança'
    },
    {
        src: `${portfolioURL}/paid/warrenpoa2020.jpg`,
        alt: 'Warren & Festival POA 2020'
    },
    {
        src: `${portfolioURL}/paid/melhoridade.png`,
        alt: 'Warren - Melhor Idade'
    },
];

export const campaigns: Array<ImageBasic> = [
    {
        src: `${portfolioURL}/campaigns/portobank.jpg`,
        alt: 'Portobank'
    },
    {
        src: `${portfolioURL}/campaigns/consorcio.jpg`,
        alt: 'Portobank'
    },
    {
        src: `${portfolioURL}/campaigns/dia-namorados.png`,
        alt: 'Dia dos namorados Warren'
    },
    {
        src: `${portfolioURL}/campaigns/porto-thetown.png`,
        alt: 'Porto The Town'
    },
    {
        src: `${portfolioURL}/campaigns/cc-portobank.jpg`,
        alt: 'CC Portobank'
    },
    {
        src: `${portfolioURL}/campaigns/warren-transparencia.png`,
        alt: 'Warren - transparência'
    },
    {
        src: `${portfolioURL}/campaigns/feirao-portobank.jpg`,
        alt: 'Feirão Portobank'
    },
    {
        src: `${portfolioURL}/campaigns/bonus-portobank.jpg`,
        alt: 'Bônus Portobank'
    },
]

export const newWebContent : Array<ImageBasic> = [
    {
        src: `${sitesURL}/01.jpg`,
        alt: `Kiwi Pilates`
    },
    {
        src: `${sitesURL}/02.jpg`,
        alt: `Roll Music`
    },
    {
        src: `${sitesURL}/03.jpg`,
        alt: `Wendell Uguetto`
    },
    {
        src: `${sitesURL}/04.jpg`,
        alt: `Carneiro e Cagnacci`
    },
    {
        src: `${sitesURL}/05.jpg`,
        alt: `Coredrinks`
    },
    {
        src: `${sitesURL}/06.jpg`,
        alt: `Amar e Cuidar`
    },
    {
        src: `${sitesURL}/07.jpg`,
        alt: `Nutra Corpore`
    },
    {
        src: `${sitesURL}/08.jpg`,
        alt: `KES`
    },
];

export const newLogoContent : Array<ImageBasic> = [
    {
        src: `${logosURL}/01.jpg`,
        alt: `Kiwi Pilates`
    },
    {
        src: `${logosURL}/02.jpg`,
        alt: `Roll Music`
    },
    {
        src: `${logosURL}/03.jpg`,
        alt: `Wendell Uguetto`
    },
    {
        src: `${logosURL}/04.jpg`,
        alt: `Carneiro e Cagnacci`
    },
    {
        src: `${logosURL}/05.jpg`,
        alt: `Coredrinks`
    },
    {
        src: `${logosURL}/06.jpg`,
        alt: `Amar e Cuidar`
    },
    {
        src: `${logosURL}/07.jpg`,
        alt: `Nutra Corpore`
    },
    {
        src: `${logosURL}/08.jpg`,
        alt: `KES`
    },
    {
        src: `${logosURL}/09.jpg`,
        alt: `KES`
    },
];

export const newSocialContent : Array<ImageBasic> = [
    {
        src: `${socialURL}/01.jpg`,
        alt: `Kiwi Pilates`
    },
    {
        src: `${socialURL}/02.jpg`,
        alt: `Roll Music`
    },
    {
        src: `${socialURL}/03.jpg`,
        alt: `Wendell Uguetto`
    },
    {
        src: `${socialURL}/04.jpg`,
        alt: `Carneiro e Cagnacci`
    },
    {
        src: `${socialURL}/05.jpg`,
        alt: `Coredrinks`
    },
    {
        src: `${socialURL}/06.jpg`,
        alt: `Amar e Cuidar`
    },
    {
        src: `${socialURL}/07.jpg`,
        alt: `Nutra Corpore`
    },
    {
        src: `${socialURL}/08.jpg`,
        alt: `KES`
    },
    {
        src: `${socialURL}/09.jpg`,
        alt: `KES`
    },
];

export const newMarketingCOntent : Array<ImageBasic> = [
    {
        src: `${marketingURL}/01.jpg`,
        alt: `Kiwi Pilates`
    },
    {
        src: `${marketingURL}/02.jpg`,
        alt: `Roll Music`
    },
    {
        src: `${marketingURL}/03.jpg`,
        alt: `Wendell Uguetto`
    },
    {
        src: `${marketingURL}/04.jpg`,
        alt: `Carneiro e Cagnacci`
    },
    {
        src: `${marketingURL}/05.jpg`,
        alt: `Coredrinks`
    },
    {
        src: `${marketingURL}/06.jpg`,
        alt: `Amar e Cuidar`
    },
]