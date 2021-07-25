import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentloginformComponent } from './appointmentloginform/appointmentloginform.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorsProfilesComponent } from './doctors-profiles/doctors-profiles.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PatientProfilesComponent } from './patient-profiles/patient-profiles.component';
import { DoctorprofileComponent } from './Patient/doctorprofile/doctorprofile.component';
import { PrescriptionformComponent } from './prescriptionform/prescriptionform.component';
import { PrescriptiongivenbydoctorComponent } from './prescriptiongivenbydoctor/prescriptiongivenbydoctor.component';
import { ViewappointmentsbydoctorComponent } from './viewappointmentsbydoctor/viewappointmentsbydoctor.component';
import { ViewprescriptionbydoctorComponent } from './viewprescriptionbydoctor/viewprescriptionbydoctor.component';


const routes: Routes = [
  {path:"", pathMatch:"full", component:MainpageComponent},
  {path:"patient",
  loadChildren:()=>import('src/app/Login/LoginPatient/loginpatient.module').then((m)=>m.loginPatient),
  },
  {path:"doctor",
  loadChildren:()=>import('src/app/Login/LoginDoctor/logindoctor.module').then((m)=>m.loginDoctor),
  },
  {path:"admin",
  loadChildren:()=>import('src/app/Login/LoginAdmin/loginadmin.module').then((m)=>m.LoginAdmin),
  },
  {
    path:"doctor/dashboard/:doctorid",
    component:DoctorDashboardComponent
  },
  {
    path:"doctor/dashboard/:doctorid/viewappointmentsbydoctor",
    component:ViewappointmentsbydoctorComponent
  },
  {
    path:"doctor/dashboard/:doctorid/applogin",
    component:AppointmentloginformComponent
  },
  {
    path:"doctor/dashboard/:doctorid/applogin/:patientid/appid/:appid/prescription",
    component:PrescriptionformComponent
  },
  {
    path:"doctor/dashboard/:doctorid/prescriptions",
    component:PrescriptiongivenbydoctorComponent
  },
  {
    path:"doctor/dashboard/:doctorid/prescriptions/viewprescription/:appid",
    component:ViewprescriptionbydoctorComponent
  },
  {
    path:"doctor/dashboard/:doctorid/profile",
    component:DoctorProfileComponent
  },
  {
    path:"admin/dashboard/viewdoctorprofiles",
    component:DoctorsProfilesComponent
  },
  {
    path:"admin/dashboard/viewpatientsprofiles",
    component:PatientProfilesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
