import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { DoctorDashboardComponent } from "src/app/Doctor/doctor-dashboard/doctor-dashboard.component";
// import { DashboardComponent } from "src/app/Doctor/dashboard/dashboard.component";
import { LogindoctorBaseComponent } from "./logindoctor-base/logindoctor-base.component";
const routes: Routes = [
  {path:"", redirectTo:"login"},
  {path:"login",
    component:LogindoctorBaseComponent
  },


];
@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  }
)
export class LoginDoctorRoutingModule{

}
