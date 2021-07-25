import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { patientDetails } from '../Models/patientDetails';
import { PatientDetailsService } from '../Services/patientDetailsService';

@Component({
  selector: 'app-patient-profiles',
  templateUrl: './patient-profiles.component.html',
  styleUrls: ['./patient-profiles.component.css']
})
export class PatientProfilesComponent implements OnInit {

  constructor(private patientService:PatientDetailsService) { }
  patients:patientDetails[];
  ngOnInit(): void {
    this.getAllPatients()
  }
  getAllPatients(){
    this.patientService.getPatients().subscribe(
      (response:patientDetails[])=>{
        this.patients = response;

      }
    )
  }
  onDeletePatient(id:number)
  {
    this.patientService.deletePatient(id).subscribe(
      (response:string)=>
      {
        console.log("Delete console"+response);
        this.getAllPatients();
      },
      (error:HttpErrorResponse)=>{
        this.getAllPatients();
      }
    );
  }
}
