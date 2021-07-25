import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DoctorDetails } from '../Models/doctorDetails';
import { DoctorDetailsService } from '../Services/doctorDetailsService';

@Component({
  selector: 'app-doctorheader',
  templateUrl: './doctorheader.component.html',
  styleUrls: ['./doctorheader.component.css']
})
export class DoctorheaderComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router, private doctorService:DoctorDetailsService) { }
  patientDetail:DoctorDetails;
  username:string;
  ngOnInit(): void {
    this.loadusername();
  }
  loadusername(){
    this.route.params.subscribe(
      (params:Params)=>{
    this.doctorService.getDoctorsById(+params['doctorid']).subscribe(
      (response:DoctorDetails)=>
      {
        this.username = response.username;
      }
    )
      }
    )
  }
  gotohomepage()
  {
    this.route.params.subscribe(
      (params:Params)=>{
        console.log("in header "+ params['doctorid']);

        var routeto = "/doctor/dashboard/"+params['doctorid'];
        this.router.navigateByUrl(routeto);
      }
    )
    console.log();
  }
}
