
import { SellingCardProps } from '@/app/types/sellingCard';
import { motion } from 'framer-motion';

export default function SellingCard(props: SellingCardProps) {

    return (
        <div className="relative">

            {
                props.image &&
                <motion.div
                    initial={{ opacity: 0, translateY: -25 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true, margin: '40px' }}
                    transition={{ duration: .3, delay: .1 }}
                    className="square w-[170px] h-[170px] bg-purple-400 rounded-xl relative mb-20">
                    <img
                     className={`absolute max-w-none ${props.positioning || ''}`} 
                    src={props.image} alt={props.title} width={props.width} height={props.height} />
                </motion.div>
            }

            <motion.h3 
            className="text-white text-30 font-bold mb-6 uppercase leading-[32px]"
            initial={{ opacity: 0, translateY: -25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, margin: '40px' }}
            transition={{ duration: .3, delay: .2 }}
            >
                {props.title} <br />
                <motion.span className="text-44">
                    {props.subtitle}
                </motion.span>
            </motion.h3>
            <motion.p 
            className="text-18 text-white"
            initial={{ opacity: 0, translateY: -25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, margin: '40px' }}
            transition={{ duration: .3, delay: .3 }}
            >
            {props.description}
            </motion.p>
        </div>

    )
}