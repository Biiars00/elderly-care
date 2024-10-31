import { inject, injectable } from 'tsyringe';
import IEmergencyContactsService from '../../interfaces/services/emergencyContacts.interface';
import { IContactsData } from '../../interfaces/repositories/emergencyContactsFromDB.interface';
import EmergencyContactsFromDBRepository from '../../repositories/emergencyContacts/emergencyContactsFromDB.repository';

@injectable()
class EmergencyContactsService implements IEmergencyContactsService {
  constructor(
    @inject('EmergencyContactsFromDBRepository')
    private emergencyContactsFromDBRepository: EmergencyContactsFromDBRepository,
  ) {}

  async getEmergencyContacts(): Promise<IContactsData[]> {
    const contactListFromDB =
      await this.emergencyContactsFromDBRepository.getEmergencyContactsFromDB();

    if (!contactListFromDB) {
      throw new Error('Contact list not found!');
    }

    return contactListFromDB || [];
  }

  async getEmergencyContactById(contactId: string): Promise<IContactsData> {
    const contactFromDB =
      await this.emergencyContactsFromDBRepository.getEmergencyContactByIdFromDB(
        contactId,
      );

    if (!contactFromDB) {
      throw new Error('Contact not found!');
    }

    return contactFromDB;
  }

  async addEmergencyContact(name: string, phone: string): Promise<string> {
    const addContactOnDB =
      await this.emergencyContactsFromDBRepository.addEmergencyContactFromDB(
        name,
        phone,
      );

    if (!addContactOnDB) {
      throw new Error('The contact has not been added. Please try again!');
    }

    return addContactOnDB;
  }

  async updateEmergencyContact(
    contactId: string,
    name: string,
    phone: string,
  ): Promise<string> {
    const updateContactOnDB =
      await this.emergencyContactsFromDBRepository.updateEmergencyContactFromDB(
        contactId,
        name,
        phone,
      );

    if (!updateContactOnDB) {
      throw new Error('Contact updated successfully!');
    }

    return updateContactOnDB;
  }
}

export default EmergencyContactsService;
