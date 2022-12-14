import React from 'react'
import Image from 'next/image'
import { MapProps } from '../../interfaces'
import { motion } from 'framer-motion'
import { mapVariants } from '../../../utils/motion'

export const ReservationMap: React.FC<MapProps> = ({ geostate, dimensions }) => {
    const image = `https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=${dimensions ? dimensions.w : '600'}x${dimensions ? dimensions.h : '300'}&maptype=roadmap&markers=color:red%7C${geostate?.lat},${geostate?.lng}&key=${process.env.NEXT_PUBLIC_API_KEY}`
    const imgLoader = (src: any) => image
    return (
        <section className='m-8 text-center'>
            { geostate !== null 
            ? <motion.div
                variants={mapVariants}
                initial='hidden'
                whileInView='show'
                whileHover={{ 
                    scale: 1.025,
                    transition: { duration: 0.2 }
                }}>
                <Image 
                className='m-auto border border-gray-300 rounded-lg hover:border-indigo-300'
                src={image} 
                loader={imgLoader} 
                alt='map'
                priority
                width={dimensions ? dimensions.w : 600}
                height={dimensions ? dimensions.h : 300}
                unoptimized />   
             </motion.div>
            : <div>Loading...</div>}
        </section>
    )
}