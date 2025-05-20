import { inject, injectable } from 'tsyringe';
import EmergencyContactsService from '../../services/emergencyContacts/emergencyContacts.service';
import { Body, Delete, Get, Path, Post, Put, Route, Security, Tags } from 'tsoa';
import { IContactsData } from '../../interfaces/repositories/emergencyContactsFromDB.interface';

@injectable()
@Route('contacts')
@Tags('Contatos de Emergência')
class EmergencyContactsController {
  constructor(
    @inject('EmergencyContactsService')
    private emergencyContactsService: EmergencyContactsService,
  ) {}

  @Get('/')
  @Security('jwt')
  async getEmergencyContacts(): Promise<IContactsData[]> {
    try {
      const response =
        await this.emergencyContactsService.getEmergencyContacts();

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Get('/:id')
  @Security('jwt')
  async getEmergencyContactById(@Path() id: string): Promise<IContactsData> {
    try {
      if (!id) {
        throw new Error('Resource is missing!');
      }

      const response =
        await this.emergencyContactsService.getEmergencyContactById(id);

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Post('/')
  @Security('jwt')
  async addEmergencyContact(@Body() body: Omit<IContactsData, 'id'>): Promise<string> {
    const { name, phone, relationship, isMainContact } = body
    try {
      if (!body) {
        throw new Error('Resource is missing!');
      }

      const response = await this.emergencyContactsService.addEmergencyContact(
        name, 
        phone, 
        relationship, 
        isMainContact
      ); 

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Put('/:id')
  @Security('jwt')
  async updateEmergencyContact(
    @Path() id: string, 
    @Body() body: Omit<IContactsData, 'id'>): Promise<string> {
      const { name, phone, relationship, isMainContact } = body
    try {
      if (!id && !body) {
        throw new Error('Resource is missing!');
      }

      const response =
        await this.emergencyContactsService.updateEmergencyContact(
          id,
          name,
          phone,
          relationship,
          isMainContact
        );

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Delete('/:id')
  @Security('jwt')
  async removeEmergencyContact(@Path() id: string): Promise<string> {
    try {
      if (!id) {
        throw new Error('Resource is missing!');
      }

      const response =
        await this.emergencyContactsService.removeEmergencyContact(
          id,
        );

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }
}

export default EmergencyContactsController;