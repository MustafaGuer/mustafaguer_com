import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { LandingPageComponent } from './landing-page/sections/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'privacy', component: PrivacyPolicyComponent},
  {path: '**', component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
