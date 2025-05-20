import { IUserData } from "../../interfaces/repositories/userFromDB.interface";

interface IUserService {
  addUser(
    userFirstName: string, 
    userLastName: string,
    phone: string,
    email: string,
    password: string,
  ): Promise<IUserData>;
  getUsers(): Promise<IUserData[]>;
  getUserById(userId: string): Promise<Omit<IUserData, 'password'>>;
  loginUser(accessToken: string, email: string, password: string,): Promise<string>;
}

export default IUserService;