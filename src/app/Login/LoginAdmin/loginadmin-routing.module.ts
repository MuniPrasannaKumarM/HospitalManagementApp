import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdmindashboardComponent } from "src/app/admindashboard/admindashboard.component";

import { LoginadminBaseComponent } from "./loginadmin-base/loginadmin-base.component";

const routes: Routes = [
  {path:"", redirectTo:"login"},
  {path:"login",
    component:LoginadminBaseComponent
  },
  {
    path:"dashboard",
    component:AdmindashboardComponent
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAdminRoutingModule{

}
