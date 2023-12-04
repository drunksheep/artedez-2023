import { faBehance, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { SocialMediaURLs } from "../types/socialMedia";

export const socialMediaURLs : Array<SocialMediaURLs> = [
    {
        name: 'Instagram',
        icon: faInstagram,
        url: 'https://www.instagram.com/fezani' 
    },
    {
        name: 'Behance', 
        icon: faBehance, 
        url: 'https://www.linkedin.com/in/fezani/',
    },
    {
        name: 'Linkedin', 
        icon: faLinkedinIn, 
        url: 'https://www.behance.net/fezani',
    }
]