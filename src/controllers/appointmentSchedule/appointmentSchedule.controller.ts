import { inject, injectable } from 'tsyringe';
import { Body, Delete, Get, Path, Post, Put, Route, Security, Tags } from 'tsoa';
import AppointmentScheduleService from '../../services/appointmentSchedule/appointmentSchedule.service';
import { IAppointmentScheduleData, IConfirmScheduleData } from '../../interfaces/repositories/appointmentScheduleFromDB.interface';

@injectable()
@Route('appointment')
@Tags('Agendamento de Consultas')
class AppointmentScheduleController {
  constructor(
    @inject('AppointmentScheduleService')
    private appointmentScheduleService: AppointmentScheduleService,
  ) {}

  @Get('/')
  @Security('jwt')
  async getSchedule(): Promise<IAppointmentScheduleData[]> {
    try {
      const response = await this.appointmentScheduleService.getSchedule();

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
  async getScheduleById(@Path() id: string): Promise<IAppointmentScheduleData> {
    try {
      if (!id) {
        throw new Error('Resource is missing!');
      }

      const response = await this.appointmentScheduleService.getScheduleById(id);

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
  async addSchedule(@Body() body: Omit<IAppointmentScheduleData, 'id'>
  ): Promise<string> {
    const { doctorId, locationId, date, time, createdAt } = body;

    try {
      if (!doctorId && !locationId && !date && !time && !createdAt) {
        throw new Error('Resource is missing!');
      }

      const response = await this.appointmentScheduleService.addSchedule(
        doctorId, 
        locationId, 
        date, 
        time, 
        createdAt
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
  async updateSchedule(
    @Path() id: string, 
    @Body() body: Omit<IAppointmentScheduleData, 'id'>
  ): Promise<string> {
    const { doctorId, locationId, date, time, createdAt } = body;

    try {
      if (!id && !doctorId && !locationId && !date && !time && !createdAt) {
        throw new Error('Resource is missing!');
      }

      const response = await this.appointmentScheduleService.updateSchedule(
        id,
        doctorId, 
        locationId, 
        date, 
        time, 
        createdAt,
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
  async removeSchedule(@Path() id: string): Promise<string> {
    try {
      if (!id) {
        throw new Error('Resource is missing!');
      }

      const response = await this.appointmentScheduleService.removeSchedule(id);

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }

  @Put('/confirmed/:id')
  @Security('jwt')
  async confirmSchedule(
    @Path() id: string,
    @Body() body: IConfirmScheduleData
  ): Promise<IConfirmScheduleData> {
    const { confirmed } = body;

    try {
      if (!id && !confirmed) {
        throw new Error('Resource is missing!');
      }

      const response = await this.appointmentScheduleService.confirmSchedule(id, confirmed);

      if (!response) {
        throw new Error('Resource not found!');
      }

      return response;
    } catch (error) {
      throw new Error(`Internal server error - ${error}`);
    }
  }
}

export default AppointmentScheduleController;
