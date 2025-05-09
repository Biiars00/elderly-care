import { IContactsData } from '../repositories/emergencyContactsFromDB.interface';

interface IEmergencyContactsService {
  getEmergencyContacts(): Promise<IContactsData[]>;
  getEmergencyContactById(id: string): Promise<IContactsData>;
  addEmergencyContact(name: string, phone: string, relationship: string, isMainContact: boolean): Promise<string>;
  updateEmergencyContact(
    id: string,
    name: string,
    phone: string,
    relationship: string, 
    isMainContact: boolean,
  ): Promise<string>;
  removeEmergencyContact(id: string): Promise<string>;
}

export default IEmergencyContactsService;
