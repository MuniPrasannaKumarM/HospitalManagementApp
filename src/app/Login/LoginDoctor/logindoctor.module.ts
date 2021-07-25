import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LogindoctorBaseComponent } from "./logindoctor-base/logindoctor-base.component";
import { LoginDoctorRoutingModule } from "./logindoctor-routing.module";
import { LogindoctorformComponent } from "./logindoctorform/logindoctorform.component";
import { LoginheaderComponent } from "./loginheader/loginheader.component";

@NgModule({
  declarations:[
    LogindoctorBaseComponent,
    LogindoctorformComponent,
    LoginheaderComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    LoginDoctorRoutingModule
  ],
  exports:[]
})
export class loginDoctor{

}
