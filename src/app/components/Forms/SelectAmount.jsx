"use client";
import React from "react";
// import SelectCenter from "./SelectCenter";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { reserveSpot } from "@/app/lib/api";

export default function SelectAmount(props) {
  // console.log(props);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => reserveSpot(data.area, data.amount);
  // NOT WORKING !!!!  check måske next.config.mjs

  return (
    <form className="flex flex-row gap-6 p-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <label>How many tickets would you like?</label>
        <input
          type="number"
          placeholder="1"
          {...register("amount", { required: true, minLength: 1 })}
        />
        {errors.amount && <p>Please select a ticket amount</p>}
      </div>
      <div className="w-1 h-auto bg-slate-500"></div>
      <div className="flex flex-col gap-2">
        <label>What area would you like to be in?</label>
        <select defaultValue="select" {...register("area", { required: true })}>
          <option disabled value="select">
            Select area
          </option>
          {props.areas.map((area) => (
            <option key={area.area} value={area.area}>
              {area.area} / {area.available} spots left
            </option>
          ))}
        </select>
        {errors.area && <p>Please select an area</p>}
      </div>
      <input type="submit" value="Next" />
    </form>
  );
}
