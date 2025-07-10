import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";

const SingleCard = ({event}) => {
    return ( 
    <div className="grid gap-15 mb-25">
        <FirstSection event={event}/>
        <SecondSection event={event}/>
        <ThirdSection event={event}/>
        <FourthSection event={event}/>
    </div> );
}
 
export default SingleCard;