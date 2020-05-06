import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterConstants } from './constants/router-constants';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';

const routes: Routes = [
  { path: RouterConstants.main.path, component: MainPageComponent },
  { path: RouterConstants.login.path, component: LoginPageComponent },
  { path: RouterConstants.students.path, component: StudentsPageComponent },
  { path: RouterConstants.detail.path, component: DetailPageComponent },
  { path: RouterConstants.add.path, component: AddPageComponent },
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
