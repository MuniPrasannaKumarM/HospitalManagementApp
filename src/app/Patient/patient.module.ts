import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PatientRoutingModule } from "./patient-routing.module";
import { PatientheaderComponent } from './patientheader/patientheader.component';
import { PatientsPageComponent } from './patients-page/patients-page.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { RouterModule } from "@angular/router";
import { AppbookformComponent } from './appbookform/appbookform.component';
import { ViewappbypatientComponent } from './viewappbypatient/viewappbypatient.component';
import { ViewPrescriptionsbyPatientComponent } from './view-prescriptionsby-patient/view-prescriptionsby-patient.component';
import { PrescriptionforpatientComponent } from './prescriptionforpatient/prescriptionforpatient.component';

@NgModule({
  declarations:[
    DashboardComponent,
    PatientheaderComponent,
    PatientsPageComponent,
    ViewDoctorsComponent,
    DoctorprofileComponent,
    AppbookformComponent,
    ViewappbypatientComponent,
    ViewPrescriptionsbyPatientComponent,
    PrescriptionforpatientComponent
  ],
  imports:[
    FormsModule,
    PatientRoutingModule,
    CommonModule,
    RouterModule
  ],
  exports:[]
})
export class PatientModule{

}
