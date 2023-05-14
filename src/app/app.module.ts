import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDatepickerModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AdmissionReportComponent } from './admission-report/admission-report.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AppDateElementComponent } from './common/app-date-element/app-date-element.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppLogoHeaderComponent } from './app-logo-header/app-logo-header.component';
import { AdmissionReportContentComponent } from './admission-report-content/admission-report-content.component';
import { AdmissionRightContentComponent } from './admission-right-content/admission-right-content.component';
import { AdmissionCommentsComponent } from './admission-comments/admission-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionReportComponent,
    RegistrationFormComponent,
    AppHeaderComponent,
    AppLogoHeaderComponent,
    AdmissionReportContentComponent,
    AdmissionRightContentComponent,
    AdmissionCommentsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,    
    NgbModule,
    NgbNavModule,
    NgbDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
