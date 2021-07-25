import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DoctorDetails } from '../Models/doctorDetails';
import { DoctorDetailsService } from '../Services/doctorDetailsService';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

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
        console.log("params of doctor   "+params['doctorid']);
        this.getDoctorById(+params['doctorid']);

      }

    );
  }

}
