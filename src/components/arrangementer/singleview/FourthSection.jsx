const FourthSection = ({event}) => {
    const medvirkende = event.medvirkende;

    return ( 
            <div className="px-(--content-width-wide) grid gap-10">
            <h2 className="underline">Medvirkende</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {medvirkende.map((medvirkende)=>(
                <li key={`${medvirkende.navn}-${medvirkende.stilling}`}>
                    <h3 className="bold black">{medvirkende.navn}</h3>
                    <h3 className="thin italic">{medvirkende.stilling}</h3>
                </li>
                ))}
            </ul>
        </div> 
        );
}
 
export default FourthSection;