import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrationPageComponent } from './login/registration-page/registration-page.component';
import { RouterConstants } from './contants/router-constants';

const routes: Routes = [
  { path: RouterConstants.main.path, component: MainPageComponent },
  { path: RouterConstants.register.path, component: RegistrationPageComponent },
  { path: RouterConstants.detail.path, component: DetailPageComponent },
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
