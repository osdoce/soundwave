import { TripData } from "../interfaces/TripData";
import { ApiMessage } from "../interfaces/ApiMessage";
import Auth from "../utils/auth";

const retrieveTrips = async () => {
  try {
    const response = await fetch("/trips/", {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Auth.getToken()}`
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("invalid API response, check network tab!");
    }

    return data;
  } catch (err) {
    console.log("Error from data retrieval: ", err);
    return [];
  }
};

const retrieveTrip = async (id: number | null): Promise<TripData> => {
  try {
    const response = await fetch(`/api/trips/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Could not invalid API response, check network tab!");
    }
    return data;
  } catch (err) {
    console.log("Error from data retrieval: ", err);
    return Promise.reject("Could not fetch singular ticket");
  }
};

const createTrip = async (body: TripData) => {
  try {
    const response = await fetch("/api/trips/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Auth.getToken()}`,
      },
      body: JSON.stringify(body),
    });
    const data = response.json();

    if (!response.ok) {
      throw new Error("invalid API response, check network tab!");
    }

    return data;
  } catch (err) {
    console.log("Error from Ticket Creation: ", err);
    return Promise.reject("Could not create ticket");
  }
};

const updateTrip = async (
  tripId: number,
  body: TripData
): Promise<TripData> => {
  try {
    const response = await fetch(`/api/trips/${tripId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Auth.getToken()}`,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("invalid API response, check network tab!");
    }

    return data;
  } catch (err) {
    console.error("Update did not work", err);
    return Promise.reject("Update did not work");
  }
};

const deleteTrip = async (ticketId: number): Promise<ApiMessage> => {
  try {
    const response = await fetch(`/api/trips/${ticketId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("invalid API response, check network tab!");
    }

    return data;
  } catch (err) {
    console.error("Error in deleting ticket", err);
    return Promise.reject("Could not delete ticket");
  }
};

export { createTrip, deleteTrip, retrieveTrips, retrieveTrip, updateTrip };
