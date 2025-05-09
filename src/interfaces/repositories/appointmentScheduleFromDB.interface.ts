import { IDoctorsData } from './doctorsFromDB.interface';
import { ILocationData } from './locationFromDB.interface';

export interface IAppointmentScheduleData {
  id: string;
  doctorId: string, 
  locationId: string, 
  date: string, 
  time: string, 
  createdAt: string
}

export interface IConfirmScheduleData {
  confirmed: boolean;
}

interface IAppointmentScheduleFromDBRepository {
  getScheduleFromDB(): Promise<IAppointmentScheduleData[]>;
  getScheduleByIdFromDB(id: string): Promise<IAppointmentScheduleData>;
  addScheduleFromDB(
    doctorId: string, 
    locationId: string, 
    date: string, 
    time: string, 
    createdAt: string
  ): Promise<string>;
  updateScheduleFromDB(
    id: string,
    doctorId: string, 
    locationId: string, 
    date: string, 
    time: string, 
    createdAt: string
  ): Promise<string>;
  removeScheduleFromDB(id: string): Promise<string>;
  confirmScheduleFromDB(id: string, confirmed: boolean): Promise<IConfirmScheduleData>;
}

export default IAppointmentScheduleFromDBRepository;
