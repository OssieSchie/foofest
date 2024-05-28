import React from "react";

export default function Summary({
  ticketID,
  ticketAmount,
  tents,
  totalGreen,
  totalVip,
}) {
  let totalRegular = ticketAmount - totalVip;
  return (
    <div className="h-14 md:h-[570px] sticky top-16 right-0">
      <div className="hidden md:flex md:flex-col">
        <h3 className="bg-white-off-00 text-dark-grey-00 px-4 py-2 inline">
          Total summary:
        </h3>
        <ul className="mt-4 ml-10 flex flex-col gap-3">
          <li>
            <p>Booking Fee:</p>
            <p>99 kr.</p>
          </li>
          {tents > 0 && (
            <li>
              <p>Tents:</p>
              <p>{tents * 100 + 99} kr.</p>
            </li>
          )}
          {totalGreen > 0 && (
            <li>
              <p>
                {totalGreen} green camping initiative{" "}
                {totalGreen == 1 ? "ticket" : "tickets"}:
              </p>
              <p>{totalGreen * 249} kr.</p>
            </li>
          )}
          {totalRegular > 0 && (
            <li>
              <p>
                {totalRegular} Regular{" "}
                {totalRegular == 1 ? "ticket" : "tickets"}:
              </p>
              <p>{totalRegular * 799} kr.</p>
            </li>
          )}
          {totalVip > 0 && (
            <li>
              <p>
                {totalVip} VIP {totalVip == 1 ? "ticket" : "tickets"}
              </p>
              <p>{totalVip * 1299} kr.</p>
            </li>
          )}
        </ul>
      </div>
      <div className="mt-4 flex md:flex-col fixed sm:sticky md:top-16 right-0 z-50 bg-dark-grey-00 md:bg-transparent">
        <h3 className="bg-white-off-00 text-dark-grey-00 px-4 py-2 inline">
          Total cost:
        </h3>
        <h3 className="px-4 py-2 inline">
          {99 +
            (tents * 100 + 99) +
            totalGreen * 249 +
            totalRegular * 799 +
            totalVip * 1299}{" "}
          kr.
        </h3>
      </div>
    </div>
  );
}
