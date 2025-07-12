"use client";
import { useState } from "react";
import ListCardInAktiv from "@/components/arrangementer/ListCardInAktiv";
import SeasonFiltrering from "@/components/arrangementer/SeasonFiltrering";
import LineAnimationInView from "@/components/animationer/LineAnimationINView";
import { inActiveEvent } from "@/store/utils";
import events from "@/backend/events.json"
import Link from "next/link";
import Button from "@/components/global/Button";

const VaerkArkiv = () => {
    const [activeCategory, setActiveCategory] = useState("vis alle");

    const inAktiveEvents = inActiveEvent(events);
    
        const filteredEvents = inAktiveEvents.filter((event) => {
        if (activeCategory === "vis alle") return true;
        return event.season.toLowerCase() === activeCategory.toLowerCase();
      });

    return ( 
    <section className="px-(--content-width-wide) flex flex-col gap-10">
            <div className="flex justify-between gap-20">
        <div>
        <h2 className="black">værkarkiv</h2>
        <h3 className="thin italic max-w-80">Forneden ses tidligere arrangementer under trappetrin 117's værkarkiv</h3>
        </div>
        <div>
        <h3 className="thin">Interesseret i vores aktuelle arrangementer?</h3>
        <Link href="/arrangementer">
        <Button>Gå til arrangementer</Button>
        </Link>
        </div>
        </div>
          <div className="grid gap-5">
      <SeasonFiltrering 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <LineAnimationInView/>
        </div>
        <span className="thin italic">{`0${filteredEvents.length} / 0${inAktiveEvents.length} værker i arkivet`}</span>
        <ListCardInAktiv activeCategory={activeCategory}/>
    </section> );
}
 
export default VaerkArkiv;