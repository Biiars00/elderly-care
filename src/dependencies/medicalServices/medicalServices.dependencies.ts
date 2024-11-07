import { container } from 'tsyringe';

import MedicalServicesController from '../../controllers/medicalServices/medicalServices.controller';
import MedicalServicesFromDBRepository from '../../repositories/medicalServices/medicalServicesFromDB.repository';
import MedicalServices from '../../services/medicalServices/medicalServices.service';

container.register('MedicalServicesController', {
  useClass: MedicalServicesController,
});
container.register('MedicalServicesFromDBRepository', {
  useClass: MedicalServicesFromDBRepository,
});
container.register('MedicalServices', {
  useClass: MedicalServices,
});

export { container as medicalServices };
