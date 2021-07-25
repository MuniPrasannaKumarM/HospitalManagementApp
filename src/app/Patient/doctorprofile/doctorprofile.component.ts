
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DoctorDetails } from 'src/app/Models/doctorDetails';
import { DoctorDetailsService } from 'src/app/Services/doctorDetailsService';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {
  doctor:DoctorDetails;
  constructor(private doctorDetailService:DoctorDetailsService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.getRouteParameters();
  }
  getDoctorById(id:number){
    this.doctorDetailService.getDoctorsById(id).subscribe(
      (response:DoctorDetails)=>{
        console.log("hello "+this.doctor +" "+id);
        this.doctor = response;
      }
    )
  }
  getRouteParameters(){
    this.route.params.subscribe(
      (params:Params)=>
      {
        console.log("params of doctor   "+params['id']);
        this.getDoctorById(+params['id']);
        console.log("params of patient "+params['patient_id']);
      }

    );
  }

}
