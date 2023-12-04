import { swiperMarqueeItems } from '@/app/content/marquee';
import { faBehance, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwiperMarquee from "../SwiperMarquee";

export default function About() {
    return (
        <section className="pt-[200px] relative pb-[150px]">
            <div className="container relative z-10">
                <img src="/images/fernando.png" className='left-[-50px] top-[-50px] absolute' alt="" width={680} height={970} />
                <div className="w-[500px] ml-auto">
                    <h2 className="text-white font-bold font-nexa text-40 uppercase mb-[40px] leading-[40px]">
                        Quem está
                        <span className="text-56 block leading-[52px]">
                            por trás
                        </span>
                    </h2>
                    <p className="text-white text-18 leading-[24px] mb-5">
                        Olá, sou Fernando Zani, fundador e mente criativa por trás da <strong>Arte Dez.</strong> Tenho 37 anos e trabalho com design desde os 17
                    </p>
                    <p className="text-white text-18 leading-[24px] mb-5">
                        Minha carreira de 20 anos no design foi forjada em gigantes do mercado como <strong>Porto Seguro e Warren.</strong> Percorri diversos caminhos, me especializando em identidades visuais e redes sociais
                    </p>
                    <p className="text-white text-18 leading-[24px] mb-5">
                        Já criei mais de 100 identidades visuais e mais de 300 layouts para sites. Essa experiência moldou minha visão sobre os desafios e triunfos que permeiam nosso setor
                    </p>
                    <p className="text-white text-18 leading-[24px] mb-10">
                        Hoje, como fundador da <strong>Arte Dez</strong>, tenho convicção de que o design não é apenas sobre estética, mas sobre contar histórias, criar conexões e o mais importante, <strong>gerar resultados</strong>
                    </p>
                    <div className="border-4 border-white rounded-xl flex flex-row justify-around items-center max-w-[400px] min-h-[60px]">
                        <p className="text-24 text-white">
                            Redes sociais
                        </p>
                        <div className="flex flex-row items-center justify-between w-[100px]">
                            <a href=""><FontAwesomeIcon className="text-white text-24" icon={faInstagram} /></a>
                            <a href=""><FontAwesomeIcon className="text-white text-24" icon={faLinkedinIn} /></a>
                            <a href=""><FontAwesomeIcon className="text-white text-24" icon={faBehance} /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute w-full left-0 bottom-0 rotate-[2deg] z-10">
                <SwiperMarquee items={swiperMarqueeItems} />
            </div>
        
        </section>
    )
}