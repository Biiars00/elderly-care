import { inject, injectable } from 'tsyringe';
import { Body, Delete, Get, Path, Post, Put, Route, Tags } from 'tsoa';
import MedicationService from '../../services/medication/medication.service';
import { IMedicationsData, IResetMedicationsData } from '../../interfaces/repositories/medicationFromDB.interface';

@injectable()
@Route('medication')
@Tags('Medicações')
class MedicationController {
  constructor(
    @inject('MedicationService')
    private medicationService: MedicationService,
  ) {}

  @Get('/')
  async getMedications(): Promise<IMedicationsData[]> {
    try {
      const response = await this.medicationService.getMedications();

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Get('/:id')
  async getMedicationById(@Path() id: string): Promise<IMedicationsData> {
    try {
      if (!id) {
        throw new Error('Resource is missing!');
      }

      const response = await this.medicationService.getMedicationById(id);

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Post('/')
  async addMedication(@Body() body: Omit<IMedicationsData, 'id'>
  ): Promise<string> {
    const { name, dosage, time } = body;

    try {
      if (!name && !dosage && !time) {
        throw new Error('Resource is missing!');
      }

      const response = await this.medicationService.addMedication(
        name, 
        dosage,  
        time, 
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
  async removeMedication(@Path() id: string): Promise<string> {
    try {
      if (!id) {
        throw new Error('Resource is missing!');
      }

      const response = await this.medicationService.removeMedication(id);

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Put('/reminder/:id')
  async updateMedicationReminder(
    @Path() id: string, 
    @Body() body: Omit<IResetMedicationsData, 'taken'>
  ): Promise<string> {
    const { reminder } = body;
    
    try {
      if (!id && !reminder) {
        throw new Error('Resource is missing!');
      }

      const response = await this.medicationService.updateMedicationReminder(
        id,
        reminder, 
      );

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Put('/taken/:id')
  async updateMedicationTaken(
    @Path() id: string,
    @Body() body: Omit<IResetMedicationsData, 'reminder'>
  ): Promise<string> {
    const { taken } = body;

    try {
      if (!id && !taken) {
        throw new Error('Resource is missing!');
      }

      const response = await this.medicationService.updateMedicationTaken(id, taken);

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Put('/reset')
  async resetMedications(): Promise<string> {
    try {
      const response = await this.medicationService.resetMedications();

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }
}

export default MedicationController;
