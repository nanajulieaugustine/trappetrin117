import Accordion, { AccordionItem } from "@/components/vaerk_hos_os/Accordion";

const VaerkHosOs = () => {
    const text = "Dit værk hos os";
    const dit = text.substring(0, 3);
    const rest = text.substring(4);
    const indexOfOs = rest.lastIndexOf("os");
    const beforeOs = rest.substring(0, indexOfOs);
    const afterOs = rest.substring(indexOfOs + 2);


    return ( <section className="px-(--content-width)">
        <h1 className="black italic">
            <span className="text-(--yellow)"> {dit} </span>
            {beforeOs}
            <span className="text-(--yellow)">os</span>
            {afterOs}
        </h1>
        <p>Trappetrin 117 er en forening for unge kunstnere, som har gennemført et talent kursus, af en hvilken som helst art. Disse unge, kan bruge foreningen, til at udfolde og udvikle deres kunst og dermed have en forening i ryggen når/hvis, de søger fonde og puljer. Unge uden et gennemført talent kursus, kan stadig deltage og opføre deres kunst gennem foreningen. Dette kræver dog at ideen bliver pitchet og godkendt af bestyrelsen, som består af Sarah Chabert Saugmann og Josefine Aviaja Christiansen. Hvis man ønsker at deltage i et projekt uden at man har gennemført et talentkursus, skal man indgå en aftale med Trappetrin 117's ledere.</p>
        <div className="py-10">
            <h2>husk dette når du søger</h2>
            <p>Værket skal først godtages af bestyrelsen. For at gøre processen lettere, har vi her samlet de informationer, du skal tage stilling til for at få dit værk med hos os. Disse krav stilles så vi bedst muligt kan hjælpe med markedsføring af dit værk på vores sociale medier, hjemmeside og annoncer.<br/>Vi glæder os til at se dit værk!</p>
        </div>
        <Accordion>
         <AccordionItem title="Hvem er værkets producenter?">
        <div className="flex justify-between items-center py-2">
          <p>Med producenter menes der, de mennesker der står i spidsen for kreationen af værket. Her ønskes navn, alder og bopæl.</p>
        </div>
      </AccordionItem>
        </Accordion>

         <Accordion>
         <AccordionItem title="Har værkets producenter gennemført kunstnerisk grundkursus?">
        <div className="flex justify-between items-center py-2">
          <p>Alle, der indgår i værket behøver IKKE at have gennemført et kunstnerisk grundkursus, dog skal værkets producenter
        (medmindre andet aftales med bestyrelsen).</p>
        </div>
      </AccordionItem>
        </Accordion>

        <Accordion>
         <AccordionItem title="Hvilken kategori hører værket under?">
        <div className="flex justify-between items-center py-2">
          <p>Værket kan høre under følgende kategorier: teater, dans,  billedkunst, litteratur, film, musik og kombinationer. Et   værk kan godt høre under flere kategorier på samme tid.</p>
        </div>
      </AccordionItem>
        </Accordion>

        <Accordion>
         <AccordionItem title="Hvor skal værket vises? Skal det på tour?">
        <div className="flex justify-between items-center py-2">
          <p>Trappetrin 117 ligger til i Holbæk, og har derfor lettest
            ved at hjælpe med at fremme værket i Holbæk Kommune. Dog tager vi udgangspunkt i hele landet, og ser også gerne at  værket, kommer på tour rundt omkring. Aftaler med forskellige spillesteder, gallerier, mm. behøves IKKE at være indgået inden ansøgningen, men tag venligt højde for dette når ideen bliver pitchet.</p>
        </div>
      </AccordionItem>
        </Accordion>

                <Accordion>
         <AccordionItem title="Hvad ønsker I af hjælp fra Trappetrin 117?">
        <div className="flex justify-between items-center py-2">
          <p>Trappetrin 117 tilbyder en række af hjælp til at fremme jeres værk. Herunder instruktion, professionel sparring, networking, hjælp til at søge fonde og puljer, og  annoncering. Man kan sagtens bruge foreningen til at hjælpe med fx. at søge puljer uden at ønske sparring.</p>
        </div>
      </AccordionItem>
        </Accordion>

        <h2 className="pt-10 pb-5">INDHOLD TIL HJEMMESIDEN</h2>
        <Accordion>
         <AccordionItem title="Grafik">
        <div className="flex justify-between items-center py-2">
          <p>Vi ønsker at modtage to plakater for forestillingen. Vi
            modtager kun JPG, WEBP og PNG. Vi ønsker en plakat i højformat  (390 x 560). Her skal der indgå navn på værket, spilleperiode og
            spillesteder/udstillingsperiode og udstillingssted samt kreditering. sponsorater/foreninger/producenter. Er nogle af disse overordnede informationer ikke på plads, udelades dette, men underret foreningen om det, og kontakt os med det samme, når det er på plads. Hermed indgår vi en aftale om vi selv opdaterer dette på materialet, eller om værkets producenter ønsker at sende en ny version.</p>
        </div>
      </AccordionItem>
        </Accordion>

    <Accordion>
         <AccordionItem title="Billeder">
        <div className="flex justify-between items-center py-2">
          <p>Vi ønsker at modtage minimum tre billeder af opsætningen/værket. Billeder kan også være procesdokumentationer. Vi modtager kun JPG, WEBP og PNG. Billeder og lign. materiale behøver ikke at være på plads ved indsendelse af pitch, men værkets producenter skal underette foreningen med det samme, så disse kan opdateres på hjemmeside og SoMe.</p>
        </div>
      </AccordionItem>
        </Accordion>

         <Accordion>
         <AccordionItem title="Videoer">
        <div className="flex justify-between items-center py-2">
          <p>Videoer er ikke obligatorisk, men klart en fordel hvis
            værket skal annonceres. Vi modtager kun MP4-format. Vi vil foretrækkelsesvis modtage videoer i både bredformat og højdformat. Da seere ofte skipper videoer efter 8 sek. må videoen ikke overgå 1 minut. Det er en god ide at lave to eksterne versioner: en på 30 sek. og en på 15 sek. Det er et krav at vidoen indeholder undertekster hvis der er tale med. Husk spillesteder/udstillingsteder og datoer. Er spillesteder/udstillingssteder og datoer ikke bestemt før indgåelsen med Trappetrin 117, behøves dette ikke i videoen til at starte med, men skal opdateres løbende. HUSK at kontakte os når datoer og lign. er fundet! Hermed indgår vi en aftale om vi selv opdaterer dette på materialet, eller om værkets producenter ønsker at sende en ny version.</p>
        </div>
      </AccordionItem>
        </Accordion>

         <Accordion>
         <AccordionItem title="Copyright">
        <div className="flex justify-between items-center py-2">
          <p>For at undgå copyright, er det et krav at alle billeder,
            videoer, musik/lyd og grafik er egenproduceret.</p>
        </div>
      </AccordionItem>
        </Accordion>

                 <Accordion>
         <AccordionItem title="Trailer">
        <div className="flex justify-between items-center py-2">
          <p>Er værket en opsætning, ønskes der foretrækkelsesvis en trailer. Denne skal være maximum 1 minut lang, og vi modtager kun MP4-format. Traileren skal gerne indeholde undertekster.</p>
        </div>
      </AccordionItem>
        </Accordion>

                         <Accordion>
         <AccordionItem title="Hvis du ikke har mulighed for selv at producere indholdet">
        <div className="flex justify-between items-center py-2">
          <p>Er der tale om grafisk materiale, billeder og video, kan I efter aftale indgå et samarbejde med foreningen, der kan  hjælpe med at networke med nogle talentfulde producenter i de forskellige områder, der ønskes hjælp til.</p>
        </div>
      </AccordionItem>
        </Accordion>

    </section> );
}
 
export default VaerkHosOs;