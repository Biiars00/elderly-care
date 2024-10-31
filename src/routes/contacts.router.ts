import 'reflect-metadata';
import { container } from '../dependencies/dependencies';
import { Request, Response, Router } from 'express';
import EmergencyContactsController from '../controllers/emergencyContacts/emergencyContacts.controller';

const contacts = Router();

const emergencyContactsController = container.resolve(
  EmergencyContactsController,
);

/**
 * @swagger
 * /contacts:
 *   get:
 *     tags: [Contacts]
 *     description: Endpoint para listar todos os contatos de emergência
 *     responses:
 *       200:
 *         description: Listar contatos de emergência
 * /contacts/contactId:
 *   get:
 *     tags: [Contacts]
 *     description: Endpoint para buscar um contato de emergência
 *     responses:
 *       201:
 *         description: Listar contatos de emergência
 */
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

export default contacts;
