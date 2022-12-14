import React, { useState, useEffect } from 'react'
import { AutoInput } from '@components/autocomplete/autoInput'
import { ReservationMap } from '@components/maps'
import { PlaceContainer } from '@components/place/placeContainer'
import { GeolocationPosition, PlaceProps } from '../common/interfaces'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'

export default function Home() {
  const [geolocation, setGeolocation] = useState<{lat: number, lng: number } | null>(null)
  const [place, setPlace] = useState<PlaceProps | null>(null)
  const successCb = (pos: GeolocationPosition) => setGeolocation({ lat: pos?.coords.latitude, lng: pos?.coords.longitude })
  const errorCb = (error: GeolocationPositionError) => console.log('error fetching position', error)
  useEffect(() => {navigator?.geolocation?.getCurrentPosition(successCb, errorCb)}, [])
  
  return (
    <div className='relative flex items-start justify-center flex-1 w-full md:px-7'>
      <main className='flex flex-col items-center justify-center w-full'>
        { place 
          ? <>
              <span 
                onClick={() => setPlace(null)}
                className='absolute left-0 z-10 flex items-center justify-center ml-4 text-gray-200 cursor-pointer -top-10'>
                <FaRegArrowAltCircleLeft />
                <span className='pl-1'>Back</span>
              </span>
              <PlaceContainer details={place}/>
            </>
          : <>
              <ReservationMap geostate={geolocation}/>
              <AutoInput setPlace={setPlace} setLocation={setGeolocation}/>
            </> 
        }
      </main>
    </div>
  )
}
