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
        console.log(docData);
        return docData;
      } else {
        throw new Error('Contact list not available!');
      }
    });

    return contactList;
  }

  async getEmergencyContactByIdFromDB(
    contactId: string,
  ): Promise<IContactsData> {
    const refDB = await this.contactsDB.doc(contactId).get();

    if (refDB.exists) {
      const data = refDB.data();

      if (data) {
        return {
          contactId: data.contactId,
          name: data.name,
          phone: data.phone,
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
  ): Promise<string> {
    const refDB = this.contactsDB;
    const docRef = await refDB.add({
      name: name,
      phone: phone,
    });

    docRef.update({ contactId: docRef.id });

    return 'Contact added successfully!';
  }

  async updateEmergencyContactFromDB(
    contactId: string,
    name: string,
    phone: string,
  ): Promise<string> {
    const refDB = await this.contactsDB.doc(contactId).get();

    if (refDB.exists) {
      refDB.ref.update({
        name: name,
        phone: phone,
      });

      return 'Contact updated successfully!';
    } else {
      throw new Error('Document not found!');
    }
  }
}

export default EmergencyContactsFromDBRepository;
