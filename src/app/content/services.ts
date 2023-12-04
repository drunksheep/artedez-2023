import { ImageBasic } from "../types/image";
import { ServiceItem } from "../types/serviceItem";

export const portfolioURL = '/images/portfolio/';

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
    },
    {
        title: 'CAMPANHAS',
        subtitle: 'PUBLICITÁRIAS',
        bg: '/images/campanhas.png'
    },
    {
        title: 'MÍDIA',
        subtitle: 'PAGA',
        bg: '/images/midia-paga.png'
    }
];


export const webDesign: Array<ImageBasic> = [
    {
        src: `${portfolioURL}/3xceler.jpg`,
        alt: '3xceler'
    },
    {
        src: `${portfolioURL}brlink.jpg`,
        alt: 'BRLink'
    },
    {
        src: `${portfolioURL}caioaraujo.jpg`,
        alt: 'Dr. Caio Araujo'
    },
    {
        src: `${portfolioURL}cdmar.jpg`,
        alt: 'CDmar'
    }
];

export const visualIdentities: Array<ImageBasic> = [
    {
        src: `${portfolioURL}/branding/lua-morales.jpg`,
        alt: 'Lua Morales'
    },
    {
        src: `${portfolioURL}/branding/ps.jpg`,
        alt: 'PS'
    },
    {
        src: `${portfolioURL}/branding/cacharolete.jpg`,
        alt: 'cacharolete'
    },
    {
        src: `${portfolioURL}/branding/brlink.jpg`,
        alt: 'brlink'
    },
];

export const social: Array<ImageBasic> = [
    {
        src: `${portfolioURL}/social/detail.png`,
        alt: 'Detail Car'
    },
    {
        src: `${portfolioURL}/social/rionorte.png`,
        alt: 'Rio Norte Saúde'
    },
    {
        src: `${portfolioURL}/social/tomioka.png`,
        alt: 'Dr. Ricardo Tomioka'
    },
    {
        src: `${portfolioURL}/social/warren.png`,
        alt: 'Warren'
    },
]