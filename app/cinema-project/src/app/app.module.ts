import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { WhatsOnComponent } from './whats-on/whats-on/whats-on.component';
import { MyTicketsComponent } from './my-tickets/my-tickets/my-tickets.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WhatsOnComponent,
    MyTicketsComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
