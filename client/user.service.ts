import axios from "axios";

import { Model } from "./model";

const api = "api";

export class UserService {
  constructor() {
    console.log("creating new instance of hero.service");
  }

  getAllUsers() {
    console.log(`[UserService] getUsers()`);
    return axios.get(`${api}/getUsers`);
  }
}
//  Can't do the Angular way.Some reason creating the new singleton on the other components causes errors.
export const userService = new UserService();
