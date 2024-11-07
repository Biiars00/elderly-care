import { inject, injectable } from 'tsyringe';
import IMedicalServicesFromDBRepository, {
  IMedicalServiceData,
} from '../../interfaces/repositories/medicalServicesFromDB.interface';
import IMedicalServices from '../../interfaces/services/medicalServices.interface';

@injectable()
class MedicalServices implements IMedicalServices {
  constructor(
    @inject('MedicalServicesFromDBRepository')
    private medicalServicesFromDBRepository: IMedicalServicesFromDBRepository,
  ) {}

  async getMedicalServices(service: string): Promise<IMedicalServiceData[]> {
    const serviceListFromDB =
      await this.medicalServicesFromDBRepository.getMedicalServicesFromDB(
        service,
      );

    if (!serviceListFromDB) {
      throw new Error('Data not found!');
    }

    return serviceListFromDB || [];
  }

  async getMedicalServiceById(serviceId: string): Promise<IMedicalServiceData> {
    const serviceFromDB =
      await this.medicalServicesFromDBRepository.getMedicalServiceByIdFromDB(
        serviceId,
      );

    if (!serviceFromDB) {
      throw new Error('Data not found!');
    }

    return serviceFromDB;
  }

  async addMedicalService(data: IMedicalServiceData): Promise<string> {
    const addServiceOnDB =
      await this.medicalServicesFromDBRepository.addMedicalServiceFromDB(data);

    if (!addServiceOnDB) {
      throw new Error('Data not found!');
    }

    return 'Service added successfully!';
  }

  async updateMedicalService(
    serviceId: string,
    data: IMedicalServiceData,
  ): Promise<string> {
    const updateServiceOnDB =
      await this.medicalServicesFromDBRepository.updateMedicalServiceFromDB(
        serviceId,
        data,
      );

    if (!updateServiceOnDB) {
      throw new Error('Data not found!');
    }

    return 'Service updated successfully!';
  }

  async removeMedicalService(serviceId: string): Promise<string> {
    const removeServiceFromDB =
      await this.medicalServicesFromDBRepository.removeMedicalServiceFromDB(
        serviceId,
      );

    if (!removeServiceFromDB) {
      throw new Error('Data not found!');
    }

    return 'Service removed successfully!';
  }
}

export default MedicalServices;
