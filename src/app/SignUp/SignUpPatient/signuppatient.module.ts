import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SignupbaseComponent } from "./signupbase/signupbase.component";
import { SignupformComponent } from "./signupform/signupform.component";
import { SignupheaderComponent } from "./signupheader/signupheader.component";
import { SignupPatientRoutingModule } from "./signuppatient-routing.module";

@NgModule({
  declarations:[
    SignupbaseComponent,
    SignupformComponent,
    SignupheaderComponent
  ],
  imports:[
    CommonModule,
    SignupPatientRoutingModule,
    FormsModule
  ],
  exports:[]
})
export class SignupPatient{

}
