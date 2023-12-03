import HeroImages from "../HeroImages";
import HeroText from "../HeroText";
import SwiperMarquee from "../SwiperMarquee";

export default function HeroSection() {

    return (
        <section className="hero pt-[170px] justify-between relative pb-[170px]">

            <div className="bg-gradient-to-b from-purple-400 to-transparent h-full w-full absolute top-0 left-0" />

            <div className="container grid grid-cols-2 relative z-10">

                <HeroText />

                <HeroImages />

            </div>

            <div className="absolute w-full left-0 bottom-0 rotate-[-2deg]">
                <SwiperMarquee />
            </div>

            <img className="hidden absolute left-[20px] bottom-[-300px] z-20 3xl:block" src="/images/photoshop.png" alt="" width={152} height={522} />

        </section>
    )
}