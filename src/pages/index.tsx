import Script from 'next/script'
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
    <div className='flex justify-center items-start flex-1 md:px-7 w-full relative'>
      <main className='flex justify-center items-center w-full flex-col'>
        { place 
          ? <>
              <span 
                onClick={() => setPlace(null)}
                className='absolute left-0 ml-4 cursor-pointer z-10 -top-10 flex justify-center items-center'>
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
      <Script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}&libraries=places`} strategy='beforeInteractive'/>
    </div>
  )
}
