import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { patientDetails } from '../Models/patientDetails';
import { PatientDoctorRelationModel } from '../Models/patientDoctorRelation';
import { PatientDetailsService } from '../Services/patientDetailsService';
import { PatientDoctorRelation } from '../Services/PatientRelationService';

@Component({
  selector: 'app-appointmentloginform',
  templateUrl: './appointmentloginform.component.html',
  styleUrls: ['./appointmentloginform.component.css']
})
export class AppointmentloginformComponent implements OnInit {

  constructor(private patientDetailService:PatientDetailsService, private router:Router, private route:ActivatedRoute, private relation:PatientDoctorRelation, private datepipe:DatePipe) { }
  public patientDetail:patientDetails;
  check:string;
  id:number;
  doctorid:number;
  routeTo:string;
  date:Date;
  datestring:string;
  appid:number;
  time:number;
  ngOnInit(): void {
  }
  loginformdata(loginform:NgForm):void{
    this.date = new Date();

    this.patientDetailService.getPatient(loginform.value.email, loginform.value.password).subscribe(
      (response:patientDetails) =>
      {
         this.patientDetail = response;
         if (this.patientDetail == null)
         alert("Patient Not Found!! Please Signup");
         else
         {
           this.route.params.subscribe(
             (params:Params)=>
             {

                this.doctorid = params['doctorid'];
             }
           )
           this.datestring = this.datepipe.transform(this.date, 'yyyy-MM-dd')
           this.relation.getAppointmentByDoctorIdAndPateintidAndDate(this.doctorid, this.patientDetail.id,this.datestring).subscribe(
             (response:PatientDoctorRelationModel)=>
             {
                console.log(response+" got appointments ");
                this.appid = response.appid;
                this.time = +response.time;
                this.id = this.patientDetail.id;
           this.routeTo = 'doctor/dashboard/'+this.doctorid+'/applogin/'+this.id+'/appid/'+this.appid+'/prescription';
          this.router.navigateByUrl(this.routeTo);
             }
           )

         }
         console.log(this.patientDetail);
      },
      (error:HttpErrorResponse)=>{
         alert("Patient Not Found!! Please Signup");
        // this.router.navigateByUrl("/patient/dashboard");
      }
    );
  }

}
