import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { patientDetails } from 'src/app/Models/patientDetails';
import { PatientDetailsService } from 'src/app/Services/patientDetailsService';

@Component({
  selector: 'app-patientheader',
  templateUrl: './patientheader.component.html',
  styleUrls: ['./patientheader.component.css']
})
export class PatientheaderComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router, private patientService:PatientDetailsService) { }
  patientDetail:patientDetails;
  username:string;
  ngOnInit(): void {
    this.loadusername();
  }
  loadusername(){
    this.route.params.subscribe(
      (params:Params)=>{
    this.patientService.getPatientById(+params['patient_id']).subscribe(
      (response:patientDetails)=>
      {
        this.username = response.username;
      }
    )
      }
    )
  }
  gotohomepage()
  {
    this.route.params.subscribe(
      (params:Params)=>{
        console.log("in header "+ params['patient_id']);

        var routeto = "/patient/dashboard/"+params['patient_id'];
        this.router.navigateByUrl(routeto);
      }
    )
    console.log();
  }
}
