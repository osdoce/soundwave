import { UserData } from "./UserData";

export interface TripData {
  id: number | null;
  userId: UserData | null;
  tripuser: number | null;
  destination: string | null;
  startDate: Date | null;
  endDate: Date | null;
  budget: number | null;
}
