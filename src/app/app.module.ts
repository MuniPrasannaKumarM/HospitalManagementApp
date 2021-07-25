import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { ViewappointmentsbydoctorComponent } from './viewappointmentsbydoctor/viewappointmentsbydoctor.component';
import { AppointmentloginformComponent } from './appointmentloginform/appointmentloginform.component';
import { PrescriptionformComponent } from './prescriptionform/prescriptionform.component';
import { DatePipe } from '@angular/common';
import { PrescriptiongivenbydoctorComponent } from './prescriptiongivenbydoctor/prescriptiongivenbydoctor.component';
import { ViewprescriptionbydoctorComponent } from './viewprescriptionbydoctor/viewprescriptionbydoctor.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DoctorsProfilesComponent } from './doctors-profiles/doctors-profiles.component';
import { PatientProfilesComponent } from './patient-profiles/patient-profiles.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CommonheaderComponent } from './commonheader/commonheader.component';
import { DoctorheaderComponent } from './doctorheader/doctorheader.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorDashboardComponent,
    ViewappointmentsbydoctorComponent,
    AppointmentloginformComponent,
    PrescriptionformComponent,
    PrescriptiongivenbydoctorComponent,
    ViewprescriptionbydoctorComponent,
    DoctorProfileComponent,
    AdmindashboardComponent,
    DoctorsProfilesComponent,
    PatientProfilesComponent,
    MainpageComponent,
    CommonheaderComponent,

    DoctorheaderComponent,

    AdminheaderComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
