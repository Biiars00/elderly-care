import { injectable } from 'tsyringe';
import databaseConfig from '../../database/databaseConfig';
import IEmergencyContactsFromDBRepository, {
  IContactsData,
} from '../../interfaces/repositories/emergencyContactsFromDB.interface';

@injectable()
class EmergencyContactsFromDBRepository
  implements IEmergencyContactsFromDBRepository
{
  private contactsDB;

  constructor() {
    this.contactsDB = databaseConfig.firestore().collection('contacts');
  }

  async getEmergencyContactsFromDB(): Promise<IContactsData[]> {
    const refDB = await this.contactsDB.get();

    const contactList = refDB.docs.map((doc) => {
      const docData = doc.data() as IContactsData;

      if (docData) {
        return docData;
      } else {
        throw new Error('Contact list not available!');
      }
    });

    return contactList;
  }

  async getEmergencyContactByIdFromDB(
    id: string,
  ): Promise<IContactsData> {
    const refDB = await this.contactsDB.doc(id).get();

    if (refDB.exists) {
      const data = refDB.data();

      if (data) {
        return {
          id: data.id,
          name: data.name,
          phone: data.phone,
          relationship: data.relationship,
          isMainContact: data.isMainContact,
        };
      } else {
        throw new Error('Contact not found!');
      }
    } else {
      throw new Error('Document not found!');
    }
  }

  async addEmergencyContactFromDB(
    name: string,
    phone: string,
    relationship: string,
    isMainContact: boolean,
  ): Promise<string> {
    const refDB = this.contactsDB;
    const docRef = await refDB.add({
      name: name,
      phone: phone,
      relationship: relationship,
      isMainContact: isMainContact,
    });

    docRef.update({ id: docRef.id });

    return 'Contact added successfully!';
  }

  async updateEmergencyContactFromDB(
    id: string,
    name: string,
    phone: string,
    relationship: string,  
    isMainContact: boolean
  ): Promise<string> {
    const refDB = await this.contactsDB.doc(id).get();

    if (refDB.exists) {
      refDB.ref.update({
        name: name,
        phone: phone,
        relationship: relationship,
        isMainContact: isMainContact,
      });

      return 'Contact updated successfully!';
    } else {
      throw new Error('Document not found!');
    }
  }

  async removeEmergencyContactFromDB(id: string): Promise<string> {
    const refDB = await this.contactsDB.doc(id).get();

    if (refDB.exists) {
      refDB.ref.delete();

      return 'Contact removed successfully!';
    } else {
      throw new Error('Document not found!');
    }
  }
}

export default EmergencyContactsFromDBRepository;
