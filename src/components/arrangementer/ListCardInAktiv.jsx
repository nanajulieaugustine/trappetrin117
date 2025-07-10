"use client";
import events from "@/backend/events.json"
import Image from "next/image";
import { inActiveEvent } from "@/store/utils";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDarkBackground } from "@/hooks/useDarkBackground";

const ListCardInActive = () => {
      const containerRef = useDarkBackground(0.1);
    const InaktiveEvents = inActiveEvent(events);

    const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return ( 

    <ul className="flex justify-between gap-10">
      {InaktiveEvents.map((event) => (
        <li key={event.id}>
          <Link className="flex gap-5" href={`/arrangementer/${event.id}`}>
          <div className="max-w-100">
          <h2>{event.genre}</h2>
          <p className="pt-5">{event.beskrivelse}</p>
          </div>
               <Image
                src={`/arrangementer/${event.plakat}`}
                height={400}
                width={400}
                alt={event.titel}
                />
        </Link>
        </li>
      ))}
    </ul> );
}
 
export default ListCardInActive;