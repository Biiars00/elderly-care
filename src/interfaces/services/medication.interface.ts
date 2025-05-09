import { IMedicationsData } from "../repositories/medicationFromDB.interface";

interface IMedicationService {
    getMedications(): Promise<IMedicationsData[]>;
    getMedicationById(id: string): Promise<IMedicationsData>;
    addMedication(name: string, dosage: number, time: string): Promise<string>;
    removeMedication(id: string): Promise<string>;
    updateMedicationReminder(id: string, reminder: boolean): Promise<string>;
    updateMedicationTaken(id: string, taken: boolean): Promise<string>;
    resetMedications(): Promise<string>;
}
  
export default IMedicationService;