"use client";
import React from "react";
// import SelectCenter from "./SelectCenter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { reserveSpot } from "@/app/lib/api";

export default function SelectAmount(props) {
  const { ticketAmount, setTicketAmount, ...rest } = props;

  // const [userAmount, setUserAmount] = useState(1);

  // console.log(props.areas);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await reserveSpot(data.area, data.amount);
    console.log(response.id);

    // hvordan tager jeg fat i det returnerede object fra reserveSpot?
    console.log(
      "area: ",
      data.area,
      "amount: ",
      data.amount,
      "tents: ",
      data.tents
    );
  };

  function checkTicketAmount(evt) {
    if (evt < 1) {
      setTicketAmount(1);
    } else {
      setTicketAmount(evt);
    }
  }

  return (
    <form
      className="grid grid-cols-1 grid-rows-[min-content_1fr] gap-10 p-5 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row gap-6 h-16 justify-center">
        <div className="flex flex-col gap-2">
          <label>How many tickets would you like?</label>
          <input
            type="number"
            placeholder="1"
            {...register("amount", { required: true, minLength: 1 })}
            onChange={(e) => checkTicketAmount(e.target.value)}
          />
          {errors.amount && <p>Please select a ticket amount 0</p>}
        </div>

        {/* ------------------------------------------------------------- */}

        <div className="w-px h-auto bg-slate-500"></div>

        {/* ------------------------------------------------------------- */}

        <div className="flex flex-col gap-2">
          <label>What area would you like to be in?</label>
          <select
            defaultValue="select"
            {...register("area", { required: true })}
          >
            {rest.areas.map((area) => (
              // <option
              //   key={area.area}
              //   value={area.area}
              //   disabled={area.available === 0}
              //   {...register("area")}
              // >
              <option
                key={area.area}
                value={area.area}
                disabled={area.available === 0}
              >
                {area.area} / {area.available} spots left
              </option>
            ))}
            <option disabled value="select">
              Select area
            </option>
          </select>
          {errors.area && <p>Please select an area</p>}
        </div>
      </div>

      <div className="h-px w-1/2 bg-slate-500 mx-auto" />

      {/* ------------------------------------------------------------- */}

      <div className="flex flex-col gap-6 text-center">
        <p>Would you like the staff to raise tents for you?</p>
        <div className="grid grid-cols-2 grid-rows-2 w-60 h-52 mx-auto">
          <label className="flex flex-col w-28 h-24 text-center justify-around border border-slate-500 rounded-md">
            No thanks
            <input
              {...register("tents", { required: true })}
              type="radio"
              value="0"
            />
            <p>0 kr.</p>
          </label>

          <label className="flex flex-col w-28 h-24 text-center justify-around border border-slate-500 rounded-md">
            2 person tent
            <input
              {...register("tents", { required: true })}
              type="radio"
              value="2"
            />
            <p>299 kr.</p>
          </label>

          <label className="flex flex-col w-28 h-24 text-center justify-around border border-slate-500 rounded-md">
            3 person tent
            <input
              {...register("tents", { required: true })}
              type="radio"
              value="3"
            />
            <p>399 kr.</p>
          </label>

          <label className="flex flex-col w-28 h-24 text-center justify-around border border-slate-500 rounded-md">
            Tents for {ticketAmount}
            <input
              {...register("tents", { required: true })}
              type="radio"
              value={ticketAmount}
            />
            <p>{ticketAmount * 100 + 99} kr.</p>
          </label>
        </div>
        {errors.tents && <p>Please select an amount</p>}
      </div>
      <div className="h-px w-1/2 bg-slate-500 mx-auto" />
      <input
        type="submit"
        value="Next"
        className="border border-slate-500 hover:cursor-pointer h-20 w-36 mx-auto"
      />
    </form>
  );
}
