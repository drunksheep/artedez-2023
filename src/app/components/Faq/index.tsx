'use client';

import { faqItems } from "@/app/content/faq";
import { FaqItem } from "@/app/types/Faq";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import TitleHeadline from "../TitleHeadline";

export default function Faq() {

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 lg:pt-[130px] lg:pb-[120px] relative">

            <div className="container z-10 relative ">

                <TitleHeadline title="ficou com alguma dúvida?" subtitle="confira nosso faq" />

                {
                    faqItems &&
                    <div className="lg:max-w-[700px] mx-auto">
                        {
                            faqItems.map((item: FaqItem, idx: number) =>
                                <div className="faq-item border-4 border-white rounded-xl mb-8 bg-purple-400/70" key={idx}>
                                    <button className="py-[24px] px-[30px] bg-transparent flex flex-row flex-nowrap items-center justify-between w-full" onClick={() => toggleItem(idx)}>
                                        <h3 className="text-18 text-white font-bold w-full text-left">
                                            {item.question}
                                        </h3>
                                        <div className={`min-h-[40px] min-w-[40px] bg-pink-400 rounded-full text-24 text-white font-bold`}>
                                            {openIndex === idx ? '-' : '+'}
                                        </div>
                                    </button>
                                    <div className={`bg-white pt-[20px] pb-[30px] px-[15px]  ${openIndex === idx ? '' : 'hidden'}`}>
                                        <p className="text-black text-14 leading-[20px]">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                }


            </div>

            <div className="bg-gradient-to-t from-purple-400 to-transparent h-[2000px] w-full absolute bottom-0 left-0" />

            <Link href="#plans" className="bg-pink-400 rounded-full font-bold w-full border-[4px] border-white text-18 lg:text-24 py-3 flex flex-row flex-nowrap justify-center align-center items-center gap-x-2 transition-all ease-in-out duration-300 hover:bg-white hover:border-pink-400 hover:text-pink-400 max-w-[320px] lg:max-w-[400px] z-10 absolute bottom-[-33px] left-0 right-0 m-auto" title="Conheça os planos">
                <span>
                    Quero conhecer um plano!
                </span>
                <FontAwesomeIcon className="max-w-[40px]" size="2xs" icon={faArrowUp} />
            </Link>

        </section>
    )
}