export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  date: string;
  uuid: number;
  studRoom: StudRoom;
  studFloor: StudFloor;
}

interface StudRoom {
  id: number;
  room: number;
}

interface StudFloor {
  id: number;
  floor: number;
}
