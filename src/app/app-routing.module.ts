import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { LoginauthGuard } from './loginauth.guard';

const routes: Routes = [
  { path: '', 
    pathMatch: 'full', 
    redirectTo: 'login'
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[LoginauthGuard]
  },
  {
    path:'landingPage',
    component:LandingPageComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
