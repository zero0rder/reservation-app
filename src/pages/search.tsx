import React, { useState, useEffect, ReactElement } from "react";
import { AutoInput } from "@components/autocomplete/autoInput";
import type { NextPageWithLayout } from "./_app";
import { ReservationMap } from "@components/maps";
import { PlaceForm } from "@components/place/placeForm";
import { GeolocationPosition, PlaceProps } from "../common/interfaces";
import { MapContext } from "../common/context";
import SearchLayout from "@components/layouts/search";
import { GrMapLocation } from "react-icons/gr";
import { motion } from "framer-motion";
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
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full px-4 bg-zinc-900">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsShown(() => true)}
                className={`${
                  !isShown ? "flex" : "hidden"
                } absolute z-10 top-[-5rem] md:top-4 p-2 md:p-3 text-white left-24 md:left-8 cursor-pointer flex-col items-center`}
              >
                <GrMapLocation className="gr-map text-2xl md:text-[2rem]" />
                <span className="text-[0.75rem] md:text-sm">Show Map</span>
              </motion.span>
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
