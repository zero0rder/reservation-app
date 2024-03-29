import React, { useCallback, useEffect, useRef } from "react";
import { AutoInputProps } from "../../interfaces";
import { motion } from "framer-motion";
import { inputVariants } from "../../../utils/motion";

export const AutoInput: React.FC<AutoInputProps> = ({
  setLocation,
  setPlace,
}) => {
  const autocompleteRef = useRef<google.maps.places.Autocomplete>();
  const onPlaceChanged = useCallback(() => {
    const details = autocompleteRef.current?.getPlace() as any;
    if (details?.geometry) {
      setPlace(() => details);
      setLocation({
        lat: details.geometry.location.lat(),
        lng: details.geometry.location.lng(),
      });
    }
  }, [setPlace, setLocation, autocompleteRef]);

  const initAutocomplete = useCallback(() => {
    autocompleteRef.current = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete") as HTMLInputElement,
      {
        types: ["restaurant", "food"],
        fields: [
          "name",
          "place_id",
          "geometry",
          "rating",
          "formatted_phone_number",
          "opening_hours",
          "user_ratings_total",
          "formatted_address",
        ],
        componentRestrictions: { country: ["US"] },
      }
    );

    autocompleteRef.current.addListener("place_changed", onPlaceChanged);
  }, [onPlaceChanged]);

  useEffect(() => initAutocomplete(), [initAutocomplete]);

  return (
    <motion.div
      variants={inputVariants}
      initial="hidden"
      whileInView="show"
      className="z-10 w-72"
    >
      <input
        id="autocomplete"
        className={`top-56 absolute border-2 p-4 w-[20rem] rounded-md border-red-700 hover:border-emerald-500 focus:border-emerald-500 hover:shadow-emerald-500 focus:shadow-emerald-500 focus:outline-none text-sm shadow-xl shadow-red-700`}
      />
    </motion.div>
  );
};
