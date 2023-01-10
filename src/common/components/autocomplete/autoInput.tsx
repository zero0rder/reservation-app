import React, { useCallback, useEffect } from 'react'
import { AutoInputProps } from '../../interfaces'
import { motion } from 'framer-motion'
import { inputVariants } from '../../../utils/motion'

export const AutoInput: React.FC<AutoInputProps> = ({ setLocation, setPlace }) => {
    let autocomplete: any
    const initAutocomplete = useCallback(() => {
        autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete') as HTMLInputElement, 
        {   types: ['restaurant', 'food'],
            fields: ['name', 'place_id', 'geometry', 'rating', 'formatted_phone_number', 'opening_hours', 'user_ratings_total', 'formatted_address'],
            componentRestrictions: {country: ['US']}
        })

        autocomplete.addListener('place_changed', onPlaceChanged)

    }, [autocomplete])

    const onPlaceChanged = () => {
        let details = autocomplete.getPlace()
            
        if(details.geometry){
        setPlace(() => details)
        setLocation({
            lat: details?.geometry.location.lat(), 
            lng: details?.geometry.location.lng()
        })}
    }

    useEffect(() => initAutocomplete(), [initAutocomplete])

    return (
        <motion.div
            variants={inputVariants}
            initial='hidden'
            whileInView='show'
            className='z-10 w-72'>
            <input id='autocomplete' 
            className={`absolute border p-3 w-72 rounded-md border-slate-200 hover:border-indigo-300 focus:border-indigo-300 focus:outline-none text-sm shadow-2xl shadow-stone-900`}/>
        </motion.div>
    )
}