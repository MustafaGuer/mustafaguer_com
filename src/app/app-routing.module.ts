import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SectionsComponent } from './landing-page/sections/sections.component';

const routes: Routes = [
  {path: '', component: SectionsComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'privacy', component: PrivacyPolicyComponent},
  {path: '**', component: SectionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
