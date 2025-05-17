import { inject, injectable } from 'tsyringe';
import { Body, Get, Path, Post, Route, Security, Tags } from 'tsoa';
import { IUserData } from '../../interfaces/repositories/userFromDB.interface';
import UserService from '../../services/user/user.service';

@injectable()
@Route('user')
@Tags('Acesso de Usuário')
@Security('firebaseAuth')
class UserController {
  constructor(
    @inject('UserService')
    private userService: UserService,
  ) {}

  @Post('/')
  async addUser(@Body() body: Omit<IUserData, 'userId'>): Promise<string> {
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
