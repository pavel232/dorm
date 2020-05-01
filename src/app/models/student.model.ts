export interface Student {
  firstname: string;
  lastname: string;
  studroom: StudRoom;
  studfloor: StudFloor;
  date?: string;
  uuid?: number;
  id?: number;
}

interface StudRoom {
  Room: number;
  id?: number;
}

interface StudFloor {
  Floor: number;
  id?: number;
}
