import React, { useContext } from "react";
import { GoogleMap, InfoWindow } from "@react-google-maps/api";
import { MapProps, PlaceProps } from "../../interfaces";
import { MapContext } from "../../context";

export const ReservationMap: React.FC<MapProps> = ({
  geostate,
  place,
  setPlace,
}) => {
  const { isShown } = useContext(MapContext);
  const handleClose = () => setPlace(() => null);
  const styles = {
    height: "100%",
    width: "100%",
    transition: "0.5s all",
    zIndex: 2,
    transform: isShown ? "translateY(0)" : "translateY(-120%)",
  };

  const offVisibility = [{ visibility: "off" }];

  return (
    <GoogleMap
      options={{
        styles: [
          { featureType: "poi.business", stylers: offVisibility },
          { featureType: "poi.medical", stylers: offVisibility },
          { featureType: "poi.school", stylers: offVisibility },
          {
            featureType: "transit",
            elementType: "labels.icon",
            stylers: offVisibility,
          },
        ],
      }}
      mapContainerStyle={styles}
      zoom={15}
      center={geostate}
    >
      {place && (
        <InfoWindow
          position={geostate}
          onCloseClick={() => handleClose()}
          zIndex={9999}
          // onLoad={(e: google.maps.InfoWindow) => console.log('infoWindow', e)}
        >
          <PlaceContent place={place} />
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

interface PlaceContentProps {
  place: PlaceProps;
}

const PlaceContent: React.FC<PlaceContentProps> = ({ place }) => {
  const { setIsShown } = useContext(MapContext);
  return (
    <section className="flex flex-col items-center justify-center gap-1 p-4">
      <h1 className="font-medium">{place.name}</h1>
      <span className="font-medium">⭐ {place.rating}</span>
      <p>{place.formatted_address}</p>
      <span>{place.formatted_phone_number}</span>
      <button
        className="p-2 text-[0.65rem] mt-2 font-medium border rounded bg-sky-500 hover:bg-sky-400 border-white text-white"
        onClick={() => setIsShown(false)}
      >
        Reserve Now
      </button>
    </section>
  );
};
