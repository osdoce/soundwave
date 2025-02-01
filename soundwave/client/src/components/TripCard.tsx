import { Link } from "react-router-dom";

import { TripData } from "../interfaces/TripData";
import { ApiMessage } from "../interfaces/ApiMessage";
import { MouseEventHandler } from "react";

interface TripCardProps {
  trip: TripData;
  deleteTrip: (tripId: number) => Promise<ApiMessage>;
}

const TripCard = ({ trip, deleteTrip }: TripCardProps) => {
  const handleDelete: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const tripId = Number(event.currentTarget.value);
    if (!isNaN(tripId)) {
      try {
        const data = await deleteTrip(tripId);
        return data;
      } catch (error) {
        console.error("Failed to delete ticket:", error);
      }
    }
  };

  return (
    <div className="trip-card">
      <h3>{trip.destination}</h3>
      {/* <p>{trip.startDate}</p>
      <p>{trip.endDate}</p> */}
      <p>{trip.budget}</p>
      <p>{trip.userId?.username}</p>
      <Link
        to="/edit"
        state={{ id: trip.id }}
        type="button"
        className="editBtn"
      >
        Edit
      </Link>
      <button
        type="button"
        value={String(trip.id)}
        onClick={handleDelete}
        className="deleteBtn"
      >
        Delete
      </button>
    </div>
  );
};

export default TripCard;
