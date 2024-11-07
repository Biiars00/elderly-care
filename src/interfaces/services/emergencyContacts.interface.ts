import { IContactsData } from '../repositories/emergencyContactsFromDB.interface';

interface IEmergencyContactsService {
  getEmergencyContacts(): Promise<IContactsData[]>;
  getEmergencyContactById(contactId: string): Promise<IContactsData>;
  addEmergencyContact(name: string, phone: string): Promise<string>;
  updateEmergencyContact(
    contactId: string,
    name: string,
    phone: string,
  ): Promise<string>;
  removeEmergencyContact(contactId: string): Promise<string>;
}

export default IEmergencyContactsService;
