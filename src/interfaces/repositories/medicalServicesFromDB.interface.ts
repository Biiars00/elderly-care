export interface IMedicalServiceData {
  name: string;
  phone: string;
  service: string;
  serviceId: string;
  medicalSpecialty: string;
  doctor: string;
  date: string;
  time: string;
}

interface IMedicalServicesFromDBRepository {
  getMedicalServicesFromDB(service: string): Promise<IMedicalServiceData[]>;
  getMedicalServiceByIdFromDB(serviceId: string): Promise<IMedicalServiceData>;
  addMedicalServiceFromDB(data: IMedicalServiceData): Promise<string>;
  updateMedicalServiceFromDB(
    serviceId: string,
    data: IMedicalServiceData,
  ): Promise<string>;
  removeMedicalServiceFromDB(serviceId: string): Promise<string>;
}

export default IMedicalServicesFromDBRepository;
