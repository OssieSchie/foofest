import React from "react";
import { useForm } from "react-hook-form";

export default function SingleTicket({
  fillTicket,
  isLast,
  ticketNr,
  ticketAmount,
  pushToParentTicket,
  setTotalGreen,
  totalGreen,
  setTotalVip,
  totalVip,
  showTicket,
  setShowTicket,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let singleTicket = {
    name: "",
    isVip: null,
    isGreen: null,
  };

  const onSubmit = (data) => {
    console.log(data);
    singleTicket.name = data.name;
    singleTicket.isVip = data.ticket;
    singleTicket.isGreen = data.greenCamping;
    // console.log(singleTicket)

    fillTicket(singleTicket);
    console.log("donezo");

    setShowTicket(showTicket + 1);

    if (data.ticket === "true") {
      setTotalVip(totalVip + 1);
      console.log(`set total vip to ${totalVip}`);
    }

    if (data.greenCamping === "true") {
      setTotalGreen(totalGreen + 1);
      console.log(`set total green to ${totalGreen}`);
    }

    if (isLast) {
      pushToParentTicket();
    }
  };

  return (
    <div className="border w-96 min-w-96 min-h-30 p-3 mx-auto">
      <h3>
        Ticket {ticketNr + 1} of {ticketAmount}
      </h3>
      <form
        className="flex flex-col gap-6 p-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col ">
          <label className="text-balance">Name of ticket holder</label>
          <input
            type="text"
            className="border text-dark-grey-00"
            {...register("name", { required: true, minLength: 1 })}
          />
        </div>
        <div className="text-center border-t">
          <p className="text-balance">Please select a ticket type</p>

          <div className="flex gap-2 justify-center">
            <label className="flex flex-col w-auto h-24 text-center justify-around border border-white-off-00 rounded-md p-2">
              Regular Ticket
              <input
                {...register("ticket", { required: true })}
                type="radio"
                value={false}
              />
              <p>799 kr.</p>
            </label>

            <label className="flex flex-col w-28 h-24 text-center justify-around border border-white-off-00 rounded-md">
              VIP Ticket
              <input
                {...register("ticket", { required: true })}
                type="radio"
                value={true}
              />
              <p>1299 kr.</p>
            </label>
          </div>
        </div>
        <div className="text-center border-t border-b pb-2 flex flex-col gap-2">
          <p className="text-balance">
            Would you like to ensure Green Camping for an additional fee of 249
            kr.?
          </p>
          <div className="flex justify-center gap-2">
            <label className="flex flex-col w-28 h-24 text-center justify-around border border-white-off-00 rounded-md">
              Yes
              <input
                {...register("greenCamping", { required: true })}
                type="radio"
                value={true}
              />
            </label>
            <label className="flex flex-col w-28 h-24 text-center justify-around border border-white-off-00 rounded-md">
              No
              <input
                {...register("greenCamping", { required: true })}
                type="radio"
                value={false}
              />
            </label>
          </div>
        </div>
        {!isLast && (
          <input
            type="submit"
            value="next ticket"
            className="border border-white-off-00 hover:cursor-pointer h-20 w-36 mx-auto"
          />
        )}
        {isLast && (
          <input
            type="submit"
            value="Next"
            className="border border-white-off-00 hover:cursor-pointer h-20 w-36 mx-auto"
          />
        )}
      </form>
    </div>
  );
}
