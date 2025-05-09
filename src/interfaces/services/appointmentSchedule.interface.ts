import { IAppointmentScheduleData, IConfirmScheduleData } from '../repositories/appointmentScheduleFromDB.interface';

interface IAppointmentScheduleService {
  getSchedule(): Promise<IAppointmentScheduleData[]>;
  getScheduleById(id: string): Promise<IAppointmentScheduleData>;
  addSchedule(
    doctorId: string, 
    locationId: string, 
    date: string, 
    time: string, 
    createdAt: string
  ): Promise<string>;
  updateSchedule(
    id: string,
    doctorId: string, 
    locationId: string, 
    date: string, 
    time: string, 
    createdAt: string
  ): Promise<string>;
  removeSchedule(id: string): Promise<string>;
  confirmSchedule(id: string, confirmed: boolean): Promise<IConfirmScheduleData>;
}

export default IAppointmentScheduleService;
