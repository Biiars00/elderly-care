import { injectable } from 'tsyringe';
import databaseConfig from '../../database/databaseConfig';
import IMedicalServicesFromDBRepository, {
  IMedicalServiceData,
} from '../../interfaces/repositories/medicalServicesFromDB.interface';

@injectable()
class MedicalServicesFromDBRepository
  implements IMedicalServicesFromDBRepository
{
  private servicesDB;

  constructor() {
    this.servicesDB = databaseConfig.firestore().collection('services');
  }

  async getMedicalServicesFromDB(
    service: string,
  ): Promise<IMedicalServiceData[]> {
    if (service === 'Consulta') {
      const refDB = await this.servicesDB
        .where('service', '==', 'Consulta')
        .get();

      const servicesList = refDB.docs.map((doc) => {
        const docData = doc.data() as IMedicalServiceData;

        if (docData) {
          return docData;
        } else {
          throw new Error('Document not found!');
        }
      });

      return servicesList;
    } else if (service === 'Exame') {
      const refDB = await this.servicesDB.where('service', '==', 'Exame').get();

      const servicesList = refDB.docs.map((doc) => {
        const docData = doc.data() as IMedicalServiceData;

        if (docData) {
          return docData;
        } else {
          throw new Error('Document not found!');
        }
      });

      return servicesList;
    } else {
      throw new Error('Provide valid data!');
    }
  }

  async getMedicalServiceByIdFromDB(
    serviceId: string,
  ): Promise<IMedicalServiceData> {
    const refDB = await this.servicesDB.doc(serviceId).get();

    if (refDB.exists) {
      const data = refDB.data() as IMedicalServiceData;

      if (data) {
        return data;
      } else {
        throw new Error('Service not found!');
      }
    } else {
      throw new Error('Document not found!');
    }
  }

  async addMedicalServiceFromDB(data: IMedicalServiceData): Promise<string> {
    const refDB = this.servicesDB;
    const docRef = await refDB.add(data);

    docRef.update({ serviceId: docRef.id });

    return 'Service added successfully!';
  }

  async updateMedicalServiceFromDB(
    serviceId: string,
    data: IMedicalServiceData,
  ): Promise<string> {
    const refDB = await this.servicesDB.doc(serviceId).get();

    if (refDB.exists) {
      refDB.ref.update({
        name: data.name,
        phone: data.phone,
        service: data.service,
        serviceId: data.serviceId,
        medicalSpecialty: data.medicalSpecialty,
        doctor: data.doctor,
        date: data.date,
        time: data.time,
      });

      return 'Service updated successfully!';
    } else {
      throw new Error('Document not found!');
    }
  }

  async removeMedicalServiceFromDB(serviceId: string): Promise<string> {
    const refDB = await this.servicesDB.doc(serviceId).get();

    if (refDB.exists) {
      refDB.ref.delete();

      return 'Service removed successfully!';
    } else {
      throw new Error('Document not found!');
    }
  }
}

export default MedicalServicesFromDBRepository;
