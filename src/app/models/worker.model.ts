export interface Worker {
  ID?: number;
  FirstName: string;
  LastName: string;
  WorkDays: string;
  WorkFloor: WorkFloor;
}

interface WorkFloor {
  ID?: number;
  Floor: Floor;
}

interface Floor {
  Floor: number;
  Code: number;
}
