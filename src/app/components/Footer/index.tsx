
export default function Footer() {
    return (
        <footer className="bg-black pt-[60px] pb-[40px]">
            <div className="container">
                <div className='flex flex-row justify-between items-center mb-[20px]'>
                    <img height="29" width="29" alt="Logo Artedez" src={'/images/logo-minimal.svg'}  />
                    <div className="flex flex-row flex-nowrap gap-x-5 ">
                        <a className="font-nexa text-white text-12 font-bold transition-all duration-300 ease-in-out hover:text-pink-400" href="" target="_BLANK" rel="noopener noreferrer">INSTAGRAM</a>
                        <a className="font-nexa text-white text-12 font-bold transition-all duration-300 ease-in-out hover:text-pink-400" href="" target="_BLANK" rel="noopener noreferrer">BEHANCE</a>
                        <a className="font-nexa text-white text-12 font-bold transition-all duration-300 ease-in-out hover:text-pink-400" href="" target="_BLANK" rel="noopener noreferrer">LINKEDIN</a>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center pt-[12px] border-t-[1px] border-gray-400'>
                    <p className="text-14 text-white">
                        <strong>Arte Dez Design Studio</strong> | Segunda a Sexta - 9h às 18h
                    </p>
                    <p className='text-14 text-white'>
                        CNPJ: 30.209.500/0001-07
                    </p>
                </div>
            </div>
        </footer>
    )
}