import React from 'react'
import { PlaceProps } from '../../interfaces'

interface PlaceCardProps {
    details: PlaceProps | null;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ details }) => {
    return (
        <div className='px-4 space-y-2'>
            <h1 className='text-center font-bold text-2xl underline'>{ details?.name }</h1>
            <div className='m-4 text-center'>
                <span className='font-bold pb-1'>⭐ {details?.rating}</span>
                <span className='italic block underline font-medium py-1'>{details?.formatted_phone_number}</span>
                <span className='block py-1 font-medium'>{details?.formatted_address}</span>
                <ul className='text-sm my-2 text-gray-400 hidden md:block'>
                    {details?.opening_hours?.weekday_text.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
            </div>
        </div>
    )
}