import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterConstants } from './constants/router-constants';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StudentsPageComponent } from './pages/students/students-page/students-page.component';
import { WorkersPageComponent } from './pages/workers/workers-page/workers-page.component';
import { WorkerDetailComponent } from './pages/workers/worker-detail/worker-detail.component';
import { WorkerCreateComponent } from './pages/workers/worker-create/worker-create.component';
import { RoomsPageComponent } from './pages/rooms/rooms-page/rooms-page.component';
import { RoomDetailComponent } from './pages/rooms/room-detail/room-detail.component';
import { RoomCreateComponent } from './pages/rooms/room-create/room-create.component';
import { StudentDetailComponent } from './pages/students/student-detail/student-detail.component';
import { StudentCreateComponent } from './pages/students/student-create/student-create.component';

const routes: Routes = [
  { path: RouterConstants.main.path, component: MainPageComponent },
  { path: RouterConstants.login.path, component: LoginPageComponent },
  { path: RouterConstants.students.path, component: StudentsPageComponent },
  { path: RouterConstants.studentDetail.path, component: StudentDetailComponent },
  { path: RouterConstants.studentCreate.path, component: StudentCreateComponent },
  { path: RouterConstants.workers.path, component: WorkersPageComponent },
  { path: RouterConstants.workerDetail.path, component: WorkerDetailComponent },
  { path: RouterConstants.workerCreate.path, component: WorkerCreateComponent },
  { path: RouterConstants.rooms.path, component: RoomsPageComponent },
  { path: RouterConstants.roomDetail.path, component: RoomDetailComponent },
  { path: RouterConstants.roomCreate.path, component: RoomCreateComponent },
  {
    path: RouterConstants.initial.path,
    redirectTo: RouterConstants.main.path,
    pathMatch: 'full'
  },
  { path: RouterConstants.notFound.path, component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
