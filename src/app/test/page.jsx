export default async function Test() {
  const data = await fetch(
    "http://quilled-awesome-sail.glitch.me//schedule"
  ).then((r) => r.json());
  const nextSchedule = [];
  for (let stage in data) {
    for (let day in data[stage]) {
      nextSchedule.push(
        ...data[stage][day].map((act) => {
          return {
            ...act,
            day,
            stage,
          };
        })
      );
    }
  }
  console.log(nextSchedule);
  return <h1>Hej</h1>;
}
/* const oerson = {
    name:"Jonas"
}
oerson["name"] */
