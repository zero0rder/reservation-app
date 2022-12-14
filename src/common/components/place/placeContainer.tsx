import React from 'react'
import { PlaceForm } from './placeForm'
import { PlaceCard } from './placeCard'
import { ReservationMap } from '../maps'
import { PlaceProps } from '../../interfaces'
import { motion } from 'framer-motion'
import { placeVariants, slideIn } from '../../../utils/motion'

interface PlaceContainerProps {
    details: PlaceProps | null;
}

export const PlaceContainer: React.FC<PlaceContainerProps> = ({ details }) => {
    const location = {
        lat: details?.geometry.location.lat(),
        lng: details?.geometry.location.lng()
    }
    const placeDetails = {
        name: details?.name, 
        addy: details?.formatted_address, 
        phone: details?.formatted_phone_number
    }

    return (
        <motion.section 
            variants={placeVariants}
            initial='hidden'
            whileInView='show'
            className='flex flex-col md:flex-row w-full h-full relative md:absolute left-0 top-0 divide-y md:divide-y-0 md:divide-x py-4'>
            <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            initial='hidden'
            whileInView='show'
            className='w-full md:w-6/12 flex flex-col justify-center items-center pb-4 md:pb-0 px-4'>                
                <ReservationMap dimensions={{w: 250, h: 190}} geostate={location}/>
                <PlaceCard details={details}/>
            </motion.div>
            <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)} 
            initial='hidden'
            whileInView='show'
            className='w-full md:w-6/12 flex justify-center items-center pt-4 md:pt-0 px-4'>
                <PlaceForm place={placeDetails} />
            </motion.div>
        </motion.section>
    )
}