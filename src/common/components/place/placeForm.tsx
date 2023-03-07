import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Success } from "./success";
import { UseValidation } from "../../hooks/useValidation";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@components/shared/button";
import Loader from "../shared/loader";

export interface PlaceFormProps {
  place: {
    name: string | undefined;
    addy: string | undefined;
    phone: string | undefined;
  };
  showForm: boolean;
}

export type FormState = {
  name: string;
  guests: string;
  phone: string;
  date: Date | null;
  time: string;
};

const styles = {
  button: `px-11 py-3 font-medium text-white bg-sky-500 rounded-xl border hover:bg-sky-400`,
};

export const PlaceForm: React.FC<PlaceFormProps> = ({ place, showForm }) => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    guests: "1",
    phone: "",
    date: new Date(),
    time: "5:00 PM",
  });
  const [isReserved, setIsReserved] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { validate, validationProps } = UseValidation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    validate(formState.name, formState.phone) === "valid"
      ? MockHTTP(true).then((res) => setIsReserved(res))
      : setLoading(false);
  };

  //simulate remote call
  function MockHTTP(status: boolean) {
    return new Promise<boolean>((res) => {
      setTimeout(() => {
        setLoading((prev) => !prev);
        res(status);
      }, 2500);
    });
  }

  if (loading) return <Loader />;

  return isReserved ? (
    <Success user={formState} place={place} />
  ) : (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${
        !showForm ? "flex" : "hidden"
      } flex-col w-3/4 max-w-[36rem] gap-3 px-4 py-14 space-y-4 rounded-3xl bg-zinc-800 text-white`}
    >
      <h1 className="text-4xl font-bold text-center">Reservation</h1>
      <label className="w-3/4 m-auto" htmlFor="name">
        <span className="block pb-1 font-medium">Name</span>
        <input
          name="name"
          id="name"
          className={`w-full p-3 text-sm rounded-xl bg-zinc-900 focus:outline-none`}
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
      </label>
      <div className="flex items-center justify-center w-3/4 gap-2 m-auto">
        <label className="w-[15%] " htmlFor="guests">
          <span className="block pb-1 font-medium">Guests</span>
          <select
            name="guests"
            id="guests"
            className="w-full p-3 rounded-xl bg-zinc-900 focus:outline-none"
            value={formState.guests}
            onChange={(e) =>
              setFormState({ ...formState, guests: e.target.value })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>6+</option>
          </select>
        </label>
        <label className="w-[85%] " htmlFor="phone">
          <span className="block pb-1 font-medium">Phone</span>
          <input
            name="phone"
            type="tel"
            id="phone"
            value={formState.phone}
            className={`w-full p-3 text-sm rounded-xl bg-zinc-900 focus:outline-none`}
            onChange={(e) =>
              setFormState({ ...formState, phone: e.target.value })
            }
          />
        </label>
      </div>
      <div className="flex items-center justify-center w-3/4 gap-2 m-auto">
        <label className="w-1/2" htmlFor="date">
          <span className="block pb-1 font-medium">Date</span>
          <DatePicker
            name="date"
            id="date"
            //todo: -> onSelect={} close picker
            selected={formState.date}
            onChange={(d) => setFormState({ ...formState, date: d })}
            className="w-full p-3 text-sm rounded-xl bg-zinc-900 focus:outline-none"
            autoComplete="off"
          />
        </label>
        <label className="w-1/2" htmlFor="time">
          <span className="block pb-1 font-medium">Time</span>
          <select
            name="time"
            id="time"
            className="w-full p-3 rounded-xl bg-zinc-900 focus:outline-none"
            value={formState.time}
            onChange={(e) =>
              setFormState({ ...formState, time: e.target.value })
            }
          >
            <option>5:00 PM</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
            <option>8:00 PM</option>
            <option>9:00 PM</option>
            <option>10:00 PM</option>
          </select>
        </label>
      </div>
      <div className="text-center">
        <Button styles={styles.button} type="submit">
          {loading ? "Reserving..." : "Submit"}
        </Button>
      </div>
      {/* <div className="p-4 min-h-[5rem]">
        {validationProps.name === "invalid" && (
          <div className="text-red-600">please enter name</div>
        )}
        {validationProps.phone === "invalid" && (
          <div className="text-red-600">please enter valid phone number</div>
        )}
      </div> */}
    </form>
  );
};
