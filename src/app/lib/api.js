const rootUrl = "http://quilled-awesome-sail.glitch.me";

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
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    area: areaInput,
    amount: amountInput,
  });

  let response = await fetch(`${rootUrl}/reserve-spot`, {
    method: "PUT",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  console.log(data);

  return data;
}

export async function completeReservation(id) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    id: id,
  });

  let response = await fetch(`${rootUrl}/fullfill-reservation`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  return data;
}
