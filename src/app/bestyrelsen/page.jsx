import BestyrelseCard from "@/components/bestyrelse/BestyrelseCard";
import RepreasentanterCard from "@/components/bestyrelse/RepreasentanterCard";

export const metadata = {
  title: "Bestyrelsen | Trappetrin 177",
  description: "Ansatte og repræsentanter under Trappetrin 177. Bestyrelsen består af de to ledere Sarah Chabert Saugmann og Josefone Aviaja Christiansen, der begge har stiftet foreningen. Yderligere består foreningen af en række repræsentanter indenfor de forskellige kunstarter. Det er dem, der vejleder og rådgiver når et værk indsendes.",
};

const Bestyrelsen = () => {
    return ( <div>
        <BestyrelseCard/>
        <section className="ml-5">
            <h1 className="black">Repræsentanter</h1>
            <p className="max-w-80">Foreningen består af en række repræsentanter fra de forskellige kunstarter.</p>
            <p className="max-w-80">Det er dem, der rådgiver dig indenfor deres område når du indsender os dit værk!</p>
        </section>
        <RepreasentanterCard/>
    </div> );
}
 
export default Bestyrelsen;