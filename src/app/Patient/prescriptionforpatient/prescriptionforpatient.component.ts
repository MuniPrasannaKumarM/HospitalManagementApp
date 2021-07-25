import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PatientDoctorRelationModel } from 'src/app/Models/patientDoctorRelation';
import { PatientDetailsService } from 'src/app/Services/patientDetailsService';
import { PatientDoctorRelation } from 'src/app/Services/PatientRelationService';

@Component({
  selector: 'app-prescriptionforpatient',
  templateUrl: './prescriptionforpatient.component.html',
  styleUrls: ['./prescriptionforpatient.component.css']
})
export class PrescriptionforpatientComponent implements OnInit {

  constructor(private patientDoctorService:PatientDoctorRelation, private route:ActivatedRoute, private patientService:PatientDetailsService) { }
  patientDoctors:PatientDoctorRelationModel[];
  patientid:number;
  ngOnInit(): void {
    console.log("came to get data");
    this.getByDoctorId();
  }
  getByDoctorId(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.patientid = params['patient_id'];
        console.log("id "+ this.patientid);
        this.patientDoctorService.getAppointmentByPatientIdAndStatus(+this.patientid,"completed").subscribe(
          (response:PatientDoctorRelationModel[])=>{
            console.log(response.length);

            this.patientDoctors = response;


          }
        )
      }
    )


  }

}
