import { inject, injectable } from 'tsyringe';
import { Body, Get, Path, Post, Route, Security, Tags } from 'tsoa';
import { IUserData } from '../../interfaces/repositories/userFromDB.interface';
import UserService from '../../services/user/user.service';
import { generateToken } from '../../middlewares/jwtAuthentication';

@injectable()
@Route('user')
@Tags('Acesso de Usuário')
class UserController {
  constructor(
    @inject('UserService')
    private userService: UserService,
  ) {}

  @Post('/sign-up')
  async addUser(@Body() body: Omit<IUserData, 'userId'>): Promise<IUserData> {
    const { userFirstName, userLastName, phone, email, password } = body;

    try {
      const response = await this.userService.addUser(
        userFirstName, 
        userLastName, 
        phone, 
        email, 
        password
      );

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Post('/login')
  async loginUser(@Body() body: Partial<IUserData>): Promise<string> {
    const { userId, email, password } = body;

    if (typeof userId !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      throw new Error('Email and password are required.');
    }

    try {
      const response = await this.userService.loginUser(
        userId,
        email, 
        password
      );

      if (!response) {
        throw new Error('Resource not found!');
      }

      const accessToken = generateToken({
        userId: userId,
        email: email,
      });

      return accessToken;

    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Get('/')
  async getUsers(): Promise<IUserData[]> {
    try {
      const response = await this.userService.getUsers();

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Get('/:userId')
  async getLocationById(@Path() userId: string): Promise<Omit<IUserData, 'password'>> {
    try {
      if (!userId) {
        throw new Error('Resource is missing!');
      }

      const response = await this.userService.getUserById(userId);

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }
}

export default UserController;
