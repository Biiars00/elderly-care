export interface IMedicationsData {
    id: string;
    name: string;
    dosage: number;
    time: string;
  }

export interface IResetMedicationsData {
    taken: boolean;
    reminder: boolean;
}
  
interface IMedicationFromDBRepository {
    getMedicationsFromDB(): Promise<IMedicationsData[]>;
    getMedicationByIdFromDB(id: string): Promise<IMedicationsData>;
    addMedicationFromDB(name: string, dosage: number, time: string): Promise<string>;
    removeMedicationFromDB(id: string): Promise<string>;
    updateMedicationReminderFromDB(id: string, reminder: boolean): Promise<string>;
    updateMedicationTakenFromDB(id: string, taken: boolean): Promise<string>;
    resetMedicationsFromDB(): Promise<string>;
}
  
export default IMedicationFromDBRepository;