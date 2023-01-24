import React, { useCallback, useEffect, useRef } from 'react'
import { AutoInputProps } from '../../interfaces'
import { motion } from 'framer-motion'
import { inputVariants } from '../../../utils/motion'

export const AutoInput: React.FC<AutoInputProps> = ({ setLocation, setPlace }) => {
    const autocompleteRef = useRef<google.maps.places.Autocomplete>()
    const initAutocomplete = useCallback(() => {
        autocompleteRef.current = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete') as HTMLInputElement, 
        {   types: ['restaurant', 'food'],
            fields: ['name', 'place_id', 'geometry', 'rating', 'formatted_phone_number', 'opening_hours', 'user_ratings_total', 'formatted_address'],
            componentRestrictions: {country: ['US']}
        })

        autocompleteRef.current.addListener('place_changed', onPlaceChanged)

    }, [onPlaceChanged])

    function onPlaceChanged(){
        const details = autocompleteRef.current?.getPlace() as any
        if(details?.geometry){
            setPlace(() => details)
            setLocation({
                lat: details.geometry.location.lat(), 
                lng: details.geometry.location.lng()
            })
        }
    }

    useEffect(() => initAutocomplete(), [initAutocomplete])

    return (
        <motion.div
            variants={inputVariants}
            initial='hidden'
            whileInView='show'
            className='z-10 w-72'>
            <input id='autocomplete' 
            className={`absolute border-2 p-3 w-72 rounded-md border-amber-600 hover:border-green-500 focus:border-green-500 focus:outline-none text-sm shadow-2xl shadow-amber-500`}/>
        </motion.div>
    )
}