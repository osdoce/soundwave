import { useEffect, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import { retrieveTrips, deleteTrip } from "../api/tripAPI";
import ErrorPage from "./ErrorPage";
import Swimlane from "../components/Swimlane";
import { TripData } from "../interfaces/TripData";
import { ApiMessage } from "../interfaces/ApiMessage";

import auth from "../utils/auth";

const boardStates = ["Todo", "In Progress", "Done"];

const Board = () => {
  const [trips, setTrips] = useState<TripData[]>([]);
  const [error, setError] = useState(false);
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  const fetchTrips = async () => {
    try {
      const data = await retrieveTrips();
      setTrips(data);
    } catch (err) {
      console.error("Failed to retrieve tripss:", err);
      setError(true);
    }
  };

  const deleteIndvTrip = async (tripId: number): Promise<ApiMessage> => {
    try {
      const data = await deleteTrip(tripId);
      fetchTrips();
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  useLayoutEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (loginCheck) {
      fetchTrips();
    }
  }, [loginCheck]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {!loginCheck ? (
        <div className="login-notice">
          <h1>Login to create & view trips</h1>
        </div>
      ) : (
        <div className="board">
          <button type="button" id="create-trip-link">
            <Link to="/create">New Trip</Link>
          </button>
          <div className="board-display">
            {boardStates.map((destination) => {
              const filteredTrips = trips.filter(
                (trip) => trip.destination === destination
              );
              return (
                <Swimlane
                  title={destination}
                  key={destination}
                  trips={filteredTrips}
                  deleteTrip={deleteIndvTrip}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
