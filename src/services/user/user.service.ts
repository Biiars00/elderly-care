import { inject, injectable } from 'tsyringe';
import IUserService from '../../interfaces/services/user.interface';
import IUserFromDBRepository, { IUserData } from '../../interfaces/repositories/userFromDB.interface';

@injectable()
class UserService implements IUserService {
  constructor(
    @inject('UserFromDBRepository')
    private userFromDBRepository: IUserFromDBRepository,
  ) {}

async addUser(
    userFirstName: string, 
    userLastName: string,
    phone: string,
    email: string,
    password: string,
  ): Promise<string> {
    const responseDB =
      await this.userFromDBRepository.addUserFromDB(
        userFirstName, 
        userLastName, 
        phone, 
        email,
        password
      );

    if (!responseDB) {
      throw new Error('Data not found!');
    }

    return responseDB;
  }

  async getUserById(userId: string): Promise<Omit<IUserData, "password">> {
    const responseDB =
      await this.userFromDBRepository.getUserByIdFromDB(
        userId,
      );

    if (!responseDB) {
      throw new Error('Data not found!');
    }

    return responseDB;
  }
}

export default UserService;
