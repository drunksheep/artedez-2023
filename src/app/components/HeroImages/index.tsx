import Image from 'next/image'

export default function HeroImages() {
    return(
        <div className="border-2 border-white relative">
            
            {/* squares */}
            <div className="absolute top-[-10px] left-[-10px] h-[20px] w-[20px] bg-white"></div>
            <div className="absolute top-[-10px] right-[-10px] h-[20px] w-[20px] bg-white"></div>
            <div className="absolute bottom-[-10px] right-[-10px] h-[20px] w-[20px] bg-white"></div>
            <div className="absolute bottom-[-10px] left-[-10px] h-[20px] w-[20px] bg-white"></div>

            <Image className='absolute left-0 right-0 m-auto top-[50%] translate-y-[-50%]' src="/images/logo.svg" alt="" width={410} height={410} />

        </div>  
    )
}