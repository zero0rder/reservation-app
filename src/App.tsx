import React, { useState, useEffect } from 'react'
import { ReservationMap } from './components/maps'
import { AutoInput } from './components/autoInput'
import { GeolocationPosition } from './interfaces'
import { Row } from 'antd'
import './App.css'

interface Props {}

const App: React.FC<Props> = () => {
  const [geolocation, setGeolocation] = useState<{lat: number, lng: number, name?: string } | null>(null)
  const successCb = (pos: GeolocationPosition) => setGeolocation({ lat: pos?.coords.latitude, lng: pos?.coords.longitude })
  const errorCb = (error: GeolocationPositionError) => console.log('error fetching position', error)

  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(successCb, errorCb)
  }, [])

  return (
    <Row className='app'>
        <ReservationMap geostate={geolocation} /> 
        <AutoInput setLocation={setGeolocation} />
    </Row>
  )
}

export default App