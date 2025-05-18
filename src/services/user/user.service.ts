import { inject, injectable } from 'tsyringe';
import IUserService from '../../interfaces/services/user.interface';
import IUserFromDBRepository, { IUserData } from '../../interfaces/repositories/userFromDB.interface';
// import { generateToken } from '../../middlewares/jwtAuthentication';

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
  ): Promise<IUserData> {
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

  async loginUser(
    userId: string,
    email: string,
    password: string,
  ): Promise<string> {
    // let accessToken = '';

    const responseDB = await this.userFromDBRepository.getUserCheckFromDB(userId, email, password);

    if (!responseDB) {
      throw new Error('User not exists!');
    }

    // if (responseDB.userId === userId && responseDB.email === email && responseDB.password === password) {
    //     accessToken = generateToken({
    //       userId: responseDB.userId,
    //       email: responseDB.email,
    //   });
    // }

    // if (!accessToken) {
    //   throw new Error('Invalid credentials!');
    // }

    return 'Login successful!';
  }

  async getUsers(): Promise<IUserData[]> {
    const responseDB =
      await this.userFromDBRepository.getUsersFromDB();

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
