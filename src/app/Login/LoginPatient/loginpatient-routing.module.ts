import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientloginBaseComponent } from './patientlogin-base/patientlogin-base.component';

const routes: Routes = [
  {path:"", redirectTo:"login"},
  {path:"login",
    component:PatientloginBaseComponent
  },
  {path:"signup",
  loadChildren:()=>import('src/app/SignUp/SignUpPatient/signuppatient.module').then((m)=>m.SignupPatient),
  },
  {
    path:'dashboard/:patient_id',
    loadChildren:()=> import('src/app/Patient/patient.module').then((m)=>m.PatientModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPatientRoutingModule { }
