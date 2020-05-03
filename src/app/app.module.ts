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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SearchPipe } from './pipes/search.pipe';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotifierModule } from 'angular-notifier';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    DetailPageComponent,
    NotFoundComponent,
    LoginPageComponent,
    SearchPipe,
    AddPageComponent
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
