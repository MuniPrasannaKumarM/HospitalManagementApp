import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PatientDoctorRelationModel } from '../Models/patientDoctorRelation';
import { DoctorDetailsService } from '../Services/doctorDetailsService';
import { PatientDetailsService } from '../Services/patientDetailsService';
import { PatientDoctorRelation } from '../Services/PatientRelationService';

@Component({
  selector: 'app-viewappointmentsbydoctor',
  templateUrl: './viewappointmentsbydoctor.component.html',
  styleUrls: ['./viewappointmentsbydoctor.component.css']
})
export class ViewappointmentsbydoctorComponent implements OnInit {

  constructor(private patientDoctorService:PatientDoctorRelation, private route:ActivatedRoute,private doctorService:DoctorDetailsService, private patientService:PatientDetailsService) { }
  patientDoctors:PatientDoctorRelationModel[];
  doctorid:number;
  ngOnInit(): void {
    this.getByDoctorId();
  }
  getByDoctorId(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.doctorid = params['doctorid'];
        console.log("id "+ this.doctorid);
        this.patientDoctorService.getAppointmentByDoctorIdAndStatus(+this.doctorid,"Requested").subscribe(
          (response:PatientDoctorRelationModel[])=>{
            console.log(response.length);

            this.patientDoctors = response;


          }
        )
      }
    )


  }
  getAccepted(relation:PatientDoctorRelationModel){
    this.patientDoctorService.updateStatus(relation,"Accepted").subscribe(
      (response:PatientDoctorRelationModel)=>{
        console.log("status changed ");
        this.getByDoctorId();
      }
    )
  }
  getRejected(relation:PatientDoctorRelationModel){
    this.patientDoctorService.updateStatus(relation,"Rejected").subscribe(
      (response:PatientDoctorRelationModel)=>{
        console.log("Rejected ");
        this.getByDoctorId();
      }
    )
  }

}
