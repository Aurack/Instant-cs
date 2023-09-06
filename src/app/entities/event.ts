import {User} from "./user";

export interface Event {
  id?: number;
  name: string;
  user: User;
}
