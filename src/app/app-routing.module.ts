import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortalAuthCallbackComponent } from '@3shapeinternal/portal-authentication-ang';

const routes: Routes = [
  { path: 'auth-callback', component: PortalAuthCallbackComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
