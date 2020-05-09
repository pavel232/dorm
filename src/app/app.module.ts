import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared-module.module';
import { CoreModule } from './core/core-module.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SearchPipe } from './pipes/search.pipe';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotifierModule } from 'angular-notifier';
import { StudentsPageComponent } from './pages/students/students-page/students-page.component';
import { WorkersPageComponent } from './pages/workers/workers-page/workers-page.component';
import { WorkerDetailComponent } from './pages/workers/worker-detail/worker-detail.component';
import { WorkerCreateComponent } from './pages/workers/worker-create/worker-create.component';
import { RoomsPageComponent } from './pages/rooms/rooms-page/rooms-page.component';
import { RoomDetailComponent } from './pages/rooms/room-detail/room-detail.component';
import { RoomCreateComponent } from './pages/rooms/room-create/room-create.component';
import { StudentDetailComponent } from './pages/students/student-detail/student-detail.component';
import { StudentCreateComponent } from './pages/students/student-create/student-create.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    NotFoundComponent,
    LoginPageComponent,
    SearchPipe,
    StudentsPageComponent,
    WorkersPageComponent,
    WorkerDetailComponent,
    WorkerCreateComponent,
    RoomsPageComponent,
    RoomDetailComponent,
    RoomCreateComponent,
    StudentDetailComponent,
    StudentCreateComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'middle',
          distance: 12
        },
        vertical: {
          position: 'bottom',
          distance: 12,
          gap: 10
        }
      },
      theme: 'material'
    })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
