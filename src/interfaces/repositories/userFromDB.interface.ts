export interface IUserData {
    userId: string, 
    userFirstName: string, 
    userLastName: string
    phone: string,
    email: string,
    password: string,
};

export interface IOmitPasswordFromUserData {
    userId: string, 
    userFirstName: string, 
    userLastName: string
    phone: string,
    email: string,
};


interface IUserFromDBRepository {
  addUserFromDB(
    userFirstName: string, 
    userLastName: string,
    phone: string,
    email: string,
    password: string,
  ): Promise<IUserData>;
  getUsersFromDB(): Promise<IUserData[]>;
  getUserByIdFromDB(userId: string): Promise<Omit<IUserData, 'password'>>;
  getUserCheckFromDB(email: string, password: string): Promise<Partial<IUserData>>;
}

export default IUserFromDBRepository;