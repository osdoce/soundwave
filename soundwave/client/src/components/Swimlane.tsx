import TicketCard from "./TripCard";
import { TripData } from "../interfaces/TripData";
import { ApiMessage } from "../interfaces/ApiMessage";

interface SwimlaneProps {
  title: string;
  trips: TripData[];
  deleteTrip: (tripId: number) => Promise<ApiMessage>;
}

const Swimlane = ({ title, trips, deleteTrip }: SwimlaneProps) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Todo":
        return "swim-lane todo";
      case "In Progress":
        return "swim-lane inprogress";
      case "Done":
        return "swim-lane done";
      default:
        return "swim-lane";
    }
  };

  return (
    <div className={`swimlane ${getStatusClass(title)}`}>
      <h2>{title}</h2>
      {trips.map((trip) => (
        <TicketCard key={trip.id} trip={trip} deleteTrip={deleteTrip} />
      ))}
    </div>
  );
};

export default Swimlane;
