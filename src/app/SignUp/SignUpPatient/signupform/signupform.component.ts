import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { patientDetails } from 'src/app/Models/patientDetails';
import { PatientDetailsService } from 'src/app/Services/patientDetailsService';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  checkEmail:boolean = false;
  constructor(private patientDetail:PatientDetailsService,private router:Router) { }

  ngOnInit(): void {
  }

  signupformdata(signupform:NgForm):void{


    this.patientDetail.getPatientByEmail(signupform.value.email).subscribe(
      (response:patientDetails)=>
      {
        console.log("response in email check"+response);
        if(response===null)
        {
          this.checkEmail = true;

        }
        if(this.checkEmail == true)
    {
    this.patientDetail.addPatient(signupform.value).subscribe(
      (response:patientDetails)=>
      {
        console.log(response);
        this.router.navigateByUrl("/patient/login");
      }
    );
    }
    else{
      alert("Email Id already Exist");
    }
      }
    )

    console.log("checkemail " +this.checkEmail);


  }

}
