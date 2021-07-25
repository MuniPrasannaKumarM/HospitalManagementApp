import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrescriptionformComponent } from "../prescriptionform/prescriptionform.component";
import { AppbookformComponent } from "./appbookform/appbookform.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DoctorprofileComponent } from "./doctorprofile/doctorprofile.component";
import { PatientsPageComponent } from "./patients-page/patients-page.component";
import { PrescriptionforpatientComponent } from "./prescriptionforpatient/prescriptionforpatient.component";
import { ViewDoctorsComponent } from "./view-doctors/view-doctors.component";
import { ViewPrescriptionsbyPatientComponent } from "./view-prescriptionsby-patient/view-prescriptionsby-patient.component";
import { ViewappbypatientComponent } from "./viewappbypatient/viewappbypatient.component";

const routes:Routes=[
  {
    path:"",component:DashboardComponent,
  },
  {
    path:"viewdoctors", component:ViewDoctorsComponent
  },
  {
    path:'viewdoctor/:id', component:DoctorprofileComponent
  },
  {
    path:'viewdoctor/:id/bookapp', component:AppbookformComponent
  },
  {
    path:"viewappointments", component:ViewappbypatientComponent
  },
  {
    path:"viewprescriptions", component:PrescriptionforpatientComponent
  },
  {
    path:'viewprescriptions/viewprescription/:appid', component:ViewPrescriptionsbyPatientComponent
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule{

}
