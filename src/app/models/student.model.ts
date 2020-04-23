export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  date: string;
  uuid: number;
  studroom: StudRoom;
  studfloor: StudFloor;
}

interface StudRoom {
  id: number;
  Room: number;
}

interface StudFloor {
  id: number;
  Floor: number;
}
