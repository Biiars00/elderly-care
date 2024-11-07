import 'reflect-metadata';
import { container } from '../dependencies/dependencies';
import { Request, Response, Router } from 'express';
import MedicalServicesController from '../controllers/medicalServices/medicalServices.controller';

const medicalServicesRoutes = Router();

const medicalServicesController = container.resolve(MedicalServicesController);

medicalServicesRoutes.get('/:service', (req: Request, res: Response) => {
  return medicalServicesController.getMedicalServices(req, res);
});

medicalServicesRoutes.get(
  '/service/:serviceId',
  (req: Request, res: Response) => {
    return medicalServicesController.getMedicalServiceById(req, res);
  },
);

medicalServicesRoutes.post('/', (req: Request, res: Response) => {
  return medicalServicesController.addMedicalService(req, res);
});

medicalServicesRoutes.put('/:serviceId', (req: Request, res: Response) => {
  return medicalServicesController.updateMedicalService(req, res);
});

medicalServicesRoutes.delete('/:serviceId', (req: Request, res: Response) => {
  return medicalServicesController.removeMedicalService(req, res);
});

export default medicalServicesRoutes;
