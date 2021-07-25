import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginheaderComponent } from "./loginheader/loginheader.component";
import { LoginPatientRoutingModule } from "./loginpatient-routing.module";
import { LoginpatientformComponent } from "./loginpatientform/loginpatientform.component";
import { PatientloginBaseComponent } from "./patientlogin-base/patientlogin-base.component";

@NgModule(
  {
    declarations:[
      LoginheaderComponent,
      LoginpatientformComponent,
      PatientloginBaseComponent
    ],
    imports:[

      CommonModule,
      LoginPatientRoutingModule,
      FormsModule
    ],
    exports:[]
  }
)
export class loginPatient{

}
