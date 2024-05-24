import {
  addFavorited,
  getAllfavorited,
  getBandsBySlug,
  getFlatSchedule,
} from "@/app/lib/api";
import Image from "next/image";
import FavoritedTab from "../components/FavoriteTab";

async function bandPage({ params }) {
  const { slug } = params;
  const data = await getBandsBySlug(slug);

  const scheduleData = await getFlatSchedule();

  const favoriteData = await getAllfavorited();

  // console.log(favoriteData);

  const filteredData = scheduleData.filter((item) => item.act === data.name);

  function replaceDayAbbreviations(dayAbbreviation) {
    const dayArr = {
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday",
      sun: "Sunday",
    };

    return dayArr[dayAbbreviation] || dayAbbreviation;
  }

  // console.log(filteredData);
  // console.log(scheduleData);
  // console.log(data.members);

  return (
    <main className="mx-5 md:mx-52 my-5">
      <article>
        <FavoritedTab
          band={filteredData}
          name={favoriteData}
          schedule={scheduleData}
        />
      </article>
      <section className="flex flex-col gap-10 justify-center items-center">
        <article className="flex flex-col gap-52 md:gap-10 sm:flex sm:flex-row items-center">
          <div>
            {data.logo.startsWith("http") ? ( // Check if image URL is an external link
              <Image
                src={data.logo}
                width={500}
                height={500}
                alt="Logo For the Band"
                priority={true}
              />
            ) : (
              <Image
                src={`/logos/${data.logo}`}
                width={500}
                height={500}
                alt="Logo For the Band"
                priority={true}
              /> // Image stored in public folder
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h1>{data.name}</h1>

            <article className="flex gap-2">
              <h3>Genre:</h3>
              <p className="my-auto">{data.genre}</p>
            </article>

            <div className="grid grid-cols-2 gap-4">
              {data.members.map((member, index) => (
                <p key={index}>{member}</p>
              ))}
            </div>
          </div>
        </article>

        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <article>
              {filteredData.map((item, index) => (
                <div key={index}>
                  {item.cancelled ? (
                    <div className="flex gap-5">
                      <h2>CANCELLED!!</h2>
                      <p className="line-through">{item.stage}</p>
                      <h3>Time: </h3>
                      <p className="line-through">
                        {replaceDayAbbreviations(item.day)}
                      </p>
                      <p className="line-through">
                        {item.start} - {item.end}
                      </p>
                    </div>
                  ) : (
                    <div className="flex md:flex-col flex-row gap-5 justify-center items-center">
                      <div>
                        <h3>Stage</h3>
                        <p>{item.stage}</p>
                      </div>

                      <div>
                        <h3>on </h3>
                        <p>{replaceDayAbbreviations(item.day)}</p>
                        <p>
                          from {item.start} to {item.end}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </article>
          </div>

          <article className=" col-span-2 flex flex-col items-center">
            <h3>Bio: </h3>
            <p>{data.bio}</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default bandPage;
