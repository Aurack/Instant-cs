import {User} from "./user";
import {Picture} from "./picture";

export interface Like {
  id?: number;
  user: User;
  picture: Picture;
}
