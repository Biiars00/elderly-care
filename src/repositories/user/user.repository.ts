import { injectable } from 'tsyringe';
import databaseConfig from '../../database/databaseConfig';
import IUserFromDBRepository, { IUserData } from '../../interfaces/repositories/userFromDB.interface';

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
  ): Promise<IUserData> {
    const refDB = this.db;

    const docRef = await refDB.add({
      userFirstName: userFirstName,
      userLastName: userLastName,
      phone: phone,
      email: email,
      password: password
    });

    docRef.update({ userId: docRef.id });

    return {
      userId: docRef.id,
      userFirstName: userFirstName,
      userLastName: userLastName,
      phone: phone,
      email: email,
      password: password
    };
  }

  async getUsersFromDB(): Promise<IUserData[]> {
    const refDB = await this.db.get();

    const usersList = refDB.docs.map((doc) => {
      const docData = doc.data() as IUserData;

      if (docData) {
        return docData;
      } else {
        throw new Error('Document not found!');
      }
    });

    return usersList;
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

  async getUserCheckFromDB(
    userId: string,
    email: string,
    password: string
  ): Promise<Partial<IUserData>> {
    const refDB = await this.db.doc(userId).get();

    const data = refDB.data() as IUserData;

    if (data && data.userId === userId && data.email === email && data.password === password) {
      return {
        userId: data.userId,
        email: data.email,
        password: data.password,
      };
    } else {
      throw new Error('User not found!');
    }
  }
}

export default UserFromDBRepository;