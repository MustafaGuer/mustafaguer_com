import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './landing-page/shared/header/header.component';
import { LandingPageComponent } from './landing-page/sections/landing-page.component';
import { GreetingAreaComponent } from './landing-page/greeting-area/greeting-area.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ImprintComponent } from './pages/imprint/imprint.component';
import { AboutAreaComponent } from './landing-page/about-area/about-area.component';
import { ProjectsComponent } from './landing-page/projects/projects.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ContactFormComponent } from './landing-page/contact-form/contact-form.component';
import { SkillStackComponent } from './landing-page/skill-stack/skill-stack.component';
import { FooterComponent } from './landing-page/shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GreetingAreaComponent,
    HeaderComponent,
    ImprintComponent,
    AboutAreaComponent,
    ProjectsComponent,
    PrivacyPolicyComponent,
    ContactFormComponent,
    SkillStackComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
