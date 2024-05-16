import React from "react";
import { useForm } from "react-hook-form";

export default function SingleTicket() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="border w-30 min-h-30 p-3">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col ">
          <label>Name of ticket holder</label>
          <input
            type="text"
            className="border"
            {...register("name", { required: true, minLength: 1 })}
          />
        </div>
        <div>
          <p>Please select a ticket type</p>

          <div className="flex gap-2">
            <label className="flex flex-col w-auto h-24 text-center justify-around border border-slate-500 rounded-md p-2">
              Regular Ticket
              <input
                {...register("ticket", { required: true })}
                type="radio"
                value="regular"
              />
              <p>799 kr.</p>
            </label>

            <label className="flex flex-col w-28 h-24 text-center justify-around border border-slate-500 rounded-md">
              VIP Ticket
              <input
                {...register("ticket", { required: true })}
                type="radio"
                value="vip"
              />
              <p>1299 kr.</p>
            </label>
          </div>
        </div>
        <div>
          <p>
            Would you like to ensure Green Camping for an additional fee of 249
            kr.?
          </p>
          <label className="flex flex-col w-28 h-24 text-center justify-around border border-slate-500 rounded-md">
            Yes
            <input
              {...register("greenCamping", { required: true })}
              type="radio"
              value="yes"
            />
          </label>
        </div>
        <input type="submit" value="next" />
      </form>
    </div>
  );
}
