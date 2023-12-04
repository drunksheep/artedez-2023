
export default function HeroImages() {
    return (
        <div className="">


            <div className="border-2 border-white relative w-[300px] h-[300px] lg:h-[520px] lg:w-[520px] mx-auto lg:ml-auto mt-20 lg:mt-0">

                {/* squares */}
                <div className="absolute top-[-10px] left-[-10px] h-[20px] w-[20px] bg-white"></div>
                <div className="absolute top-[-10px] right-[-10px] h-[20px] w-[20px] bg-white"></div>
                <div className="absolute bottom-[-10px] right-[-10px] h-[20px] w-[20px] bg-white"></div>
                <div className="absolute bottom-[-10px] left-[-10px] h-[20px] w-[20px] bg-white"></div>

                {/* logo middle */}
                <img className='absolute left-0 right-0 m-auto top-[50%] translate-y-[-50%] max-w-[56%] lg:max-w-full' src="/images/logo-centro-topo.svg" alt="" width={295} height={295} />

                {/* logo spinning letters */}
                <img className='spin absolute left-0 right-0 m-auto lg:top-[42px] top-[15px] max-w-[90%]' src="/images/logo-circular-topo.svg" alt="" width={430} height={430} />

                {/* glow right */}
                <img className='absolute top-[120px] translate-y-[-50%] right-[-113px] z-10' src="/images/brilho-topo.png" alt="" width={225} height={568} />

                {/* photoshop */}
                <img className='absolute left-[-40px] bottom-[25px] hidden lg:block' src="/images/icon-arrow-figma.png" alt="" width={84} height={84} />

                {/* figma ui */}
                <img className='absolute top-[-40px] right-0 hidden lg:block' src="/images/figmaui.png" alt="" width={195} height={21} />

            </div>




        </div>
    )
}