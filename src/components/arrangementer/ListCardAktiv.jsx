import events from "@/backend/events.json";
import Image from "next/image";
import Button from "../global/Button";
import Link from "next/link";
import { activeEvent } from "@/store/utils";
import ScrollFlow from "../animationer/ScrollFlow";

const ListCardAktiv = ({ activeCategory }) => {
  const aktiveEvents = activeEvent(events);

  const filteredEvents = aktiveEvents.filter((event) => {
    if (activeCategory === "vis alle") return true;
    return event.genre.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <ul className="grid gap-10">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <li key={event.id}>
                <ScrollFlow speed={-50}>
            <Link className="flex flex-col md:flex-row gap-5" href={`/arrangementer/${event.id}`}>
              <Image
                src={`/arrangementer/${event.plakat}`}
                height={400}
                width={400}
                alt={event.titel}
              />
              <div className="max-w-100">
                <h3 className="thin italic">{event.genre}</h3>
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
            Der er i øjeblikket ingen aktuelle arrangementer i denne kategori
          </h3>
        </section>
      )}
    </ul>
  );
};

export default ListCardAktiv;
