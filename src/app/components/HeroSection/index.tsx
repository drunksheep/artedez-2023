'use client'

import { swiperMarqueeItems } from "@/app/content/marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroImages from "../HeroImages";
import HeroText from "../HeroText";
import SwiperMarquee from "../SwiperMarquee";

export default function HeroSection() {

    const { scrollYProgress } = useScroll();
    const val = useTransform(scrollYProgress, [0, .5], [0, -500])

    return (
        <section className="hero pt-[80px] lg:pt-[170px] lg:justify-between lg:pb-[170px] relative ">

            <div className="bg-gradient-to-b from-purple-400 to-transparent h-full w-full absolute top-0 left-0" />

            <div className="container lg:grid lg:grid-cols-2 relative z-10">

                <HeroText />

                <HeroImages />

            </div>

            <div className="absolute w-full left-0 bottom-[-150px] lg:bottom-0 rotate-[-2deg]">
                <SwiperMarquee items={swiperMarqueeItems} />
            </div>

            
            <motion.div style={{ translateY: val  }} className="hidden absolute left-[150px] bottom-[-300px] z-20 3xl:block">
                <img src="/images/photoshop.png" alt="" width={152} height={522} />
            </motion.div>

        </section>
    )
}