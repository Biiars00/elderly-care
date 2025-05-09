import { inject, injectable } from 'tsyringe';
import IMedicationService from '../../interfaces/services/medication.interface';
import IMedicationFromDBRepository, { IMedicationsData } from '../../interfaces/repositories/medicationFromDB.interface';

@injectable()
class MedicationService implements IMedicationService {
  constructor(
    @inject('MedicationFromDBRepository')
    private medicationFromDBRepository: IMedicationFromDBRepository,
  ) {}

  async getMedications(): Promise<IMedicationsData[]> {
    const responseDB =
      await this.medicationFromDBRepository.getMedicationsFromDB();

    if (!responseDB) {
      throw new Error('Data not found!');
    }

    return responseDB || [];
  }

  async getMedicationById(id: string): Promise<IMedicationsData> {
    const responseDB =
      await this.medicationFromDBRepository.getMedicationByIdFromDB(
        id,
      );

    if (!responseDB) {
      throw new Error('Data not found!');
    }

    return responseDB;
  }

  async addMedication(
    name: string, 
    dosage: number, 
    time: string
  ): Promise<string> {
    const responseDB =
      await this.medicationFromDBRepository.addMedicationFromDB(
        name, 
        dosage, 
        time, 
      );

    if (!responseDB) {
      throw new Error('Data not found!');
    }

    return responseDB;
  }

  async removeMedication(
    id: string,
  ): Promise<string> {
    const responseDB =
      await this.medicationFromDBRepository.removeMedicationFromDB(
        id,
      );

    if (!responseDB) {
      throw new Error('Data not found!');
    }

    return responseDB;
  }

  async updateMedicationReminder(id: string, reminder: boolean): Promise<string> {
    const responseDB =
      await this.medicationFromDBRepository.updateMedicationReminderFromDB(
        id,
        reminder,
      );

    if (!responseDB) {
      throw new Error('Data not found!');
    }

    return responseDB;
  }

  async updateMedicationTaken(id: string, taken: boolean): Promise<string> {
    const responseDB =
      await this.medicationFromDBRepository.updateMedicationTakenFromDB(
        id,
        taken,
      );

    if (!responseDB) {
      throw new Error('Data not found!');
    }

    return responseDB;
  }

  async resetMedications(): Promise<string> {
    const responseDB =
      await this.medicationFromDBRepository.resetMedicationsFromDB();

    if (!responseDB) {
      throw new Error('Data not found!');
    }

    return responseDB;
  }
}

export default MedicationService;
