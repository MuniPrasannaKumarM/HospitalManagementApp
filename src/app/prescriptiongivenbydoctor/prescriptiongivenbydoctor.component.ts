import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PatientDoctorRelationModel } from '../Models/patientDoctorRelation';
import { DoctorDetailsService } from '../Services/doctorDetailsService';
import { PatientDetailsService } from '../Services/patientDetailsService';
import { PatientDoctorRelation } from '../Services/PatientRelationService';

@Component({
  selector: 'app-prescriptiongivenbydoctor',
  templateUrl: './prescriptiongivenbydoctor.component.html',
  styleUrls: ['./prescriptiongivenbydoctor.component.css']
})
export class PrescriptiongivenbydoctorComponent implements OnInit {

  constructor(private patientDoctorService:PatientDoctorRelation, private route:ActivatedRoute,private doctorService:DoctorDetailsService, private patientService:PatientDetailsService) { }
  patientDoctors:PatientDoctorRelationModel[];
  doctorid:number;
  ngOnInit(): void {
    console.log("came to get data");
    this.getByDoctorId();
  }
  getByDoctorId(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.doctorid = params['doctorid'];
        console.log("id "+ this.doctorid);
        this.patientDoctorService.getAppointmentByDoctorIdAndStatus(+this.doctorid,"completed").subscribe(
          (response:PatientDoctorRelationModel[])=>{
            console.log(response.length);

            this.patientDoctors = response;


          }
        )
      }
    )


  }
  viewPrescription(appid:number){
    console.log("view prescription   "+ appid);
  }

}
