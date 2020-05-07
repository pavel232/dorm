export const RouterConstants = {
  login: { path: 'login', name: 'Login' },
  main: { path: 'main', name: 'Main Page' },
  students: { path: 'students', name: 'Students List' },
  detail: { path: 'detail/:id', name: 'Detail' },
  add: { path: 'add', name: 'Add' },
  workers: { path: 'workers', name: 'Workers List' },
  workerDetail: { path: 'worker-detail/:id', name: 'Worker detail' },
  workerCreate: { path: 'worker-create', name: 'Worker create' },
  rooms: { path: 'rooms', name: 'Rooms List' },
  roomDetail: { path: 'room-detail/:id', name: 'Room Detail' },
  roomCreate: { path: 'room-create', name: 'Room Create' },
  initial: { path: '', name: 'Initial Page' },
  notFound: { path: '**', name: 'Not Found' }
};
