import React, { useState, useEffect } from 'react'
import { AutoInput } from '@components/autocomplete/autoInput'
import { ReservationMap } from '@components/maps'
import { PlaceForm } from '@components/place/placeForm'
import { GeolocationPosition, PlaceProps } from '../common/interfaces'

export default function Home() {
  const [geolocation, setGeolocation] = useState<google.maps.LatLngLiteral>({lat: 0, lng: 0})
  const [place, setPlace] = useState<PlaceProps | null>(null)
  const successCb = (pos: GeolocationPosition) => setGeolocation({ lat: pos?.coords.latitude, lng: pos?.coords.longitude })
  const errorCb = (error: GeolocationPositionError) => console.log('error fetching position', error)
  useEffect(() => {navigator?.geolocation?.getCurrentPosition(successCb, errorCb)}, [])
  const formProps = {
    name: place?.name, 
    addy: place?.formatted_address, 
    phone: place?.formatted_phone_number
  }

  return (
    <div className='relative flex items-start justify-center flex-1 w-full'>
      <section className="relative flex items-center justify-center w-full h-full text-gray-600">
        <div className="absolute inset-0 bg-gray-300">
          <ReservationMap geostate={geolocation} place={place} setPlace={setPlace}/>
          <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
            <button onClick={() => setPlace(() => null)} className='absolute top-0 p-2 text-white bg-blue-600 border border-blue-600 rounded left-16 hover:bg-blue-400'>Back To Map</button>
            <PlaceForm place={formProps}/>
          </div>
        </div>
       {!place && <AutoInput setPlace={setPlace} setLocation={setGeolocation}/>}
      </section>
    </div>
  )
}
