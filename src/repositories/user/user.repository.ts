import { injectable } from 'tsyringe';
import databaseConfig from '../../database/databaseConfig';
import IUserFromDBRepository, { IUserData } from '../../interfaces/repositories/userFromDB.interface';
import bcrypt from 'bcrypt';

@injectable()
class UserFromDBRepository
  implements IUserFromDBRepository
{
  private db;

  constructor() {
    this.db = databaseConfig.firestore().collection('users');
  }

  async addUserFromDB(
    userFirstName: string, 
    userLastName: string,
    phone: string,
    email: string,
    password: string,
  ): Promise<string> {
    const refDB = this.db;
    const hashedPassword = await bcrypt.hash(password, 10);

    const docRef = await refDB.add({
      userFirstName: userFirstName,
      userLastName: userLastName,
      phone: phone,
      email: email,
      password: hashedPassword
    });

    docRef.update({ id: docRef.id });

    return 'User added successfully!';
  }

  async getUserByIdFromDB(
    userId: string,
  ): Promise<Omit<IUserData, 'password'>> {
    const refDB = await this.db.doc(userId).get();

    if (refDB.exists) {
      const data = refDB.data() as IUserData;

      if (data) {
        return data;
      } else {
        throw new Error('User not found!');
      }
    } else {
      throw new Error('Document not found!');
    }
  }
}

export default UserFromDBRepository;