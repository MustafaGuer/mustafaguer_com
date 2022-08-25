import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/shared/header/header.component';
import { LandingPageComponent } from './sections/landing-page/landing-page.component';
import { GreetingAreaComponent } from './sections/greeting-area/greeting-area.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ImprintComponent } from './pages/imprint/imprint.component';
import { AboutAreaComponent } from './sections/about-area/about-area.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ContactFormComponent } from './sections/contact-form/contact-form.component';
import { SkillStackComponent } from './sections/skill-stack/skill-stack.component';
import { FooterComponent } from './sections/shared/footer/footer.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
