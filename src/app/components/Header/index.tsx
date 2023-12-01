import Image from 'next/image';

export default function Header() {
    return(
        <header className="bg-transparent absolute top-0 w-full left-0 bg-white bg-opacity-5 z-20">
            <div className="container py-3 flex flex-row justify-between items-center">
                <Image height="29" width="29" alt="Logo Artedez" src={'/images/logo-minimal.svg'}  />
                <div className="flex flex-row flex-nowrap gap-x-5 ">
                    <a className="font-nexa text-white text-12 font-bold transition-all duration-300 ease-in-out hover:text-pink-400" href="" target="_BLANK" rel="noopener noreferrer">INSTAGRAM</a>
                    <a className="font-nexa text-white text-12 font-bold transition-all duration-300 ease-in-out hover:text-pink-400" href="" target="_BLANK" rel="noopener noreferrer">BEHANCE</a>
                    <a className="font-nexa text-white text-12 font-bold transition-all duration-300 ease-in-out hover:text-pink-400" href="" target="_BLANK" rel="noopener noreferrer">LINKEDIN</a>
                </div>
            </div>
        </header>
    )
}