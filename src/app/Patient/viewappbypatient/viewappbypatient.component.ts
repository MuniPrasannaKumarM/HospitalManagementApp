import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DoctorDetails } from 'src/app/Models/doctorDetails';
import { patientDetails } from 'src/app/Models/patientDetails';
import { PatientDoctorRelationModel } from 'src/app/Models/patientDoctorRelation';
import { DoctorDetailsService } from 'src/app/Services/doctorDetailsService';
import { PatientDetailsService } from 'src/app/Services/patientDetailsService';
import { PatientDoctorRelation } from 'src/app/Services/PatientRelationService';

@Component({
  selector: 'app-viewappbypatient',
  templateUrl: './viewappbypatient.component.html',
  styleUrls: ['./viewappbypatient.component.css']
})
export class ViewappbypatientComponent implements OnInit {

  constructor(private patientDoctorService:PatientDoctorRelation, private route:ActivatedRoute,private doctorService:DoctorDetailsService, private patientService:PatientDetailsService) { }
  patientDoctors:PatientDoctorRelationModel[];
  patientid:number;
  doctornames:string[];
  ngOnInit(): void {
    this.getByPatientId();
  }
  getByPatientId(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.patientid = params['patient_id'];
        console.log("id "+ this.patientid);
        this.patientDoctorService.getAppointmentByPatientId(+this.patientid).subscribe(
          (response:PatientDoctorRelationModel[])=>{
            console.log(response.length);

            this.patientDoctors = response;
            console.log("data in response "+response[0].appid);

          }
        )
      }
    )


  }

}
