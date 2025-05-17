import { IUserData } from "../../interfaces/repositories/userFromDB.interface";

interface IUserService {
  addUser(
    userFirstName: string, 
    userLastName: string,
    phone: string,
    email: string,
    password: string,
  ): Promise<string>;
  getUserById(userId: string): Promise<Omit<IUserData, 'password'>>;
}

export default IUserService;