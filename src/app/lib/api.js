const rootUrl = "http://localhost:8080";

export async function getAllBands() {
  const res = await fetch(`${rootUrl}/bands`);
  return await res.json();
}

export async function getBandsBySlug(slug) {
  const res = await fetch(`${rootUrl}/bands/${slug}`);
  return await res.json();
}

export async function getAllSchedule() {
  const res = await fetch(`${rootUrl}/schedule`);
  return await res.json();
}
export async function getAllEvents() {
  const res = await fetch(`${rootUrl}/events`);
  return await res.json();
}
export async function getAllAvailableSpots() {
  const res = await fetch(`${rootUrl}/available-spots`);
  return await res.json();
}

export async function reserveSpot(areaInput, amountInput) {
  const res = await fetch("http://localhost:8080/reserve-spot", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      area: areaInput,
      amount: amountInput,
    }),
  });

  let data = await res.json();
  return data;
}

export async function completeReservation(ticketID) {
  let bodyContent = JSON.stringify({
    id: ticketID,
  });

  let headersList = {
    "Content-Type": "application/json",
  };

  let res = await fetch(`${rootUrl}/fullfill-reservation`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await res.json();
  return data;
}

export async function postParentTicket(ticket) {
  let headersList = {
    Accept: "application/json",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrenBramR0bWx2YWRsZ3NucGdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1ODY3OTAsImV4cCI6MjAzMTE2Mjc5MH0.4efvismuf-ayRWpkWH1Om9hbwcUMephpIAwFv_pSuzY",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({ ticket: { ticket } });

  let response = await fetch(
    "https://qkzpkjdtmlvadlgsnpgh.supabase.co/rest/v1/tickets2",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.text();
  console.log(data);
}
