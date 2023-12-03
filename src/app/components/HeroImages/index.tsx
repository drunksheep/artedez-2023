
export default function HeroImages() {
    return(
        <div className="border-2 border-white relative">
            
            {/* squares */}
            <div className="absolute top-[-10px] left-[-10px] h-[20px] w-[20px] bg-white"></div>
            <div className="absolute top-[-10px] right-[-10px] h-[20px] w-[20px] bg-white"></div>
            <div className="absolute bottom-[-10px] right-[-10px] h-[20px] w-[20px] bg-white"></div>
            <div className="absolute bottom-[-10px] left-[-10px] h-[20px] w-[20px] bg-white"></div>

            <img className='absolute left-0 right-0 m-auto top-[50%] translate-y-[-50%]' src="/images/logo.svg" alt="" width={410} height={410} />

            <img className='absolute left-[-40px] bottom-[25px]' src="/images/icon-arrow-figma.png" alt="" width={84} height={84} />

            <img className='absolute top-[-40px] right-0' src="/images/figmaui.png" alt="" width={348} height={25} />

        </div>  
    )
}