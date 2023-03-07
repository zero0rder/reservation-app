import React, { useState, useEffect, ReactElement } from "react";
import { AutoInput } from "@components/autocomplete/autoInput";
import type { NextPageWithLayout } from "./_app";
import { ReservationMap } from "@components/maps";
import { PlaceForm } from "@components/place/placeForm";
import { GeolocationPosition, PlaceProps } from "../common/interfaces";
import { MapContext } from "../common/context";
import SearchLayout from "@components/layouts/search";
// interface SearchProps {}

const Search: NextPageWithLayout = () => {
  const [geolocation, setGeolocation] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });
  const [place, setPlace] = useState<PlaceProps | null>(null);
  const [isShown, setIsShown] = useState<boolean>(true);
  const successCb = (pos: GeolocationPosition) =>
    setGeolocation({ lat: pos?.coords.latitude, lng: pos?.coords.longitude });
  const errorCb = (error: GeolocationPositionError) =>
    console.log("error fetching position", error);
  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(successCb, errorCb);
  }, []);
  const formProps = {
    name: place?.name,
    addy: place?.formatted_address,
    phone: place?.formatted_phone_number,
  };

  return (
    <MapContext.Provider value={{ isShown, setIsShown }}>
      <div className="relative flex items-start justify-center w-full h-full">
        <section className="relative flex items-center justify-center w-full h-full text-gray-600">
          <div className="absolute inset-0 bg-gray-300">
            <ReservationMap
              geostate={geolocation}
              place={place}
              setPlace={setPlace}
            />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-zinc-900">
              <span
                onClick={() => setIsShown(() => true)}
                className={`${
                  !isShown ? "block" : "hidden"
                } absolute top-4 p-3 text-white text-xl left-8 hover:text-sky-500 cursor-pointer`}
              >
                Show Map
              </span>
              <PlaceForm showForm={isShown} place={formProps} />
            </div>
          </div>
          {!place && (
            <AutoInput setPlace={setPlace} setLocation={setGeolocation} />
          )}
        </section>
      </div>
    </MapContext.Provider>
  );
};

export default Search;

Search.getLayout = function getLayout(page: ReactElement) {
  return <SearchLayout>{page}</SearchLayout>;
};
