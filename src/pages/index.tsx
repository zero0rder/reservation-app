import React, { useState, useEffect } from 'react'
import { AutoInput } from '@components/autocomplete/autoInput'
import { ReservationMap } from '@components/maps'
import { GeolocationPosition, PlaceProps } from '../common/interfaces'

export default function Home() {
  const [geolocation, setGeolocation] = useState<google.maps.LatLngLiteral>({lat: 0, lng: 0})
  const [place, setPlace] = useState<PlaceProps | null>(null)
  const successCb = (pos: GeolocationPosition) => setGeolocation({ lat: pos?.coords.latitude, lng: pos?.coords.longitude })
  const errorCb = (error: GeolocationPositionError) => console.log('error fetching position', error)
  useEffect(() => {navigator?.geolocation?.getCurrentPosition(successCb, errorCb)}, [])

  return (
    <div className='relative flex items-start justify-center flex-1 w-full'>
      <section className="relative flex items-center justify-center w-full h-full text-gray-600">
        <div className="absolute inset-0 bg-gray-300">
          <ReservationMap geostate={geolocation} place={place} setPlace={setPlace}/>
        </div>
       {!place && <AutoInput setPlace={setPlace} setLocation={setGeolocation}/>}
      </section>
    </div>
  )
}
