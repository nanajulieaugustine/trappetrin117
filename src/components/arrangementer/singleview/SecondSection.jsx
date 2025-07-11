import Button from "@/components/global/Button";
import Link from "next/link";

const SecondSection = ({event}) => {
    const spilledatoer = event.spilledatoer;

    return ( 
        <div className="px-(--content-width-wide) grid gap-10">
            <h2 className="underline">spilledatoer</h2>
            <ul className="grid grid-cols-4 gap-5">
                {spilledatoer.map((spilledato)=>(
                <li key={`${spilledato.dato}-${spilledato.tidspunkt}`}>
                    <h2 className="thin black">{spilledato.dato}</h2>
                    <div className="flex gap-2">
                    <h3 className="thin italic">{spilledato.tidspunkt}</h3>
                    <span className="thin italic">|</span>
                    <h3 className="thin italic">{spilledato.pris}</h3>
                    </div>
                    <p className="thin capitalize max-w-50">{spilledato.adresse}</p>
                    {event.aktuel === true?(
                    <Link href={spilledato.billetLink} target="_blank">
                        <Button>Køb billet</Button>
                    </Link>
                    ):""}
                </li>
                ))}
            </ul>
        </div> 
    );
}
 
export default SecondSection;