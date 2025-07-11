import LineAnimationInView from "@/components/animationer/LineAnimationINView";

const Priser = ({event}) => {
    const priser = event.priser;

    return ( 
            <div className="gap-10">
            <ul className="flex flex-col justify-center items-center">
                {priser.map((pris)=>(
                <li key={`${pris.festival}-${pris.pris}`}>
                    <span className="uppercase">Vinder af</span>
                    <h2 className="black">{`${pris.festival}'s`}</h2>
                    <h2 className="black thin">{pris.pris}</h2>
                    <h3 className="thin italic">{`anno ${pris.anno}`}</h3>
                    <LineAnimationInView/>
                </li>
                ))}
            </ul>
        </div> 
        );
}
 
export default Priser;