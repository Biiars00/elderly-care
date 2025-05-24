import { IUserData, IUserDataLogin, IUserDataWithoutPassword, IUserDataWithoutUserId } from "../../interfaces/repositories/userFromDB.interface";

interface IUserService {
  addUser(
    data: IUserDataWithoutUserId
  ): Promise<IUserData>;
  getUsers(): Promise<IUserDataWithoutPassword[]>;
  getUserById(userId: string): Promise<IUserDataWithoutPassword>;
  loginUser(data: IUserDataLogin): Promise<string>;
}

export default IUserService;