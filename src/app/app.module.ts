import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared-module.module';
import { CoreModule } from './core/core-module.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    DetailPageComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule, CoreModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
