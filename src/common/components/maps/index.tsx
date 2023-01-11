import React, { useContext } from 'react'
import { GoogleMap, InfoWindow } from '@react-google-maps/api'
import { MapProps, PlaceProps } from '../../interfaces'
import { MapContext } from '../../context'

export const ReservationMap: React.FC<MapProps> = ({ geostate, place, setPlace }) => {
    const { isShown } = useContext(MapContext)
    const handleClose = () => setPlace(() => null)
    const styles = {
        height: "100%",
        width: "100%",
        // filter: place ? 'none' : 'grayscale(1) contrast(1.2) opacity(0.4)',
        transition: '0.5s all',
        zIndex: '2',
        transform: isShown ? 'translateX(0)' : 'translateX(-95%)'
    }
    
    return (
        <GoogleMap
            mapContainerStyle={styles}
            zoom={15}
            center={geostate}>
            {
                place && (
                    <InfoWindow
                        position={geostate}
                        onCloseClick={() => handleClose()}
                        onLoad={(e: google.maps.InfoWindow) => console.log('loaded', e)}
                        zIndex={9999}>
                        <PlaceContent place={place} />
                    </InfoWindow>
                )
            }
        </GoogleMap>
    )
}

interface PlaceContentProps {
    place: PlaceProps;
}
 
const PlaceContent: React.FC<PlaceContentProps> = ({place}) => {
    const { setIsShown } = useContext(MapContext)
    return (  
        <section className='flex flex-col items-center justify-center gap-1 px-4 pt-4'>
            <h1 className='font-medium'>{place.name}</h1>
            <span className='font-medium'>⭐ {place.rating}</span>
            <p>{place.formatted_address}</p>
            <span>{place.formatted_phone_number}</span>
            <button className='p-2 text-[0.65rem] mt-1 font-medium border rounded bg-blue-600 hover:bg-blue-400 border-white text-white'
            onClick={() => setIsShown(false)}>Reserve Now</button>
        </section>
    )
}