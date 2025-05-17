export interface IUserData {
    userId: string, 
    userFirstName: string, 
    userLastName: string
    phone: string,
    email: string,
    password: string,
};

interface IUserFromDBRepository {
  addUserFromDB(
    userFirstName: string, 
    userLastName: string,
    phone: string,
    email: string,
    password: string,
  ): Promise<string>;
  getUserByIdFromDB(userId: string): Promise<Omit<IUserData, 'password'>>;
}

export default IUserFromDBRepository;