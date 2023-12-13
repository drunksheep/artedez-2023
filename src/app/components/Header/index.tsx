import { socialMediaURLs } from "@/app/content/general";
import { SocialMediaURLs } from "@/app/types/socialMedia";

export default function Header() {
    return (
        <header className="bg-transparent absolute top-0 w-full left-0 bg-white bg-opacity-5 z-20">
            <div className="container py-3 flex flex-row justify-between items-center">
                <img height="29" width="29" alt="Logo Artedez" src={'/images/logo-minimal.svg'} />
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
        </header>
    )
}