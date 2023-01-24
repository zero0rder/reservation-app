import React from 'react'
// import { PlaceForm } from './placeForm'
import { PlaceCard } from './placeCard'
// import { ReservationMap } from '../maps'
import { PlaceProps } from '../../interfaces'
import { motion } from 'framer-motion'
import { placeVariants, slideIn } from '../../../utils/motion'

interface PlaceContainerProps {
    details: PlaceProps | null;
}

export const PlaceContainer: React.FC<PlaceContainerProps> = ({ details }) => {
    // const location = {
    //     lat: details?.geometry.location.lat(),
    //     lng: details?.geometry.location.lng()
    // }
    // const placeDetails = {
    //     name: details?.name, 
    //     addy: details?.formatted_address, 
    //     phone: details?.formatted_phone_number
    // }

    return (
        <motion.section 
            variants={placeVariants}
            initial='hidden'
            whileInView='show'
            className='relative top-0 left-0 flex flex-col w-full h-full py-4 divide-y md:flex-row md:absolute md:divide-y-0 md:divide-x'>
            <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            initial='hidden'
            whileInView='show'
            className='flex flex-col items-center justify-center w-full px-4 pb-4 md:w-6/12 md:pb-0'>                
                {/* <ReservationMap dimensions={{w: 250, h: 190}} geostate={location}/> */}
                <PlaceCard details={details}/>
            </motion.div>
            <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)} 
            initial='hidden'
            whileInView='show'
            className='flex items-center justify-center w-full px-4 pt-4 md:w-6/12 md:pt-0'>
            </motion.div>
        </motion.section>
    )
}