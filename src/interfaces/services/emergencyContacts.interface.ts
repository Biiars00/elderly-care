import { IContactsData } from '../repositories/emergencyContactsFromDB.interface';

interface IEmergencyContactsService {
  getEmergencyContacts(userId: string): Promise<IContactsData[]>;
  getEmergencyContactById(id: string, userId: string): Promise<IContactsData>;
  addEmergencyContact(name: string, phone: string, relationship: string, isMainContact: boolean, userId: string): Promise<string>;
  updateEmergencyContact(
    id: string,
    name: string,
    phone: string,
    relationship: string, 
    isMainContact: boolean,
    userId: string
  ): Promise<string>;
  removeEmergencyContact(id: string, userId: string): Promise<string>;
}

export default IEmergencyContactsService;
