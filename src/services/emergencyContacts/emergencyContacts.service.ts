import { inject, injectable } from 'tsyringe';
import IEmergencyContactsService from '../../interfaces/services/emergencyContacts.interface';
import IEmergencyContactsFromDBRepository, {
  IContactsData,
} from '../../interfaces/repositories/emergencyContactsFromDB.interface';

@injectable()
class EmergencyContactsService implements IEmergencyContactsService {
  constructor(
    @inject('EmergencyContactsFromDBRepository')
    private emergencyContactsFromDBRepository: IEmergencyContactsFromDBRepository,
  ) {}

  async getEmergencyContacts(): Promise<IContactsData[]> {
    const contactListFromDB =
      await this.emergencyContactsFromDBRepository.getEmergencyContactsFromDB();

    if (!contactListFromDB) {
      throw new Error('Contact list not found!');
    }

    return contactListFromDB || [];
  }

  async getEmergencyContactById(id: string): Promise<IContactsData> {
    const contactFromDB =
      await this.emergencyContactsFromDBRepository.getEmergencyContactByIdFromDB(
        id,
      );

    if (!contactFromDB) {
      throw new Error('Contact not found!');
    }

    return contactFromDB;
  }

  async addEmergencyContact(name: string, phone: string, relationship: string, isMainContact: boolean): Promise<string> {
    const addContactOnDB =
      await this.emergencyContactsFromDBRepository.addEmergencyContactFromDB(
        name,
        phone,
        relationship,
        isMainContact,
      );

    if (!addContactOnDB) {
      throw new Error('The contact has not been added. Please try again!');
    }

    return addContactOnDB;
  }

  async updateEmergencyContact(
    id: string,
    name: string,
    phone: string,
    relationship: string,
    isMainContact: boolean,
  ): Promise<string> {
    const updateContactOnDB =
      await this.emergencyContactsFromDBRepository.updateEmergencyContactFromDB(
        id,
        name,
        phone,
        relationship,
        isMainContact
      );

    if (!updateContactOnDB) {
      throw new Error('Contact updated successfully!');
    }

    return updateContactOnDB;
  }

  async removeEmergencyContact(id: string): Promise<string> {
    const updateContactOnDB =
      await this.emergencyContactsFromDBRepository.removeEmergencyContactFromDB(
        id,
      );

    if (!updateContactOnDB) {
      throw new Error('Contact removed successfully!');
    }

    return updateContactOnDB;
  }
}

export default EmergencyContactsService;
