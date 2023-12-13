import { socialMediaURLs } from "@/app/content/general";
import { SocialMediaURLs } from "@/app/types/socialMedia";

export default function Footer() {
    return (
        <footer className="bg-black pt-[60px] pb-[40px]">
            <div className="container">
                <div className='flex flex-row justify-between items-center mb-[20px]'>
                    <img height="40" width="40" alt="Logo Artedez" src={'/images/logo-minimal.svg'} />
                    <div className="flex flex-row flex-nowrap gap-x-5 ">
                        {
                            socialMediaURLs.map((item: SocialMediaURLs, idx: number) =>
                                <a key={idx}
                                    className="font-nexa text-white text-10 lg:text-12 font-bold transition-all duration-300 ease-in-out hover:text-purple-400 uppercase"
                                    href={item.url}
                                    target="_BLANK"
                                    rel="noopener noreferrer">
                                    {item.name}
                                </a>
                            )
                        }
                    </div>
                </div>
                <div className='lg:flex flex-row justify-between items-center pt-[12px] border-t-[1px] border-gray-400 text-center lg:text-left'>
                    <p className="text-14 text-white mb-3 lg:mb-0">
                        <strong>Arte Dez Design Studio</strong>| Segunda a Sexta - 9h às 18h
                    </p>
                    <p className='text-14 text-white'>
                        CNPJ: 30.209.500/0001-07
                    </p>
                </div>
            </div>
        </footer>
    )
}