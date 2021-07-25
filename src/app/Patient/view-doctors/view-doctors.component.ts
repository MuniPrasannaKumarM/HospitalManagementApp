import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DoctorDetails } from 'src/app/Models/doctorDetails';
import { DoctorDetailsService } from 'src/app/Services/doctorDetailsService';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent implements OnInit {

  constructor(private doctorDetailsService:DoctorDetailsService) { }
  doctors:DoctorDetails[]=[];
  ngOnInit(): void {
    this.getDoctorDetails();
  }
  getDoctorDetails(){
     this.doctorDetailsService.getDoctors().subscribe(
      (response:DoctorDetails[])=>
      {
        this.doctors = response;

      },
      (error:HttpErrorResponse)=>{
        console.log('error in getting details');
      }
    )
  }

}
