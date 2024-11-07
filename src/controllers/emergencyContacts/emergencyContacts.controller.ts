import { inject, injectable } from 'tsyringe';
import { Request, Response } from 'express';
import EmergencyContactsService from '../../services/emergencyContacts/emergencyContacts.service';

@injectable()
class EmergencyContactsController {
  constructor(
    @inject('EmergencyContactsService')
    private emergencyContactsService: EmergencyContactsService,
  ) {}

  async getEmergencyContacts(req: Request, res: Response): Promise<void> {
    try {
      const response =
        await this.emergencyContactsService.getEmergencyContacts();

      if (!response) {
        throw new Error('Resource not found!');
      }

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send({ message: `Internal server error - ${error}` });
    }
  }

  async getEmergencyContactById(req: Request, res: Response): Promise<void> {
    try {
      if (!req.params.contactId) {
        throw new Error('Resource is missing!');
      }

      const response =
        await this.emergencyContactsService.getEmergencyContactById(
          req.params.contactId,
        );

      if (!response) {
        throw new Error('Resource not found!');
      }

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send({ message: `Internal server error - ${error}` });
    }
  }

  async addEmergencyContact(req: Request, res: Response): Promise<void> {
    try {
      if (!req.body.name && !req.body.phone) {
        throw new Error('Resource is missing!');
      }

      const response = await this.emergencyContactsService.addEmergencyContact(
        req.body.name,
        req.body.phone,
      );

      if (!response) {
        throw new Error('Resource not found!');
      }

      res.status(201).send(response);
    } catch (error) {
      res.status(500).send({ message: `Internal server error - ${error}` });
    }
  }

  async updateEmergencyContact(req: Request, res: Response): Promise<void> {
    try {
      if (!req.params.contactId && !req.body.name && !req.body.phone) {
        throw new Error('Resource is missing!');
      }

      const response =
        await this.emergencyContactsService.updateEmergencyContact(
          req.params.contactId,
          req.body.name,
          req.body.phone,
        );

      if (!response) {
        throw new Error('Resource not found!');
      }

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send({ message: `Internal server error - ${error}` });
    }
  }

  async removeEmergencyContact(req: Request, res: Response): Promise<void> {
    try {
      if (!req.params.contactId) {
        throw new Error('Resource is missing!');
      }

      const response =
        await this.emergencyContactsService.removeEmergencyContact(
          req.params.contactId,
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

export default EmergencyContactsController;
