export interface IContactsData {
  contactId: string;
  name: string;
  phone: string;
}

interface IEmergencyContactsFromDBRepository {
  getEmergencyContactsFromDB(): Promise<IContactsData[]>;
  getEmergencyContactByIdFromDB(contactId: string): Promise<IContactsData>;
  addEmergencyContactFromDB(name: string, phone: string): Promise<string>;
  updateEmergencyContactFromDB(
    contactId: string,
    name: string,
    phone: string,
  ): Promise<string>;
  removeEmergencyContactFromDB(contactId: string): Promise<string>;
}

export default IEmergencyContactsFromDBRepository;
