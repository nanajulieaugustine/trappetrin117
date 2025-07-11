import events from "@/backend/events.json";
import Image from "next/image";
import Button from "../global/Button";
import Link from "next/link";
import { inActiveEvent } from "@/store/utils";
import ScrollFlow from "../animationer/ScrollFlow";

const ListCardAktiv = ({ activeCategory }) => {
  const inAktiveEvents = inActiveEvent(events);

  const filteredEvents = inAktiveEvents.filter((event) => {
    if (activeCategory === "vis alle") return true;
    return event.season.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <ul className="grid gap-10">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <li key={event.id}>
            <ScrollFlow speed={-50}>
            <Link className="flex gap-5" href={`/arrangementer/${event.id}`}>
              <Image
                src={`/arrangementer/${event.plakat}`}
                height={400}
                width={400}
                alt={event.titel}
              />
              <div className="max-w-100">
                <div className="flex gap-2">
                <h3 className="thin italic">{event.genre}</h3>
                <span className="thin italic">|</span>
                <h3 className="thin italic">{event.season}</h3>
                </div>
                <h2 className="black italic">{event.titel}</h2>
                <p className="pt-5">{event.beskrivelse}</p>
                <div className="pt-5">
                  <Button>Læs mere</Button>
                </div>
              </div>
            </Link>
            </ScrollFlow>
          </li>
        ))
      ) : (
        <section className="min-h-screen">
          <h3 className="thin italic flex items-center justify-center">
            Der er ingen værker i denne sæson i vores arkiv
          </h3>
        </section>
      )}
    </ul>
  );
};

export default ListCardAktiv;
