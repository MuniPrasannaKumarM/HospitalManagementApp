import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PatientDoctorRelationModel } from '../Models/patientDoctorRelation';
import { PatientDoctorRelation } from '../Services/PatientRelationService';

@Component({
  selector: 'app-prescriptionform',
  templateUrl: './prescriptionform.component.html',
  styleUrls: ['./prescriptionform.component.css']
})
export class PrescriptionformComponent implements OnInit {

  constructor(private patientDoctorService:PatientDoctorRelation, private route:ActivatedRoute, private router:Router) { }
  prescriptionForm:FormGroup;
  appid:number;
  patientid:number;
  doctorid:number;

  ngOnInit(): void {
    let today = new Date();

    this.route.params.subscribe(
      (response:Params)=>
      {
        this.appid = response['appid'];
        this.patientid = response['patientid'];
        this.doctorid = response['doctorid'];
      }
    )
    this.prescriptionForm = new FormGroup(
      {
        'appid': new FormControl(this.appid),
        'patientid':new FormControl(this.patientid),
        'doctorid':new FormControl(this.doctorid),
        'prescription': new FormArray([]),
        "status":new FormControl("Requested"),
        "date":new FormControl(today.toISOString().split('T')[0])
      }
    );

      }
      onSubmit(){

        // this.patientDoctorService.updatePrescription(this.prescriptionForm.value.appid,this.prescriptionForm.value.prescription.toString()).subscribe(
        //   (response:PatientDoctorRelationModel)=>
        //   {
        //     console.log("successfully added "+ response);
        //   }
        // )

        this.prescriptionForm.value.prescription = this.prescriptionForm.value.prescription.toString();
        this.patientDoctorService.updatePrescription(this.prescriptionForm.value).subscribe(
          (response:PatientDoctorRelationModel)=>{
            console.log("updated data");

          }
        );
        console.log(this.prescriptionForm.value)
  }
  onAddData()
  {
    const controls = new FormControl(null);
    (<FormArray>this.prescriptionForm.get('prescription')).push(controls);
  }
  getData()
  {
    return (<FormArray>this.prescriptionForm.get('prescription')).controls;
  }

}
