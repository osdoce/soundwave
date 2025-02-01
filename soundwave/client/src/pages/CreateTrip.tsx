import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { createTrip } from "../api/tripAPI";
import { TripData } from "../interfaces/TripData";
import { UserData } from "../interfaces/UserData";
import { retrieveUsers } from "../api/userAPI";

const CreateTrip = () => {
  const [newTrip, setNewTrip] = useState<TripData | undefined>({
    id: 0,
    destination: "",
    tripuser: 1,
    userId: null,
    startDate: null,
    endDate: null,
    budget: 100,
  });

  const navigate = useNavigate();

  const [users, setUsers] = useState<UserData[] | undefined>([]);

  const getAllUsers = async () => {
    try {
      const data = await retrieveUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to retrieve user info", err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newTrip) {
      const data = await createTrip(newTrip);
      console.log(data);
      navigate("/");
    }
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTrip((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  // const handleTextChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setNewTrip((prev) => (prev ? { ...prev, [name]: value } : undefined));
  // };

  const handleUserChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewTrip((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Create Ticket</h1>
          <label htmlFor="tName">Trip Name</label>
          <textarea
            id="tName"
            name="name"
            value={newTrip?.destination || ""}
            onChange={handleTextAreaChange}
          />
          {/* <label htmlFor="tStatus">Trip budget</label>
          <select
            name="status"
            id="tStatus"
            value={newTrip?.budget || ""}
            onChange={handleTextChange}
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select> */}
          <label htmlFor="tBudget">Ticket Description</label>
          <textarea
            id="tBudget"
            name="budget"
            value={newTrip?.budget || ""}
            onChange={handleTextAreaChange}
          />
          <label htmlFor="tUserId">User's ID</label>
          <select
            name="tripuser"
            value={newTrip?.tripuser || ""}
            onChange={handleUserChange}
          >
            {users ? (
              users.map((user) => {
                return (
                  <option key={user.id} value={String(user.id)}>
                    {user.username}
                  </option>
                );
              })
            ) : (
              <textarea
                id="tUserId"
                name="tripuser"
                value={newTrip?.tripuser || 0}
                onChange={handleTextAreaChange}
              />
            )}
          </select>
          <button type="submit" onSubmit={handleSubmit}>
            Submit Form
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTrip;
