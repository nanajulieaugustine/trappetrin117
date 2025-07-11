import BestyrelseCard from "@/components/bestyrelse/BestyrelseCard";
import RepreasentanterCard from "@/components/bestyrelse/RepreasentanterCard";
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