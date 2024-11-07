import { IMedicalServiceData } from '../repositories/medicalServicesFromDB.interface';

interface IMedicalServices {
  getMedicalServices(service: string): Promise<IMedicalServiceData[]>;
  getMedicalServiceById(serviceId: string): Promise<IMedicalServiceData>;
  addMedicalService(data: IMedicalServiceData): Promise<string>;
  updateMedicalService(
    serviceId: string,
    data: IMedicalServiceData,
  ): Promise<string>;
  removeMedicalService(serviceId: string): Promise<string>;
}

export default IMedicalServices;
