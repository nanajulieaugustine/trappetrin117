import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import Priser from "./Priser";

const SingleCard = ({event}) => {
    return ( 
    <div className="grid gap-15 mb-25">
        <FirstSection event={event}/>
        <SecondSection event={event}/>
         {event.priser ? (
        <Priser event={event}/>
        ):""}
        <ThirdSection event={event}/>
        <FourthSection event={event}/>
        {event.trailer ? (
        <FifthSection event={event}/>
        ):""}
    </div> );
}
 
export default SingleCard;