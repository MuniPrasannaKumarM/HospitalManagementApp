import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

@NgModule({
  declarations:[
    AdmindashboardComponent
  ],
  imports:[
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ],
  exports:[

  ]
})
export class AdminModule{

}
