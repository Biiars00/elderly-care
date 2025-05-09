import { injectable } from 'tsyringe';
import databaseConfig from '../../database/databaseConfig';
import IAppointmentScheduleFromDBRepository, { IAppointmentScheduleData, IConfirmScheduleData } from '../../interfaces/repositories/appointmentScheduleFromDB.interface';

@injectable()
class AppointmentScheduleFromDBRepository
  implements IAppointmentScheduleFromDBRepository
{
  private servicesDB;

  constructor() {
    this.servicesDB = databaseConfig.firestore().collection('schedules');
  }

  async getScheduleFromDB(
  ): Promise<IAppointmentScheduleData[]> {
      const refDB = await this.servicesDB.get();

      const scheduleList = refDB.docs.map((doc) => {
        const docData = doc.data() as IAppointmentScheduleData;

        if (docData) {
          return docData;
        } else {
          throw new Error('Document not found!');
        }
      });

      return scheduleList;
  }

  async getScheduleByIdFromDB(
    id: string,
  ): Promise<IAppointmentScheduleData> {
    const refDB = await this.servicesDB.doc(id).get();

    if (refDB.exists) {
      const data = refDB.data() as IAppointmentScheduleData;

      if (data) {
        return data;
      } else {
        throw new Error('Schedule not found!');
      }
    } else {
      throw new Error('Document not found!');
    }
  }

  async addScheduleFromDB(
    doctorId: string, 
    locationId: string,
    date: string,
    time: string, 
    createdAt: string
  ): Promise<string> {
    console.log('REPOSITORYYYYYYYYYYYYYYYYYYYYYYYYYYY')
    const refDB = this.servicesDB;
    const docRef = await refDB.add({
      doctorId: doctorId, 
      locationId: locationId,
      date: date,
      time: time, 
      createdAt: createdAt
    });

    docRef.update({ id: docRef.id });

    return 'Schedule added successfully!';
  }

  async updateScheduleFromDB(
    id: string,
    doctorId: string, 
    locationId: string,
    date: string,
    time: string, 
    createdAt: string
  ): Promise<string> {
    const refDB = await this.servicesDB.doc(id).get();

    if (refDB.exists) {
      refDB.ref.update({
        doctorId: doctorId, 
        locationId: locationId,
        date: date,
        time: time, 
        createdAt: createdAt
      });

      return 'Schedule updated successfully!';
    } else {
      throw new Error('Document not found!');
    }
  }

  async removeScheduleFromDB(id: string): Promise<string> {
    const refDB = await this.servicesDB.doc(id).get();

    if (refDB.exists) {
      refDB.ref.delete();

      return 'Schedule removed successfully!';
    } else {
      throw new Error('Document not found!');
    }
  }

  async confirmScheduleFromDB(id: string, confirmed: boolean): Promise<IConfirmScheduleData> {
    const refDB = await this.servicesDB.doc(id).get();

    const data = refDB.data() as IAppointmentScheduleData;

    if (refDB.exists) {
        refDB.ref.update({
          confirmed: confirmed,
        });

      return {
        ...data,
        confirmed: confirmed
      }
    } else {
      throw new Error('Document not found!');
    }
  }
}

export default AppointmentScheduleFromDBRepository;
