import 'reflect-metadata';
import { container } from '../dependencies/dependencies';
import { Request, Response, Router } from 'express';
import EmergencyContactsController from '../controllers/emergencyContacts/emergencyContacts.controller';

const contacts = Router();

const emergencyContactsController = container.resolve(
  EmergencyContactsController,
);

contacts.get('/', (req: Request, res: Response) => {
  return emergencyContactsController.getEmergencyContacts(req, res);
});

contacts.get('/:contactId', (req: Request, res: Response) => {
  return emergencyContactsController.getEmergencyContactById(req, res);
});

contacts.post('/', (req: Request, res: Response) => {
  return emergencyContactsController.addEmergencyContact(req, res);
});

contacts.put('/:contactId', (req: Request, res: Response) => {
  return emergencyContactsController.updateEmergencyContact(req, res);
});

contacts.delete('/:contactId', (req: Request, res: Response) => {
  return emergencyContactsController.removeEmergencyContact(req, res);
});

export default contacts;
