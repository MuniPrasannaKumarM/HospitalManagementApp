import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { patientDetails } from 'src/app/Models/patientDetails';
import { PatientDetailsService } from 'src/app/Services/patientDetailsService';

@Component({
  selector: 'app-loginpatientform',
  templateUrl: './loginpatientform.component.html',
  styleUrls: ['./loginpatientform.component.css']
})
export class LoginpatientformComponent implements OnInit {

  constructor(private patientDetailService:PatientDetailsService, private router:Router) { }
  public patientDetail:patientDetails;
  check:string;
  id:number;
  routeTo:string;
  ngOnInit(): void {
  }
  loginformdata(loginform:NgForm):void{
    this.patientDetailService.getPatient(loginform.value.email, loginform.value.password).subscribe(
      (response:patientDetails) =>
      {
         this.patientDetail = response;
         if (this.patientDetail == null)
         alert("Patient Not Found!! Please Signup");
         else
         {
           this.id = this.patientDetail.id;
           this.routeTo = '/patient/dashboard/'+this.id;
          this.router.navigateByUrl(this.routeTo);
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
