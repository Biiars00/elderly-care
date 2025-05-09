export interface IContactsData {
  id: string;
  name: string;
  phone: string;
  relationship: string;
  isMainContact: boolean;
}

interface IEmergencyContactsFromDBRepository {
  getEmergencyContactsFromDB(): Promise<IContactsData[]>;
  getEmergencyContactByIdFromDB(id: string): Promise<IContactsData>;
  addEmergencyContactFromDB(name: string, phone: string, relationship: string, isMainContact: boolean): Promise<string>;
  updateEmergencyContactFromDB(
    id: string,
    name: string,
    phone: string,
    relationship: string,
    isMainContact: boolean,
  ): Promise<string>;
  removeEmergencyContactFromDB(id: string): Promise<string>;
}

export default IEmergencyContactsFromDBRepository;
