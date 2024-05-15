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

  let data = await response.text();
  console.log(data);

  return data;
}

// export async function reserveSpot(areaInput, amountInput) {
//   const headersList = {
//     Accept: "*/*",
//     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//     "Content-Type": "application/json",
//   };

//   const bodyContent = JSON.stringify({
//     area: areaInput,
//     amount: amountInput,
//   });

//   try {
//     const response = await fetch(`${rootUrl}/reserve-spot`, {
//       method: "PUT",
//       body: bodyContent,
//       headers: headersList,
//     });

//     if (!response.ok) {
//       // Handle HTTP errors
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.text();
//     console.log(data);

//     return data;
//   } catch (error) {
//     // Handle fetch errors
//     console.error("Error during PUT request:", error);
//     throw error;
//   }
// }

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
