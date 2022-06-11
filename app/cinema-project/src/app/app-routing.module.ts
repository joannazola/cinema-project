import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { WhatsOnComponent } from './whats-on/whats-on/whats-on.component';
import { MyTicketsComponent } from './my-tickets/my-tickets/my-tickets.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '/', component: MainPageComponent },
  { path: 'whats-on', component: WhatsOnComponent },
  { path: 'my-tickets', component: MyTicketsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
