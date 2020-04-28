export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  uuid: number;
  studroom: StudRoom;
  studfloor: StudFloor;
  date?: string;
}

interface StudRoom {
  id: number;
  Room: number;
}

interface StudFloor {
  id: number;
  Floor: number;
}
