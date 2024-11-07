import { inject, injectable } from 'tsyringe';
import { Request, Response } from 'express';
import MedicalServices from '../../services/medicalServices/medicalServices.service';

@injectable()
class MedicalServicesController {
  constructor(
    @inject('MedicalServices')
    private medicalServices: MedicalServices,
  ) {}

  async getMedicalServices(req: Request, res: Response): Promise<void> {
    try {
      if (!req.params.service) {
        throw new Error('Resource is missing!');
      }

      const response = await this.medicalServices.getMedicalServices(
        req.params.service,
      );

      if (!response) {
        throw new Error('Resource not found!');
      }

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send({ message: `Internal server error - ${error}` });
    }
  }

  async getMedicalServiceById(req: Request, res: Response): Promise<void> {
    try {
      if (!req.params.serviceId) {
        throw new Error('Resource is missing!');
      }

      const response = await this.medicalServices.getMedicalServiceById(
        req.params.serviceId,
      );

      if (!response) {
        throw new Error('Resource not found!');
      }

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send({ message: `Internal server error - ${error}` });
    }
  }

  async addMedicalService(req: Request, res: Response): Promise<void> {
    try {
      if (!req.body) {
        throw new Error('Resource is missing!');
      }

      const response = await this.medicalServices.addMedicalService(req.body);

      if (!response) {
        throw new Error('Resource not found!');
      }

      res.status(201).send(response);
    } catch (error) {
      res.status(500).send({ message: `Internal server error - ${error}` });
    }
  }

  async updateMedicalService(req: Request, res: Response): Promise<void> {
    try {
      if (!req.params.serviceId && !req.body) {
        throw new Error('Resource is missing!');
      }

      const response = await this.medicalServices.updateMedicalService(
        req.params.serviceId,
        req.body,
      );

      if (!response) {
        throw new Error('Resource not found!');
      }

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send({ message: `Internal server error - ${error}` });
    }
  }

  async removeMedicalService(req: Request, res: Response): Promise<void> {
    try {
      if (!req.params.serviceId) {
        throw new Error('Resource is missing!');
      }

      const response = await this.medicalServices.removeMedicalService(
        req.params.serviceId,
      );

      if (!response) {
        throw new Error('Resource not found!');
      }

      res.status(204).send(response);
    } catch (error) {
      res.status(500).send({ message: `Internal server error - ${error}` });
    }
  }
}

export default MedicalServicesController;
