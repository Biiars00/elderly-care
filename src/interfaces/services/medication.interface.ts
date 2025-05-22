import { IMedicationsData } from "../repositories/medicationFromDB.interface";

interface IMedicationService {
    getMedications(userId: string): Promise<IMedicationsData[]>;
    getMedicationById(id: string, userId: string): Promise<IMedicationsData>;
    addMedication(name: string, dosage: number, time: string, userId: string): Promise<string>;
    removeMedication(id: string, userId: string): Promise<string>;
    updateMedicationReminder(id: string, reminder: boolean, userId: string): Promise<string>;
    updateMedicationTaken(id: string, taken: boolean, userId: string): Promise<string>;
    resetMedications(userId: string): Promise<string>;
}
  
export default IMedicationService;