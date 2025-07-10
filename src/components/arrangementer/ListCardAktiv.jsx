import events from "@/backend/events.json"
import Image from "next/image";
import { activeEvent } from "@/store/utils";
import Button from "../global/Button";
import Link from "next/link";

const ListCardAktiv = () => {
    const aktiveEvents = activeEvent(events);

    return ( 
    <ul className="grid gap-10">
      {aktiveEvents.map((event) => (
        <li key={event.id}>
          <Link className="flex gap-5" href={`/arrangementer/${event.id}`}>
          <Image
          src={`/arrangementer/${event.plakat}`}
          height={400}
          width={400}
          alt={event.titel}
          />
          <div className="max-w-100">
          <h2 className="yellow">{event.titel}</h2>
          <h3 className="thin italic">{event.genre}</h3>
          <p className="pt-5">{event.beskrivelse}</p>
          <div className="pt-5">
            <Button>Læs mere</Button>
          </div>
          </div>
        </Link>
        </li>
      ))}
    </ul> );
}
 
export default ListCardAktiv;