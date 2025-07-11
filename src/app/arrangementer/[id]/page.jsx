import events from "@/backend/events.json"
import SingleCard from "@/components/arrangementer/singleview/SingleCard";

const ArrangementSingleView = ({params}) => {
const { id } = params;

  const event = events.find((event) => event.id.toString() === id);

    return ( <div>
        <SingleCard event={event}/>
    </div> );
}
 
export default ArrangementSingleView;