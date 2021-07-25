import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PatientDoctorRelationModel } from '../Models/patientDoctorRelation';
import { PatientDoctorRelation } from '../Services/PatientRelationService';

@Component({
  selector: 'app-viewprescriptionbydoctor',
  templateUrl: './viewprescriptionbydoctor.component.html',
  styleUrls: ['./viewprescriptionbydoctor.component.css']
})
export class ViewprescriptionbydoctorComponent implements OnInit {

  constructor(private route:ActivatedRoute, private relationService:PatientDoctorRelation) { }
  patientDoctorDetails:PatientDoctorRelationModel;
  appid:number;
  prescriptionList:string[];
  ngOnInit(): void {
    this.getAppointmentsDetails();
  }
  getAppointmentsDetails(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.appid = +params['appid'];
        this.relationService.getAppointmentById(this.appid).subscribe(
          (response:PatientDoctorRelationModel)=>{
            this.patientDoctorDetails = response;
            this.prescriptionList= response.prescription.split(',');
          }
        );
      }
    );
  }
}
