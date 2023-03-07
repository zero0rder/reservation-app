import React from "react";
import Image from "next/image";
import successImg from "../../../assets/checkmark.png";
import type { FormState } from "./placeForm";

interface SuccessProps {
  user: FormState;
  place: {
    name: string | undefined;
    addy: string | undefined;
    phone: string | undefined;
  };
}

export const Success: React.FC<SuccessProps> = ({ user, place }) => {
  return (
    <section className="m-auto text-white py-12 px-8 rounded-3xl max-w-[44rem] space-y-6 text-center bg-zinc-800">
      <div>
        <Image
          src={successImg}
          alt="success"
          width={150}
          height={150}
          className="m-auto"
          unoptimized
        />
      </div>
      <h1 className="text-2xl font-bold">Reservation Successful!</h1>
      <p className="px-8">
        Congrats {user.name}, your reservation for {user.guests} guests to{" "}
        <span className="underline">{place.name}</span> has been submitted for{" "}
        {user.date?.toLocaleDateString()} @ {user.time}.
      </p>
      <div>
        A confirmation text has been sent to:{" "}
        <span className="font-bold">{user.phone}</span>
      </div>
      <div className="flex flex-col items-center justify-center text-sm italic">
        <span>{place.name}</span>
        <span>{place.addy}</span>
        <span>{place.phone}</span>
      </div>
    </section>
  );
};
