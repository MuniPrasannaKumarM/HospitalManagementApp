import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupbaseComponent } from "./signupbase/signupbase.component";

const routes: Routes =[
  {path:"",component:SignupbaseComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupPatientRoutingModule{

}
