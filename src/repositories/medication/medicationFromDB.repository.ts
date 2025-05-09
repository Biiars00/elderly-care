import { injectable } from 'tsyringe';
import databaseConfig from '../../database/databaseConfig';
import IAppointmentScheduleFromDBRepository, { IAppointmentScheduleData, IConfirmScheduleData } from '../../interfaces/repositories/appointmentScheduleFromDB.interface';
import IMedicationFromDBRepository, { IMedicationsData } from '../../interfaces/repositories/medicationFromDB.interface';

@injectable()
class MedicationFromDBRepository
  implements IMedicationFromDBRepository
{
  private db;

  constructor() {
    this.db = databaseConfig.firestore().collection('medications');
  }

  async getMedicationsFromDB(
  ): Promise<IMedicationsData[]> {
      const refDB = await this.db.get();

      const medicationList = refDB.docs.map((doc) => {
        const docData = doc.data() as IMedicationsData;

        if (docData) {
          return docData;
        } else {
          throw new Error('Document not found!');
        }
      });

      return medicationList;
  }

  async getMedicationByIdFromDB(
    id: string,
  ): Promise<IMedicationsData> {
    const refDB = await this.db.doc(id).get();

    if (refDB.exists) {
      const data = refDB.data() as IMedicationsData;

      if (data) {
        return data;
      } else {
        throw new Error('Data not found!');
      }
    } else {
      throw new Error('Document not found!');
    }
  }

  async addMedicationFromDB(
    name: string, 
    dosage: number,
    time: string, 
  ): Promise<string> {
    const refDB = this.db;
    const docRef = await refDB.add({
        name: name, 
        dosage: dosage,
        time: time, 
    });

    docRef.update({ id: docRef.id });

    return 'Medication added successfully!';
  }

  async removeMedicationFromDB(id: string): Promise<string> {
    const refDB = await this.db.doc(id).get();

    if (refDB.exists) {
      refDB.ref.delete();

      return 'Medication removed successfully!';
    } else {
      throw new Error('Document not found!');
    }
  }

  async updateMedicationReminderFromDB(
    id: string,
    reminder: boolean, 
  ): Promise<string> {
    const refDB = await this.db.doc(id).get();

    const data = refDB.data() as IMedicationsData;

    if (refDB.exists) {
      refDB.ref.update({
        ...data,
        reminder: reminder,
      });

      return 'Medication reminder has been updated successfully!';
    } else {
      throw new Error('Document not found!');
    }
  }

  async updateMedicationTakenFromDB(
    id: string,
    taken: boolean, 
  ): Promise<string> {
    const refDB = await this.db.doc(id).get();

    const data = refDB.data() as IMedicationsData;

    if (refDB.exists) {
      refDB.ref.update({
        ...data,
        taken: taken,
      });

      return 'The medication taken has been successfully updated!';
    } else {
      throw new Error('Document not found!');
    }
  }

  async resetMedicationsFromDB(): Promise<string> {
    const refDB = await this.db.get();

    const updateMedicationList = refDB.docs.map((doc) => {
      const data = doc.data() as IMedicationsData;

      if (data) {
        doc.ref.update({
          taken: false,
          reminder: false,
        });
      } else {
        throw new Error('Document not found!');
      }
    })

    return 'Medications have been reset successfully!';
  } 
}

export default MedicationFromDBRepository;
