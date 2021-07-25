import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PatientDoctorRelationModel } from 'src/app/Models/patientDoctorRelation';
import { PatientDoctorRelation } from 'src/app/Services/PatientRelationService';

@Component({
  selector: 'app-view-prescriptionsby-patient',
  templateUrl: './view-prescriptionsby-patient.component.html',
  styleUrls: ['./view-prescriptionsby-patient.component.css']
})
export class ViewPrescriptionsbyPatientComponent implements OnInit {

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
