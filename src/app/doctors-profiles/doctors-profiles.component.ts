import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorDetails } from '../Models/doctorDetails';
import { DoctorDetailsService } from '../Services/doctorDetailsService';

@Component({
  selector: 'app-doctors-profiles',
  templateUrl: './doctors-profiles.component.html',
  styleUrls: ['./doctors-profiles.component.css']
})
export class DoctorsProfilesComponent implements OnInit {

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
  deleteDoctor(id:number){

    this.doctorDetailsService.deleteDoctor(id).subscribe(
      (response:string)=>
      {
        console.log("deleted doctor");
        this.getDoctorDetails();
      },
      (error:HttpErrorResponse)=>{
        this.getDoctorDetails();
      }
    )
  }
  public onOpenModal(doctor: DoctorDetails, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');

    }

    container.appendChild(button);
    button.click();
    console.log("added");
  }

  onaddEmployee(form:NgForm){
    document.getElementById('add-employee-form').click();
    console.log("added"+ form.value);
    this.doctorDetailsService.addDoctor(form.value).subscribe(
      (response:DoctorDetails)=>{
        console.log("after adding");
        form.reset();
        this.getDoctorDetails();
      }
    )
  }
}
