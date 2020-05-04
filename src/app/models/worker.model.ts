export interface Worker {
  id: number;
  firstname: string;
  lastname: string;
  Workdays: string;
  Workflor: Workfloor;
}

interface Workfloor {
  id: number;
  Floor: Floor;
}

interface Floor {
  id: number;
  code: number;
}
