import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { retrieveTrip, updateTrip } from "../api/tripAPI";
import { TripData } from "../interfaces/TripData";

const EditTrip = () => {
  const [trip, setTrip] = useState<TripData | undefined>();

  const navigate = useNavigate();
  const { state } = useLocation();

  const fetchTrip = async (tripId: TripData) => {
    try {
      const data = await retrieveTrip(tripId.id);
      setTrip(data);
    } catch (err) {
      console.error("Failed to retrieve trip:", err);
    }
  };

  useEffect(() => {
    fetchTrip(state);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (trip && trip.id !== null) {
      updateTrip(trip.id, trip);
      navigate("/");
    } else {
      console.error("Trip data is undefined.");
    }
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTrip((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setTrip((prev) => (prev ? { ...prev, [name]: value } : undefined));
  // };

  return (
    <>
      <div className="container">
        {trip ? (
          <form className="form" onSubmit={handleSubmit}>
            <h1>Edit Ticket</h1>
            <label htmlFor="tName">Trip Destination</label>
            <textarea
              id="tName"
              name="destination"
              value={trip.destination || ""}
              onChange={handleTextAreaChange}
            />
            {/* <label htmlFor="tStatus">Ticket Status</label>
            <select
              name="status"
              id="tStatus"
              value={ticket.status || ""}
              onChange={handleChange}
            >
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select> */}

            <label htmlFor="tDescription">Ticket Budget</label>
            <textarea
              id="tBudget"
              name="budget"
              value={trip.budget || ""}
              onChange={handleTextAreaChange}
            />
            <button type="submit">Submit Form</button>
          </form>
        ) : (
          <div>Issues fetching trip</div>
        )}
      </div>
    </>
  );
};

export default EditTrip;
