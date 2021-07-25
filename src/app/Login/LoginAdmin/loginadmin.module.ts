import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginadminBaseComponent } from "./loginadmin-base/loginadmin-base.component";
import { LoginAdminRoutingModule } from "./loginadmin-routing.module";
import { LoginadminformComponent } from "./loginadminform/loginadminform.component";
import { LoginadminheaderComponent } from "./loginadminheader/loginadminheader.component";

@NgModule({
  declarations:[
    LoginadminBaseComponent,
    LoginadminformComponent,
    LoginadminheaderComponent
  ],
  imports:[
    CommonModule,
    LoginAdminRoutingModule,
    FormsModule
  ],
  exports:[]
})
export class LoginAdmin{

}
