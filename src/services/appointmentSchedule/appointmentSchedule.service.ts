import IAppointmentScheduleService from '../../interfaces/services/appointmentSchedule.interface';
import IAppointmentScheduleFromDBRepository, { IAppointmentScheduleData, IConfirmScheduleData } from '../../interfaces/repositories/appointmentScheduleFromDB.interface';
import { inject, injectable } from 'tsyringe';


@injectable()
class AppointmentScheduleService implements IAppointmentScheduleService {
  constructor(
    @inject('AppointmentScheduleFromDBRepository')
    private appointmentScheduleFromDBRepository: IAppointmentScheduleFromDBRepository,
  ) {}

  async getSchedule(): Promise<IAppointmentScheduleData[]> {
    const serviceListFromDB =
      await this.appointmentScheduleFromDBRepository.getScheduleFromDB();

    if (!serviceListFromDB) {
      throw new Error('Data not found!');
    }

    return serviceListFromDB || [];
  }

  async getScheduleById(id: string): Promise<IAppointmentScheduleData> {
    const serviceFromDB =
      await this.appointmentScheduleFromDBRepository.getScheduleByIdFromDB(
        id,
      );

    if (!serviceFromDB) {
      throw new Error('Data not found!');
    }

    return serviceFromDB;
  }

  async addSchedule(
    doctorId: string, 
    locationId: string, 
    date: string, 
    time: string, 
    createdAt: string
  ): Promise<string> {
    const addScheduleOnDB =
      await this.appointmentScheduleFromDBRepository.addScheduleFromDB(
        doctorId, 
        locationId, 
        date, 
        time, 
        createdAt
      );

    if (!addScheduleOnDB) {
      throw new Error('Data not found!');
    }

    return 'Appointment added successfully!';
  }

  async updateSchedule(
    id: string,
    doctorId: string, 
    locationId: string, 
    date: string, 
    time: string, 
    createdAt: string
  ): Promise<string> {
    const updateScheduleOnDB =
      await this.appointmentScheduleFromDBRepository.updateScheduleFromDB(
        id,
        doctorId, 
        locationId, 
        date, 
        time, 
        createdAt
      );

    if (!updateScheduleOnDB) {
      throw new Error('Data not found!');
    }

    return 'Appointment schedule updated successfully!';
  }

  async removeSchedule(id: string): Promise<string> {
    const removeScheduleFromDB =
      await this.appointmentScheduleFromDBRepository.removeScheduleFromDB(
        id,
      );

    if (!removeScheduleFromDB) {
      throw new Error('Data not found!');
    }

    return 'Appointment schedule removed successfully!';
  }

  async confirmSchedule(id: string, confirmed: boolean): Promise<IConfirmScheduleData> {
    const confirmAppointmentFromDB =
      await this.appointmentScheduleFromDBRepository.confirmScheduleFromDB(
        id,
        confirmed
      );

    if (!confirmAppointmentFromDB) {
      throw new Error('Data not found!');
    }

    return confirmAppointmentFromDB;
  }
}

export default AppointmentScheduleService;
