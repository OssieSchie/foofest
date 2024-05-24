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
        <article className="flex flex-col gap-10 sm:flex sm:flex-row items-center">
          <div className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
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

          <div className="flex flex-col gap-4">
            <h1>{data.name}</h1>

            <article className="flex gap-2">
              <h3 className="bg-white-off-00 text-dark-grey-00 p-2 inline">
                Genre
              </h3>
              <h3 className="my-auto">{data.genre}</h3>
            </article>

            <div className="grid grid-cols-2 gap-4">
              {data.members.map((member, index) => (
                <p key={index}>{member}</p>
              ))}
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          <div className="flex flex-col justify-around">
            <article>
              {filteredData.map((item, index) => (
                <div key={index}>
                  {item.cancelled ? (
                    <div className="flex md:flex-col flex-row gap-5 justify-center items-center">
                      <div className="text-center">
                        <h3 className="bg-white-off-00 text-dark-grey-00 p-2 inline">
                          CANCELLED
                        </h3>
                        <h3 className="line-through">{item.stage}</h3>
                      </div>

                      <div className="text-center">
                        <p>{replaceDayAbbreviations(item.day)}</p>
                        <p>
                          from {item.start} to {item.end}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex md:flex-col flex-row gap-5 justify-center items-center">
                      <div className="text-center">
                        <h3 className="bg-white-off-00 text-dark-grey-00 p-2 inline">
                          Stage
                        </h3>
                        <h3>{item.stage}</h3>
                      </div>

                      <div className="text-center">
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
