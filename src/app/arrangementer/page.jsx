"use client";
import { useState } from "react";
import ListCardAktiv from "@/components/arrangementer/ListCardAktiv";
import Filtrering from "@/components/arrangementer/Filtrering";
import LineAnimationInView from "@/components/animationer/LineAnimationINView";
import Button from "@/components/global/Button";
import Link from "next/link";
import { activeEvent } from "@/store/utils";
import events from "@/backend/events.json"

const Arrangementer = () => {
  const [activeCategory, setActiveCategory] = useState("vis alle");

  const aktiveEvents = activeEvent(events);

    const filteredEvents = aktiveEvents.filter((event) => {
    if (activeCategory === "vis alle") return true;
    return event.genre.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section className="px-(--content-width-wide) flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        <div>
        <h2 className="black">arrangementer</h2>
        <h3 className="thin italic max-w-80">Forneden ses aktuelle arrangementer kurateret under trappetrin 117</h3>
        </div>
        <div>
        <h3 className="thin">Interesseret i vores tidligere værker?</h3>
        <Link href="/vaerkarkiv">
        <Button>Gå til værkarkiv</Button>
        </Link>
        </div>
        </div>
        <div className="grid gap-5">
      <Filtrering 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <LineAnimationInView/>
        </div>
    <span className="thin italic">{`0${filteredEvents.length} / 0${activeEvent.length} aktuelle værker`}</span>
      <ListCardAktiv activeCategory={activeCategory} />
    </section>
  );
};

export default Arrangementer;
