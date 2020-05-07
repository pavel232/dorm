export interface Student {
  FirstName: string;
  LastName: string;
  StudRoom: StudRoom;
  StudFloor: StudFloor;
  Date?: string;
  UUID?: number;
  ID?: number;
}

interface StudRoom {
  Room: number;
  ID?: number;
}

interface StudFloor {
  Floor: number;
  ID?: number;
}
